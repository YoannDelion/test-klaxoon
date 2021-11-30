import React, { useState } from 'react'
import Button from '../../components/Button'
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
      <Button handleClick={() => console.log(link)}>Enregistrer</Button>
    </div>
  )
}

export default App
