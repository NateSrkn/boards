import React from 'react'

export const Loading = ({ fallback = 'Loading...' }) => {
  return (
    <div className="spinner-border" role="status">
      <span className="sr-only">{fallback}</span>
    </div>
  )
}