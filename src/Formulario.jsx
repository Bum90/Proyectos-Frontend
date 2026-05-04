import { useState } from 'react'

function Formulario() {
    const [persona, setPersona] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        email: "",
        ciudad: "" 
    })
    const [personas, setPersonas] = useState([])

    return (
        <div>
            <h2>Formulario de Registro</h2>
                <input placeholder='Ingrese su Nombre' onChange={(e) => setPersona ({...persona, nombre: e.target.value})} />
                <input placeholder='Ingrese su Apellido' onChange={(e) => setPersona ({...persona, apellido: e.target.value})} />
                <input placeholder='Ingrese su Edad' onChange={(e) => setPersona ({...persona, edad: e.target.value})} />
                <input placeholder='Ingrese su Email' onChange={(e) => setPersona ({...persona, email: e.target.value})} />
                <input placeholder='Ingrese su Ciudad' onChange={(e) => setPersona ({...persona, ciudad: e.target.value})} />
                <button onClick={() => setPersonas([...personas, persona])}>👆 Agregar</button>
                <button onClick={() => { setPersonas([]) }}>🗑️ Vaciar</button>
                    {personas.map ((item, index) => (
                        <div>
                        <p>{item.nombre} {item.apellido} {item.edad} {item.email} {item.ciudad}</p>
                        <button onClick={() => setPersonas(personas.filter((item, i) => i !== index))}>✖️ Eliminar</button>
                    </div>
                ))}
        </div>
    )
}

export default Formulario