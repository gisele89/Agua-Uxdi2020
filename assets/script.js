/*analytics*/
const input = document.querySelector('#password');
const icon = document.querySelector('.input-with-icon i');
icon.addEventListener('click', (event) => {
    event.preventDefault();
    const type = (input.getAttribute('type') === 'text') ? 'password' : 'text';
    input.setAttribute('type', type);
});

let button = document.querySelector('#sumarse-btn');
if (button) {
    button.addEventListener('click', function (event) {
        ga('send', 'event', {
            eventAction: 'click',
            eventCategory: 'Quiero Sumarme Button',
            eventLabel: event.target.id
        });
    });
}

/*enable button*/
/*
let pass = document.getElementById(password);
let user = document.getElementById(usuario);
let bt = document.getElementById('inicio-sesion-btn');
if ((pass.value != '') && (user.value != '')) {
    bt.classList.remove('disabled-btn');
}*/

/*counter*/
let el;
el = document.querySelectorAll('.mdl-textfield__input');
el.forEach(element => {
    element.addEventListener('keyup', countCharacters, false);
});

function countCharacters(e) {
    let textEntered, countRemaining, counter;
    textEntered = this.value;
    counter = (textEntered.length);
    countRemaining = document.getElementById(this.getAttribute("data-remaining"));
    countRemaining.textContent = counter + "/20";
}

let elem;
elem = document.querySelectorAll('.inputs-form');
elem.forEach(element => {
    element.addEventListener('keyup', enableButton, false);
});

function enableButton(e) {
    document.getElementById('registro-btn').disabled = true;

}