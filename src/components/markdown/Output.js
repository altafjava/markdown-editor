import emojify from 'emojify.js'
import 'emojify.js/dist/css/basic/emojify.min.css'
import hljs from 'highlight.js'
import marked from 'marked'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import './github.css'
import './output.css'

function Output({ textarea }) {
  marked.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    },
  })

  useEffect(() => {
    emojis()
  })

  const emojis = () => {
    return emojify.run(document.getElementById('output'))
  }

  return <div id='output' dangerouslySetInnerHTML={{ __html: marked(textarea) }} />
}

Output.propTypes = {
  textarea: PropTypes.string,
}

export default Output
