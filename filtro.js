const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const contenedor = document.getElementById("lista-de-productos");
const $i = document.querySelector(".input"); 
const botonDeFiltro = document.querySelector("button");

// Función para mostrar productos
function displayProductos(productosAMostrar){
  contenedor.innerHTML = ""; // Limpia el contenedor

  for (let i = 0; i < productosAMostrar.length; i++) {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosAMostrar[i].nombre;
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosAMostrar[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);
    contenedor.appendChild(d);
  }
}

// Mostrar todos al cargar
displayProductos(productos);

// Al hacer clic en filtrar
botonDeFiltro.onclick = function() {
  const texto = $i.value.trim().toLowerCase();
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
}

// Función de filtrado
const filtrado = (productos = [], texto) => {
  return productos.filter(item =>
    item.tipo.includes(texto) || item.color.includes(texto)
  );
};
