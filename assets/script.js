const input = document.querySelector('#password');
const icon = document.querySelector('.input-with-icon i');
icon.addEventListener('click', (event) => {
    event.preventDefault();
    const type = (input.getAttribute('type') === 'text') ? 'password' : 'text';
    input.setAttribute('type', type);
}); 


let password=document.getElementById(password)
let bt = document.getElementById('inicio-sesion-btn');
  if ((password).value != '') {
      bt.classList.remove('disabled-btn');
  }
