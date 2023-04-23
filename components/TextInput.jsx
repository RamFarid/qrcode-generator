import { useRouter } from 'next/router'
import React from 'react'

function TextInput({ text, setText }) {
  return (
    <input
      value={text}
      type='text'
      onChange={(e) => setText(e.target.value)}
      placeholder='Paste your URL here..'
      autoComplete='off'
    />
  )
}

export default TextInput
