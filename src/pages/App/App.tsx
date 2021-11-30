import React, { useState } from 'react'
import TextInput from '../../components/TextInput'
import './App.css'

function App() {
  const [link, setLink] = useState('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLink(e.currentTarget.value)
  }

  return (
    <div className='App'>
      <h1>Mes bookmarks</h1>
      <TextInput value={link} setValue={handleChange} />
    </div>
  )
}

export default App
