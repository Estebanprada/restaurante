// Definir una funcion llamada 'mostrar'
function mostrar() {

    // Obtener el valor del elemento HTML con ID "platoscomida" y convertirlo a numero de punto flotante
    const menuplatos = parseFloat(document.getElementById("platoscomida").value);

    // Obtener el valor del elemento HTML con ID "cantidad" y convertirlo a un numero entero
    let cantplatos = parseInt(document.getElementById("cantidad").value);

    // Obtener el valor del elemento HTML con ID "numbedidas" y convertirlo a numero de punto flotante
    const menubebidas = parseFloat(document.getElementById("numbedidas").value); 

    // Obtener el valor del elemento HTML con ID "cantidadBebidas" y convertirlo a un numero entero
    let cantbebidas = parseInt(document.getElementById("cantidadBebidas").value);

    // Calcular el producto de 'menuplatos' y 'cantplatos' y almacenarlo en 'resPlatos'
    var resPlatos = menuplatos * cantplatos; 

    // Calcular el producto de 'menubebidas' y 'cantbebidas' y almacenarlo en 'resBebida'
    var resBebida = menubebidas * cantbebidas; 

    // Calcular la suma de 'resPlatos' y 'resBebida' y almacenarlo en 'total'
    var total = resPlatos + resBebida;

    // Actualizar el contenido de texto del elemento HTML con ID "resultado" para mostrar el total calculado
    document.getElementById("resultado").textContent = `Total a pagar: $${total}`;
}
