import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(
      "Error caught by ErrorBoundary:",
      error,
      errorInfo
    );
  }

  render() {
    // SHOW ERROR UI
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h2>Something went wrong.</h2>

          <p>Please refresh the page.</p>
        </div>
      );
    }

    // IMPORTANT:
    // DO NOT USE cloneElement HERE
    return this.props.children;
  }
}

export default ErrorBoundary;