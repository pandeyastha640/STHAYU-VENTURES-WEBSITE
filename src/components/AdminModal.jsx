import { useState, useEffect, useCallback } from "react"
import { X, RefreshCw, Download, Trash2, Search, Database, CheckCircle2, Clock, Building, User, Mail, ExternalLink } from "lucide-react"

export default function AdminModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("inquiries") // 'inquiries' | 'assessments'
  const [inquiries, setInquiries] = useState([])
  const [assessments, setAssessments] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [notification, setNotification] = useState(null)

  const showNotification = (msg, type = "success") => {
    setNotification({ msg, type })
    setTimeout(() => setNotification(null), 3500)
  }

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const [resInq, resAss] = await Promise.all([
        fetch("/api/inquiry").then((r) => r.json()),
        fetch("/api/assessment").then((r) => r.json()),
      ])

      if (resInq.success) {
        setInquiries(resInq.data || [])
      }
      if (resAss.success) {
        setAssessments(resAss.data || [])
      }
    } catch (err) {
      showNotification("Failed to load records from MongoDB: " + err.message, "error")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return
    let isMounted = true

    const load = async () => {
      setLoading(true)
      try {
        const [resInq, resAss] = await Promise.all([
          fetch("/api/inquiry").then((r) => r.json()),
          fetch("/api/assessment").then((r) => r.json()),
        ])
        if (isMounted) {
          if (resInq.success) setInquiries(resInq.data || [])
          if (resAss.success) setAssessments(resAss.data || [])
        }
      } catch (err) {
        if (isMounted) {
          setNotification({ msg: "Failed to load records: " + err.message, type: "error" })
        }
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    load()
    return () => {
      isMounted = false
    }
  }, [isOpen])

  const handleUpdateStatus = async (type, id, newStatus) => {
    try {
      const endpoint = type === "inquiries" ? `/api/inquiry/${id}` : `/api/assessment/${id}`
      const res = await fetch(endpoint, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })
      const data = await res.json()
      if (data.success) {
        showNotification("Status updated in MongoDB Atlas!")
        if (type === "inquiries") {
          setInquiries((prev) => prev.map((item) => (item._id === id ? { ...item, status: newStatus } : item)))
        } else {
          setAssessments((prev) => prev.map((item) => (item._id === id ? { ...item, status: newStatus } : item)))
        }
      }
    } catch (err) {
      showNotification("Failed to update status: " + err.message, "error")
    }
  }

  const handleDelete = async (type, id) => {
    if (!window.confirm("Are you sure you want to delete this record from MongoDB?")) return
    try {
      const endpoint = type === "inquiries" ? `/api/inquiry/${id}` : `/api/assessment/${id}`
      const res = await fetch(endpoint, { method: "DELETE" })
      const data = await res.json()
      if (data.success) {
        showNotification("Record deleted from MongoDB.")
        if (type === "inquiries") {
          setInquiries((prev) => prev.filter((item) => item._id !== id))
        } else {
          setAssessments((prev) => prev.filter((item) => item._id !== id))
        }
      }
    } catch (err) {
      showNotification("Failed to delete record: " + err.message, "error")
    }
  }

  const exportToCSV = (type) => {
    const data = type === "inquiries" ? inquiries : assessments
    if (!data.length) {
      showNotification("No records to export", "error")
      return
    }

    let csvContent = "data:text/csv;charset=utf-8,"
    if (type === "inquiries") {
      csvContent += "ID,Name,Contact,Goal,Plan,Status,Date\n"
      data.forEach((row) => {
        const date = row.createdAt ? new Date(row.createdAt).toLocaleDateString() : ""
        csvContent += `"${row._id}","${(row.name || "").replace(/"/g, '""')}","${(row.contact || "").replace(/"/g, '""')}","${(row.goal || "").replace(/"/g, '""')}","${(row.planInterest || "").replace(/"/g, '""')}","${row.status}","${date}"\n`
      })
    } else {
      csvContent += "ID,Name,Email,Company,Team Size,Main Challenge,Current Tools,Status,Date\n"
      data.forEach((row) => {
        const date = row.createdAt ? new Date(row.createdAt).toLocaleDateString() : ""
        csvContent += `"${row._id}","${(row.name || "").replace(/"/g, '""')}","${(row.email || "").replace(/"/g, '""')}","${(row.company || "").replace(/"/g, '""')}","${(row.teamSize || "").replace(/"/g, '""')}","${(row.mainChallenge || "").replace(/"/g, '""')}","${(row.currentTools || "").replace(/"/g, '""')}","${row.status}","${date}"\n`
      })
    }

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `sthayu_${type}_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    showNotification(`Exported ${data.length} records to CSV!`)
  }

  if (!isOpen) return null

  const filteredInquiries = inquiries.filter(
    (item) =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.contact?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.goal?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredAssessments = assessments.filter(
    (item) =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mainChallenge?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl border border-white/10 bg-[#0c0d12] shadow-2xl overflow-hidden text-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#d4b982]/10 border border-[#d4b982]/20 text-[#d4b982]">
              <Database size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                User Submissions & Lead Center
                <span className="text-[11px] font-mono font-normal px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ● Connected to MongoDB Atlas
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Database: <span className="text-slate-200 font-mono">sthayu_ventures</span> | Collections:{" "}
                <span className="text-slate-200 font-mono">inquiries</span> &amp;{" "}
                <span className="text-slate-200 font-mono">assessments</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchData}
              disabled={loading}
              title="Refresh records from MongoDB"
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <RefreshCw size={16} className={loading ? "animate-spin text-[#d4b982]" : ""} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Notification Banner */}
        {notification && (
          <div
            className={`px-6 py-2 text-xs flex items-center gap-2 font-medium ${
              notification.type === "error"
                ? "bg-red-500/20 text-red-300 border-b border-red-500/30"
                : "bg-emerald-500/20 text-emerald-300 border-b border-emerald-500/30"
            }`}
          >
            <CheckCircle2 size={14} />
            <span>{notification.msg}</span>
          </div>
        )}

        {/* Action Controls & Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-3 border-b border-white/10 bg-white/[0.01]">
          {/* Tabs */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("inquiries")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "inquiries"
                  ? "bg-[#d4b982] text-black shadow-md shadow-[#d4b982]/20"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5"
              }`}
            >
              Strategy Inquiries ({inquiries.length})
            </button>
            <button
              onClick={() => setActiveTab("assessments")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "assessments"
                  ? "bg-[#d4b982] text-black shadow-md shadow-[#d4b982]/20"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5"
              }`}
            >
              Automation Assessments ({assessments.length})
            </button>
          </div>

          {/* Search and Export */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <div className="relative flex-1 sm:w-56">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4b982]/50"
              />
            </div>
            <button
              onClick={() => exportToCSV(activeTab)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Download size={13} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {activeTab === "inquiries" ? (
            filteredInquiries.length === 0 ? (
              <div className="py-12 text-center text-slate-400">
                <p className="text-sm">No strategy inquiries found matching your query.</p>
                <p className="text-xs text-slate-500 mt-1">Submit the contact form on the website to see records appear here instantly.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredInquiries.map((inq) => (
                  <div
                    key={inq._id}
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all flex flex-col md:flex-row md:items-start justify-between gap-4"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="font-bold text-white flex items-center gap-1.5 text-sm">
                          <User size={14} className="text-[#d4b982]" />
                          {inq.name}
                        </span>
                        <span className="text-xs font-mono text-slate-300 flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          <Mail size={12} className="text-slate-400" />
                          {inq.contact}
                        </span>
                        {inq.planInterest && (
                          <span className="text-[11px] px-2 py-0.5 rounded bg-[#d4b982]/10 text-[#d4b982] border border-[#d4b982]/20 font-medium">
                            Plan: {inq.planInterest}
                          </span>
                        )}
                        <span className="text-[10px] text-slate-500 font-mono ml-auto">
                          ID: {inq._id}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-lg border border-white/5 leading-relaxed">
                        <span className="text-slate-500 block text-[10px] uppercase font-mono tracking-wider mb-1">
                          Automation Goal / Bottleneck:
                        </span>
                        {inq.goal}
                      </p>

                      <div className="flex items-center gap-4 text-[11px] text-slate-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {inq.createdAt ? new Date(inq.createdAt).toLocaleString() : "Recently"}
                        </span>
                        {inq.metadata?.ip && <span>IP: {inq.metadata.ip}</span>}
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      <select
                        value={inq.status || "new"}
                        onChange={(e) => handleUpdateStatus("inquiries", inq._id, e.target.value)}
                        className={`text-xs px-2.5 py-1.5 rounded-lg border focus:outline-none font-medium ${
                          inq.status === "contacted"
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                            : inq.status === "qualified"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                            : inq.status === "closed"
                            ? "bg-slate-700/30 text-slate-400 border-slate-700"
                            : "bg-[#d4b982]/10 text-[#d4b982] border-[#d4b982]/30"
                        }`}
                      >
                        <option value="new">Status: New Lead</option>
                        <option value="reviewed">Status: Reviewed</option>
                        <option value="contacted">Status: Contacted</option>
                        <option value="qualified">Status: Qualified</option>
                        <option value="closed">Status: Closed</option>
                      </select>

                      <button
                        onClick={() => handleDelete("inquiries", inq._id)}
                        title="Delete from MongoDB"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : filteredAssessments.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm">No automation assessment records found.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredAssessments.map((ass) => (
                <div
                  key={ass._id}
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all flex flex-col md:flex-row md:items-start justify-between gap-4"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-bold text-white flex items-center gap-1.5 text-sm">
                        <User size={14} className="text-[#d4b982]" />
                        {ass.name}
                      </span>
                      <span className="text-xs font-mono text-slate-300 flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        <Mail size={12} className="text-slate-400" />
                        {ass.email}
                      </span>
                      <span className="text-xs text-slate-300 flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        <Building size={12} className="text-slate-400" />
                        {ass.company}
                      </span>
                      {ass.teamSize && (
                        <span className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                          {ass.teamSize}
                        </span>
                      )}
                      <span className="text-[10px] text-slate-500 font-mono ml-auto">
                        ID: {ass._id}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="bg-white/[0.03] p-2 rounded border border-white/5">
                        <span className="text-slate-500 block text-[10px] uppercase font-mono">Main Bottleneck:</span>
                        <span className="text-slate-200 font-medium">{ass.mainChallenge}</span>
                      </div>
                      <div className="bg-white/[0.03] p-2 rounded border border-white/5">
                        <span className="text-slate-500 block text-[10px] uppercase font-mono">Current Tools:</span>
                        <span className="text-slate-200">{ass.currentTools || "None specified"}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-[11px] text-slate-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {ass.createdAt ? new Date(ass.createdAt).toLocaleString() : "Recently"}
                      </span>
                      {ass.metadata?.ip && <span>IP: {ass.metadata.ip}</span>}
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                    <select
                      value={ass.status || "new"}
                      onChange={(e) => handleUpdateStatus("assessments", ass._id, e.target.value)}
                      className={`text-xs px-2.5 py-1.5 rounded-lg border focus:outline-none font-medium ${
                        ass.status === "sent"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : ass.status === "plan_drafted"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                          : "bg-[#d4b982]/10 text-[#d4b982] border-[#d4b982]/30"
                      }`}
                    >
                      <option value="new">Status: New</option>
                      <option value="reviewed">Status: Reviewed</option>
                      <option value="plan_drafted">Status: Plan Drafted</option>
                      <option value="sent">Status: Roadmap Sent</option>
                      <option value="archived">Status: Archived</option>
                    </select>

                    <button
                      onClick={() => handleDelete("assessments", ass._id)}
                      title="Delete from MongoDB"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Atlas Instructions Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-white/[0.01] flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <div className="flex items-center gap-1.5">
            <span>Also visible in your cloud console:</span>
            <a
              href="https://cloud.mongodb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4b982] hover:underline flex items-center gap-1"
            >
              cloud.mongodb.com <ExternalLink size={10} />
            </a>
            <span>&rarr; Browse Collections &rarr; sthayu_ventures</span>
          </div>
          <span className="font-mono text-slate-500">Live MongoDB Atlas sync active</span>
        </div>
      </div>
    </div>
  )
}
