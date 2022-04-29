function descuentoF(precio, descuento){
    return (precio * (100 - descuento)) / 100;
};
const cupones = [{
    name: "DSC15",
    discount: 15,
},{
    name: "DSC25",
    discount: 25,
},{
    name: "DSC30",
    discount: 30,
}];

function calculoD(){
    const inputP = document.getElementById("InputPrecio");
    const valueP = inputP.value;
    const inputC = document.getElementById("inputCupon");
    const valueC = inputC.value;

    const cuponEsValido = function (cupon){
        return cupon.name === valueC;
    };
    const userCupon = cupones.find(cuponEsValido);

    if (!userCupon){
        alert("El cupón "+ valueC + " es inválido.");
    } else {
        const descuento = userCupon.discount;
        const precioConDescuento = descuentoF(valueP, descuento);
        

        const resultP = document.getElementById("resultado");
        resultP.innerText = "El precio con descuento es $" + precioConDescuento + ".";
    };
};