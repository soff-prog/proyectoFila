import '../css/style.css';
import 'flowbite';
 
const cambiarAnuncio = () => {
    const banner = document.querySelector("#banner");

    if(banner.innerText=== "ENVIOS GRATUITOS EN PEDIDOS SUPERIORES A $50"){
        banner.innerText="REBAJAS HASTA EL 50% - COMPRA AHORA";
        banner.classList.remove("bg-black");
        banner.classList.add("bg-red-700");
    }else{
        banner.innerText="ENVIOS GRATUITOS EN PEDIDOS SUPERIORES A $50"
        banner.classList.remove("bg-red-700");
        banner.classList.add("bg-black");
    }
}
banner.addEventListener('click', cambiarAnuncio);