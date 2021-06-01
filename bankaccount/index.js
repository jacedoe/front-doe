	var app = new Vue({
		el: '#root',
		data: {
			cuenta: [],
			nom: '',
			cognom: '',
		},
		
		methods: {
					
				crearCompte: function () {
				// body...
				let titular = this.nom + this.cognom;
				let id = titular.toUpperCase();
				for (let i = -1; i < app.cuenta.length; i++) {
					if (id != app.cuenta[i]) {
					this.cuenta.push(id);	
					} else  {
				 	alert(this.nom + ",usted ya está registrado");
				 }
				} 
				 
			}
			
			
		}
	})
