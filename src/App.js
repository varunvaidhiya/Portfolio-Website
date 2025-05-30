import React from 'react'
import { HelmetProvider } from 'react-helmet-async';

import { About, Footer, Header, Skills, Testimonial, Work, Blog } from './container';
import { Navbar } from './components'
import SEO from './components/SEO/SEO';
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
    <HelmetProvider>
      <div className = "App">
        <SEO section="home" />
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
          <Blog />
          <Footer />
          </ErrorBoundary>
      </div>
    </HelmetProvider>
  )
}

export default App