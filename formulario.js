
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mail = document.getElementById('mail').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || telefono === '' || mensaje === '' || mail === '') {
        Toastify({
            text: 'Error, campos vacios',
            style: {
                background: "#851515",
                color: "#ffffff",
            },
            duration: 3000,
            gravity: "right",
            position: "right"
        }).showToast();
        return;
    }

    if (!mail.includes('@')) {
        Toastify({
            text: 'Mail inválido',
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

    const mensajeWsp = `Hola! Soy ${nombre}. Mi teléfono es ${telefono} y mi mail es ${mail}. Queria consultar sobre: ${mensaje}`;
    const url = `https://wa.me/549XXXXXXXXX?text=${encodeURIComponent(mensajeWsp)}`;
    window.open(url, '_blank');
})

