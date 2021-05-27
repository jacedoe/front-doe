


var app = new Vue({
  el: '#app',
  data() {

    return {
      message: 1,
     secret: Math.floor(Math.random() * 100)
    }
  },

  methods: {
    endevina() {
                
                let x = parseInt(prompt("Introduce un número"));
                
                do {
                    if (x < app.secret) {
                        alert("El número secreto es superior");
                        endevina();
                    } else if (x > app.secret) {
                        alert("El número secreto es inferior");
                        endevina();
                        
                    } 
            
                    
                }
                 while (x !== app.secret);
                
                {
                    alert("Has acertado, el número secreto es:" + " " + app.secret)
                }
            } 
  }

})