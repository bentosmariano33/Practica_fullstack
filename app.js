//Se declara la función
function saludar(){
    alert("Hola Mundo!")

}

//Se invoca la función
saludar();


//Función regular

function cuadrado(x){
    return x*x;
}

function sumar(n1,n2){
    return n1+n2;
}

console.log(cuadrado(3))
console.log(sumar/5,4)

//crear objetos

let perro = {
    nombre: "Rolo",
    edad: 5,
    color: "Blanco y negro",
    imagen: "Link de la imágen",
}

console.log(perro);
console.log("El nombre de mi perro es", perro.nombre);

//Modificar propiedades del objeto

perro.nombre = "Neron"
console.log(perro);

//crear objeto de otra forma

let gato = new Object()

//Una vez creado, le coloco las propiedades

gato.nombre = "Michi";
gato.edad = 3;
gato.color = "naranja";

console.log(gato);
console.log("El nombre de mi perro es", gato.nombre);

//Modificar propiedades

gato["nombre"] = "Lio";
console.log("El nombre de mi gato es", gato.nombre);