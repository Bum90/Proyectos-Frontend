import { useState } from 'react'

function App() {
  const [texto, setTexto] = useState("")
  const [color, setColor] = useState(false)
  const [lista, setLista] = useState([])
  return (
    <div>
      <input onChange={(e) => setTexto(e.target.value)} />
      <button onClick={() => setLista([...lista, texto])}>➕ Crear</button>
      {lista.map((item) => <p>{item}</p>)}
      <p>{texto}</p>
      <button onClick={() => {
        setColor(!color)
        setLista([])
      }} style={{ backgroundColor: color ? "#002fd7" : "#02008e" }}>🗑️ Limpiar</button>
    </div>
  )
}

export default App