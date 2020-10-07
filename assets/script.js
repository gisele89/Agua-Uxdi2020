const input = document.querySelector('#password');
const icon = document.querySelector('.input-with-icon i');
if(icon){
icon.addEventListener('click', (event) => {
    event.preventDefault();
    const type = (input.getAttribute('type') === 'text') ? 'password' : 'text';
    input.setAttribute('type', type);
});}
/*analytics*/
let button = document.querySelector('#sumarse-btn');
if (button) {
    button.addEventListener('click', function (event) {
        gtag('event', 'Quiero Sumarme Button')  
        });
}

let buttonVerMas = document.querySelector('#ver-mas-mapa-btn');
if (buttonVerMas {
    buttonVerMas.addEventListener('click', function (event) {
        gtag('event', 'Ver mas mapa Button')  
        });
}

let buttonMiConsumo = document.querySelector('#mi-consumo-btn');
if (buttonMiConsumo ) {
    buttonMiConsumo .addEventListener('click', function (event) {
        gtag('event', 'Mi consumo Button')  
        });
}


let buttonNoticias = document.querySelector('#ver-mas-noticias-btn');
if (buttonNoticias) {
    buttonNoticias.addEventListener('click', function (event) {
        gtag('event', 'Ver mas noticias Button')  
        });
}


/*counter*/
let el;
el = document.querySelectorAll('.mdl-textfield__input');
if(el){
el.forEach(element => {
    element.addEventListener('keyup', countCharacters, false);
});}

function countCharacters(e) {
    let textEntered, countRemaining, counter;
    textEntered = this.value;
    counter = (textEntered.length);
    countRemaining = document.getElementById(this.getAttribute("data-remaining"));
    if(countRemaining){
        countRemaining.textContent = counter + "/20";
    }
    
}


//habilitar y deshabilitar botones de form

let elem;
elem = document.querySelectorAll('.mdl-textfield__input');
if(elem){
elem.forEach(element => {
    element.addEventListener('keyup', enableButton, false);
});}

function enableButton(e) {
    let inputs = document.querySelectorAll('.mdl-textfield__input');
    let disable = false;
    inputs.forEach(element => {
        if(element.value == ''){
            disable = true;            
        }
    });
    if(!disable){
        let elem=document.getElementsByClassName('button-state')[0].classList.remove('disabled-btn');
    }
}

