// cargarHeaderFooter.js

// Función para cargar el encabezado y el pie de página
function cargarHeaderYFooter() {
    fetch('nav-footer.html')
        .then(response => {
            console.log('Respuesta del fetch:', response);
            return response.text();
        })
        .then(data => {
            console.log('Datos del nav-footer:', data);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Verificar si los selectores encuentran los elementos correctos
            const headerContent = tempDiv.querySelector('nav#idnav').innerHTML;
            const footerContent = tempDiv.querySelector('footer#idfooter').innerHTML;

            console.log('Contenido del header:', headerContent);
            console.log('Contenido del footer:', footerContent);

            // Insertar el contenido del encabezado y el pie de página en la página actual
            document.querySelector('nav#idnav').innerHTML = headerContent;
            document.querySelector('footer#idfooter').innerHTML = footerContent;
        })
        .catch(error => {
            console.error('Error cargando el header y footer:', error);
            alert('Error cargando el header y footer');
        });
}

// Llamar a la función para cargar el encabezado y el pie de página al cargar la página
window.onload = cargarHeaderYFooter;
