const frutas = [
    { nombre: 'manzana', descripcion: 'Es una fruta roja y deliciosa.', imagen: '../recursos/Manzana.jpg' },
    { nombre: 'banana', descripcion: 'Es una fruta amarilla y nutritiva.', imagen: '../recursos/banana.jpg' },
    { nombre: 'naranja', descripcion: 'Es una fruta naranja llena de vitamina C.', imagen: '../recursos/naranja.jpg' },
    { nombre: 'uva', descripcion: 'Son pequeñas frutas moradas y verdes, tambien se usan para hacer vino.', imagen: '../recursos/uva.jpg' },
    { nombre: 'sandía', descripcion: 'Es una gran fruta verde y jugosa, perfecta para el verano.', imagen: '../recursos/sandia.avif' },
    { nombre: 'mandarina', descripcion: 'Tiene forma esférica, contiene una pulpa dulce y jugosa que se divide en 10 ó 12 gajos.', imagen: '../recursos/mandarina.jpg' },
    { nombre: 'peras', descripcion: 'Es una fruta en forma de bombilla; su cáscara es lisa, la cual puede ser de color verde, amarillo, café o rojizo. La pulpa es blanca y jugosa.', imagen: '../recursos/peras.jpg' },
    { nombre: 'kiwi', descripcion: ' Su piel es de color marrón oscuro, y encierra una pulpa verde y jugosa, de sabor ácido muy agradable.', imagen: '../recursos/kiwi.jpg' },
    { nombre: 'pomelo', descripcion: ' Sabor amargo, que contienen pulpa de color que va del amarillo pálido al rojo muy intenso. ', imagen: '../recursos/pomelo.jpg' },
    { nombre: 'frutilla', descripcion: ' Es una planta perenne de la familia de las Rosáceas, cuyo fruto es comestible.', imagen: '../recursos/frutilla.jpg' },

];
  
  let puntaje = 0;
  let frutaActual = null;
  
  const frutaImagen = document.getElementById('fruta-imagen');
  const frutaDescripcion = document.getElementById('fruta-descripcion');
  const respuestaInput = document.getElementById('respuesta');
  const Respuestascorrectas = document.getElementById('puntaje-numero');
  const adivinarBtn = document.getElementById('adivinar-btn');
  
  function mostrarNuevaFruta() {
    const indiceAleatorio = Math.floor(Math.random() * frutas.length);
    frutaActual = frutas[indiceAleatorio];
  
    frutaImagen.src = frutaActual.imagen;
    frutaDescripcion.textContent = frutaActual.descripcion;
    respuestaInput.value = '';
  }
  
  function adivinarFruta() {
    const respuestaUsuario = respuestaInput.value.toLowerCase();
    if (respuestaUsuario === frutaActual.nombre ) {
        puntaje >= 0
      puntaje++;
      Respuestascorrectas.textContent = puntaje;
      mostrarNuevaFruta();
      alert ('Felicitaciones Respondiste Correctamente !!');
    } else {
        puntaje--;
        Respuestascorrectas.textContent = puntaje;
        mostrarNuevaFruta();
      alert('Incorrecto. ¡Inténtalo de nuevo!');
    }
  }
  
  mostrarNuevaFruta();
  
  adivinarBtn.addEventListener('click', adivinarFruta);