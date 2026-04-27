   let usuario = [];
    let nextId = 1;

    function Crear() {
        const nombre = document.getElementById("Name").value.trim();
        const email = document.getElementById("Email").value.trim();
        if (!nombre || !email) return alert("Complete todo los campos");
            usuario.push({ id: nextId++, nombre, email});
            renderizar ();
            limpiarInputs (); 
    }

    function renderizar() {
        const tbody = document.getElementById("Tabla")
        tbody.innerHTML = ""
        usuario.forEach(u => {
        tbody.innerHTML += `<tr><td>${ u.id }</td><td>${ u.nombre }</td><td>${ u.email }</td><td><button onclick="Eliminar(${u.id})">🗑️ Eliminar</button><button onclick="Editar(${u.id})">✏️ Editar</button></td></tr>`
        })
    }
    
    function limpiarInputs() {
        document.getElementById("Name").value = ""
        document.getElementById("Email").value = ""
    }

    function Eliminar(id) {
        usuario = usuario.filter (u => u.id !== id);
        renderizar();
    }

    function Editar(id) {
        const u = usuario.find(u => u.id === id);
        const nuevoNombre = prompt("Nuevo Nombre", u.nombre);
        const nuevoEmail = prompt("Nuevo Email", u.email);
        u.nombre = nuevoNombre;
        u.email = nuevoEmail;
        renderizar();
    }

    function cargarUsuario() {
        fetch ("https://jsonplaceholder.typicode.com/users")
        .then (respuesta => respuesta.json())
        .then (datos => {
            datos.forEach (d => {
                usuario.push({id: d.id, nombre: d.name, email: d.email})
            })
            nextId = Math.max (...usuario.map(u => u.id)) + 1
        renderizar()
                        })
    }

    function buscarUsuario() {
        const id = document.getElementById("Buscar").value;
        const usuarioEncontrado = usuario.find(u => u.id === Number(id));
        if (usuarioEncontrado) {
            alert (`ID: ${usuarioEncontrado.id}\nNombre: ${usuarioEncontrado.nombre}\nEmail: ${usuarioEncontrado.email}`);
        } else {
            fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
        .then (respuesta => respuesta.json())
        .then (datos => {
            alert (`ID: ${datos.id}\nNombre: ${datos.name}\nEmail: ${datos.email}`)
        });
      }       
    }
    
    window.onload=cargarUsuario;