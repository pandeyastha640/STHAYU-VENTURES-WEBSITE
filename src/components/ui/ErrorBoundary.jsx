import { Component } from "react"

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Component load error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="py-12 text-center text-slate-400 font-mono text-sm">
            <p>Section loading temporarily unavailable.</p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="mt-3 px-4 py-1.5 text-xs text-[#d4b982] border border-[#d4b982]/30 rounded-full hover:bg-[#d4b982]/10"
            >
              Retry
            </button>
          </div>
        )
      )
    }
    return this.props.children
  }
}
