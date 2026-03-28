import { Component, type ReactNode, type ErrorInfo } from 'react';

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='min-h-screen flex flex-col items-center justify-center text-white px-6 text-center'>
          <h1 className='text-4xl font-bold mb-4'>Something went wrong</h1>
          <p className='text-white/60 mb-8'>
            An unexpected error occurred. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className='border border-white px-8 py-3 uppercase tracking-wide text-sm hover:bg-white hover:text-black transition'
          >
            Refresh page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
