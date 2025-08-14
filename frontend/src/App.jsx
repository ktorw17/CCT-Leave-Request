import { useEffect, useState } from 'react'

function App() {
  const [health, setHealth] = useState(null)

  useEffect(() => {
    const url = import.meta.env.VITE_API_URL + '/api/health'
    fetch(url)
      .then(r => r.json())
      .then(setHealth)
      .catch(() => setHealth({ error: 'cannot connect API' }))
  }, [])

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>CCT Leave Request</h1>
      <p>Frontend is running.</p>
      <pre>{JSON.stringify(health, null, 2)}</pre>
    </div>
  )
}

export default App