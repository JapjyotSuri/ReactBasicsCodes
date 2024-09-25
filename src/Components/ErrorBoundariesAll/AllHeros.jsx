import React from 'react'
import Hero from './Hero'
import ErrorBoundary from './ErrorBoundary'

const AllHeros = () => {
    //below it is a better practice to write error boundary for each component as if there is an error it is better to only show a fallback where the error has occured rather than showing it on the whole site
  return (
    <div>
      <ErrorBoundary>
      <Hero heroName='joker'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='superman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='ironman'/>
      </ErrorBoundary>
    </div>
  )
}

export default AllHeros
