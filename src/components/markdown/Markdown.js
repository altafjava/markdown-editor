import React, { useState } from 'react'
import Editor from './Editor'
import { InitialTextValue } from './InitialData'
import Output from './Output'

function Markdown() {
  const [textarea, setTextarea] = useState(InitialTextValue)

  const handleChange = (initialData) => {
    setTextarea(initialData)
  }

  return (
    <div id='container'>
      <Editor textarea={textarea} handleChange={handleChange} />
      <Output textarea={textarea} />
    </div>
  )
}

export default Markdown
