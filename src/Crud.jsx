import { useState, useEffect } from "react"

function Crud() {
    const [usuarios, setUsuarios] = useState([])
    const [persona, setPersona] = useState ({
        nombre: "",
        email: "", })
    const [buscar, setBuscar] = useState("")
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then((datos) => setUsuarios(datos.map(d => ({id: d.id, nombre: d.name, email: d.email}))))
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Crud