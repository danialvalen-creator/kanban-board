import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';
import { ErrorContainer, ErrorTitle, ErrorMessage, ResetButton } from './ErrorBoundary.styles';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Что-то пошло не так</ErrorTitle>
          <ErrorMessage>{this.state.error?.message || 'Произошла неизвестная ошибка'}</ErrorMessage>
          <ResetButton onClick={this.handleReset}>Перезагрузить приложение</ResetButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;