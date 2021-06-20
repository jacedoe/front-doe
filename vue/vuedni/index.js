var app = new Vue({
    el: '#app',
    data() {
        return {
         dni: 0,

      }
    },
  

//  let dni = document.getElementById("dninumber")
methods: {
    letraDni(dni) {
        this.dni = this.dni
            let string="TRWAGMYFPDXBNJZSQVHLCKET";
            let position = dni%23;
            let letter = string.substring(position, position+1);
            return letter;
        }
    }

})
