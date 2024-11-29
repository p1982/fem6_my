import React, {Component} from 'react'

class ErrorBoundary extends Component {
   state = { hasError: null };
  
   static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      hasError: true
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    const {errorMsg, children} = this.props;
    if (this.state.hasError) {
      // Error path
      return (
        <h1>{errorMsg}</h1>
      );
    }
    // Normally, just render children
    return children;
  }  
}

export default ErrorBoundary;