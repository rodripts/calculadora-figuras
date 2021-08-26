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

