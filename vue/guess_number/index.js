
var app = new Vue({
  el: '#app',
  data() {
      return {
       message: 0,
    // Creación del número aleatorio en el rango de 1 a 100 y redondeo a número entero
       secret: Math.floor(Math.random() * 1 * 100)
    }
  }

})