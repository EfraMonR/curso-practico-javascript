const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
})*/

//Funciones para hacer descuento con valores
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

//Funciones para hacer descuento con Cupones
const coupons = [
    "blue",
    "red",
    "black",
];

function onClickButtonCouponDiscount() {
    const inputPrice = document.getElementById("InputPrice2");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case "blue":
            descuento = 15;
        break;
        case "red":
            descuento = 30;
        break;
        case "black":
            descuento = 50;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP2 = document.getElementById("ResultP2");
    resultP2.innerText = "El precio con descuento es: $" + precioConDescuento; 
}

