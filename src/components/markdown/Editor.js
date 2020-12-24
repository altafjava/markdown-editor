import codemirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/gfm/gfm'
import 'codemirror/theme/base16-light.css'
import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import './editor.css'

function Editor({ textarea, handleChange }) {
  const editorEl = useRef()
  let editor = <textarea ref={editorEl} defaultValue={textarea} />

  useEffect(() => {
    editor = codemirror.fromTextArea(editorEl.current, {
      forceTextArea: false,
      mode: 'gfm',
      lineNumbers: false,
      matchBrackets: true,
      lineWrapping: true,
      tabSize: 4,
    })
    editor.on('change', () => handleChange(editor.getValue()))
    window.addEventListener('keyup', handleEmptyEditor)
    return () => {
      window.removeEventListener('keyup', handleEmptyEditor)
    }
  }, [editorEl])

  const handleEmptyEditor = (e) => {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 69) {
      e.preventDefault()
      e.stopPropagation()
      editor.setValue('')
    }
  }
  return <div className='editor'>{editor}</div>
}
Editor.propTypes = {
  textarea: PropTypes.string,
}
export default Editor
