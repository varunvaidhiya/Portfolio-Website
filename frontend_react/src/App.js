import React from 'react'

import { About,Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components'
import './App.scss'
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const App = () => {
  return (
    <div className = "App">
      <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
        </ErrorBoundary>
    </div>

  )
}

export default App