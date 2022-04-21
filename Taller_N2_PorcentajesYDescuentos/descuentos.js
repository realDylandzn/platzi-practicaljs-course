function descuento(precio, descuento){
    return (precio * (100 - descuento)) / 100;
};


function calculoD(){
    const inputP = document.getElementById("InputPrecio");
    const valueP = inputP.value;
    const inputD = document.getElementById("InputDescuento");
    const valueD = inputD.value;

    const calculo = descuento(valueP, valueD);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "El precio final es de: $" + calculo;
};