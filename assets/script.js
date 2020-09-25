<script> 
    const input = document.querySelector('#sample1'); 
    const icon = document.querySelector('.input-with-icon i'); 
    icon.addEventListener('click', function() { 
      event.preventDefault();
      const type = (input.getAttribute('type') === 'text') ? 'password' : 'text'; 
      input.setAttribute('type', type); 
      }); 
 </script>