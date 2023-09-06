$(document).ready(function(){

    $("#btn-arriba").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


});


        document.addEventListener("DOMContentLoaded", function () {
            const loginForm = document.getElementById("login-form");
        
            loginForm.addEventListener("submit", function (e) {
                e.preventDefault(); 

                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;

               
                if (username === "usuario" && password === "contraseña") {
                    alert("Inicio de sesión exitoso.");
                 
                    window.location.href = "bienvenida.html";
                } else {
                    alert("Credenciales incorrectas. Inténtelo de nuevo.");
                }
            });
        });
        
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

        
document.addEventListener("DOMContentLoaded", function () {

    const registroForm = document.getElementById('registro-form');


    registroForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const cedula = document.getElementById('cedula').value;
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const ciudad = document.getElementById('ciudad').value;
        const direccion = document.getElementById('direccion').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;


        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
            return;
        }


    alert('Registro exitoso');
    window.location.href = "login.html";
    });    
})

const productos = [
    {
        id: 1,
        nombre: "Aguacate Hass",
        precio: 3.700,
    },
    {
        id: 2,
        nombre: "Carne",
        precio: 7.500,
    },
    {
        id: 3,
        nombre: "Fresa",
        precio: 4.200,
    },
    {
        id: 4,
        nombre: "Mojarra Roja",
        precio: 15.800,
    },
    {
        id:5,
        nombre: "Naranja",
        precio: 3.000,
    },
    {
        id: 6,
        nombre: "Papa Sabanera",
        precio: 2.700,
    },
    {
        id: 7,
        nombre: "Papaya",
        precio: 1.900,
    },
    {
        id: 8,
        nombre: "Tomate",
        precio: 2.100,
    },
];

document.addEventListener("DOMContentLoaded", function () {

function actualizarCarrito() {
    const listaProductos = document.getElementById("lista-productos");
    const totalElement = document.getElementById("total");
    const cantidadElement = document.getElementById("cantidad");
    const carritoSection = document.getElementById("carrito-section"); 

    let total = 0;


    listaProductos.innerHTML = "";

 
    carrito.forEach(producto => {
        const item = document.createElement("li");
        item.innerText = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        listaProductos.appendChild(item);
        total += producto.precio;
    });


    totalElement.innerText = total.toFixed(2);
    cantidadElement.innerText = carrito.length;


    carritoSection.innerHTML = ""; 
    carritoSection.appendChild(document.getElementById("carrito"));
}
});


function mostrarProductosEnCarrito() {
    var carritoContenido = document.getElementById("carrito-contenido");
    var precioTotal = 0;
  

    carritoContenido.innerHTML = "";
  
    carrito.forEach((producto) => {
      var subtotal = producto.precio * producto.cantidad;
      precioTotal += subtotal;
  
      var productoHTML =
        '<div class="carrito-producto">' +
        "<h3>" +
        producto.nombre +
        "</h3>" +
        "<p>Cantidad: " +
        producto.cantidad +
        "</p>" +
        "<p>Subtotal: $" +
        subtotal +
        "</p>" +
        "</div>";
  
      carritoContenido.innerHTML += productoHTML;
    });
  

    var precioTotalElemento = document.getElementById("precio-total");
    precioTotalElemento.innerText = "$" + precioTotal;
  }
  

  function restaurarVisibilidadSecciones() {
    var secciones = document.querySelectorAll("section");
    for (var i = 0; i < secciones.length; i++) {
      if (secciones[i].id !== "carrito") {
        secciones[i].style.display = "block";
      }
    }
  }
  
 
  window.onload = function () {
    restaurarVisibilidadSecciones();
  };
  
 
  function agregarAlCarrito(idProducto, nombre, precio) {
 
    restaurarVisibilidadSecciones();
  }
  