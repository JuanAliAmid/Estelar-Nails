
const btnConsultar = document.getElementById('boton-consultar')

const lista = document.getElementById('lista-seleccionada')

const botonSeleccionar = document.querySelectorAll('.btn-seleccionar')
let seleccionados = [];

botonSeleccionar.forEach(element => {
    element.addEventListener('click', () => {
        const tecnica = element.getAttribute('data-tecnica')

        if (!seleccionados.includes(tecnica)) {
            seleccionados.push(tecnica);
            element.textContent = '✓ Seleccionada'
        } else {
            seleccionados = seleccionados.filter(a => a !== tecnica)
            element.textContent = 'Seleccionar'
        }

        lista.innerHTML = ''
        seleccionados.forEach(select => {
            const li = document.createElement('li');
            li.textContent = select;
            lista.appendChild(li);
        })
    })
})

btnConsultar.addEventListener('click', () => {
    if (seleccionados.length === 0) {
        Toastify({
            text: 'Selecciona al menos una técnica',
            style: {
                background: "#e5be01",
                color: "#000000",
            },
            duration: 3000,
            gravity: "right",
            position: "right"
        }).showToast();
        return;
    }
    const mensaje = `Hola! Me interesan las siguientes técnicas: ${seleccionados.join(', ')}`
    const url = `https://wa.me/549XXXXXXXXX?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')
})
