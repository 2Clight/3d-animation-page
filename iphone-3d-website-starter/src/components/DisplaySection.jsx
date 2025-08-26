import React from 'react'

const DisplaySection = ({ triggerPreview }) => {

  const handleScrollToTop = () => {

    window.scrollTo({ top: 0, left: 0, behaviour: "smooth" })
  }

  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant</p>
      <span className="description">a display that is 2x brighter</span>
      <button onClick={triggerPreview} className='button'>Try</button>
      <button onClick={handleScrollToTop} className='back-button'>Top</button>
    </div>
  )
}

export default DisplaySection