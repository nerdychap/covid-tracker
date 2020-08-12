import React from 'react';
import ErrorText from '../styles/ErrorBoundaryStyles';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <ErrorText>It looks like we don't have data for the selected country.<br />Please reload the page and select a different country.</ErrorText>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;