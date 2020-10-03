const input = document.querySelector('#password');
const icon = document.querySelector('.input-with-icon i');
icon.addEventListener('click', (event) => {
    event.preventDefault();
    const type = (input.getAttribute('type') === 'text') ? 'password' : 'text';
    input.setAttribute('type', type);
});

/*
let pass = document.getElementById(password);
let user = document.getElementById(usuario);
let bt = document.getElementById('inicio-sesion-btn');
if ((pass.value != '') && (user.value != '')) {
    bt.classList.remove('disabled-btn');
}*/


let el;
el = document.querySelectorAll('.mdl-textfield__input');  
el.forEach(element => {
    element.addEventListener('keyup', countCharacters, false);
});

function countCharacters(e) {                                    
    var textEntered, countRemaining, counter;          
    textEntered = this.value;
    counter = (textEntered.length);
    countRemaining = document.getElementById(this.getAttribute("data-remaining"));
    countRemaining.textContent = counter + "/20";       
  }