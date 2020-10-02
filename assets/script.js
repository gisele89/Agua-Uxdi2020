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
}


var inputs = "input[maxlength]";
	$(document).on('keyup', "[maxlength]", function (e) {
		var este = $(this),
			maxlength = este.attr('maxlength'),
			maxlengthint = parseInt(maxlength),
			textoActual = este.val(),
			currentCharacters = este.val().length;
			remainingCharacters = maxlengthint - currentCharacters,
			espan = este.prev('p').find('span');			
			// Detectamos si es IE9 y si hemos llegado al final, convertir el -1 en 0 - bug ie9 porq. no coge directamente el atributo 'maxlength' de HTML5
			if (document.addEventListener && !window.requestAnimationFrame) {
				if (remainingCharacters <= -1) {
					remainingCharacters = 0;            
				}
			}
			espan.html(remainingCharacters);
			if (!!maxlength) {
				var texto = este.val();	
				if (texto.length >= maxlength) {
					este.removeClass().addClass("borderojo");
					este.val(text.substring(0, maxlength));
					e.preventDefault();
				}
				else if (texto.length < maxlength) {
					este.removeClass().addClass("bordegris");
				}	
			}	
		});*/