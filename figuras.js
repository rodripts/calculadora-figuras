console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4
}

function areaCuadrado(lado){
    return lado * lado
}
console.groupEnd
console.group("Rectangulo");

function perimetroRectangulo(lado1, lado2){
    return (lado1 + lado2)*2
}

function areaRectangulo(base, altura){
    return base * altura
}

console.groupEnd
console.group("Triangulo")

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura){
    return (base * altura)/2
}

console.groupEnd



// FUNCIONES

function areaCuadradoInput(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value)
    const resultado1 = document.getElementById("inputResult")
    resultado1.innerText = "El area de tu cuadrado es " + area
}

function perimetroCuadradoInput(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value)
    const resultado1 = document.getElementById("inputResult")
    resultado1.innerText = "El perimetro de tu cuadrado es " + perimetro
}

function perimetroTrianguloInput(){
    const input1 = document.getElementById("lado1")
    const input2 = document.getElementById("lado2")
    const input3 = document.getElementById("base")

    const lado1 = input1.value
    const lado2 = input2.value
    const base = input3.value

    const perimetroTriangulo1 = perimetroTriangulo(Number(lado1),Number(lado2),Number(base))
    const resultado1 = document.getElementById("inputResultTriangulo")

    resultado1.innerText = "El perimetro de tu triangulo es " + perimetroTriangulo1
}
function areaTrianguloInput(){
    const input1 = document.getElementById("base")
    const input2 = document.getElementById("altura")

    const base = input1.value
    const altura = input2.value

    const areaTriangulo1 = areaTriangulo(Number(base), Number(altura))
    const resultado1 = document.getElementById("inputResultTriangulo")

    resultado1.innerText = "El area de su triangulo es " + areaTriangulo1
}
function areaRectanguloInput(){
    const input1R = document.getElementById("baseRectangulo")
    const input2R = document.getElementById("alturaRectangulo")

    const baseR = input1R.value
    const alturaR = input2R.value

    const areaRectangulo1 = areaRectangulo(Number(baseR), Number(alturaR))
    const resultado2 = document.getElementById("inputResultRectangulo")

    resultado2.innerText = "El area de su rectangulo es " + areaRectangulo1
}
function perimetroRectanguloInput(){
    const input1R = document.getElementById("baseRectangulo")
    const input2R = document.getElementById("alturaRectangulo")

    const baseR = input1R.value
    const alturaR = input2R.value

    const perimetroRectangulo1 = perimetroRectangulo(Number(baseR), Number(alturaR))
    const resultado2 = document.getElementById("inputResultRectangulo")

    resultado2.innerText = "El area de tu rectangulo es " + perimetroRectangulo1
}