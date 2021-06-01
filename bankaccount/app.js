let cuenta = []; // Array que almacena las cuentas
// Aquí va el for y switch del area cliente
function operativa() {
    let clientexist = false; // Control sobre las cuentas existentes
    let nom = document.getElementById("myInput1").value;
    let cognom = document.getElementById("myInput2").value;
    let num_comp = parseInt(document.getElementById("myInput3").value);
    for (let i = 0; i < cuenta.length; i++) {
        if ((nom + cognom) !== cuenta[i].getTitular && num_comp !== cuenta[i].getNumcomp)
            clientexist = true;
        let option = parseInt(document.getElementById("switcher").value);
        switch (option) { // Utilización de los métodos de la clase Compte
            case 1:
                {

                    let diners = parseFloat(prompt("Ingrese la cantidad"));
                    cuenta[i].ingresarDiners(diners);
                    break;
                }
            case 2:
                {
                    let diners = parseFloat(prompt("Ingrese la cantidad"));
                    cuenta[i].retirarDiners(diners);
                    break;
                }
            case 3:
                {
                    alert("Su saldo es de: " + cuenta[i].getSaldo);
                    break;
                }
            case 4:
                {
                    alert("Su número de transacciones son: " + cuenta[i].veureTran());
                    break;
                }
            case 5:
                {
                    alert("Su número de cuenta es: " + cuenta[i].getNumcomp);
                    break;
                }
        }
    } if (clientexist = false) {
        alert("Datos incorrectos")
    }
}

function veureDetall() {  
    let cuentaexist = false;
    let nom = document.getElementById("myInput1").value;
    let cognom = document.getElementById("myInput2").value;
    let num_comp = parseInt(document.getElementById("myInput3").value);
for (let i = 0; i < cuenta.length; i++) {
    if (num_comp == cuenta[i].getNumcomp && (nom + cognom) == cuenta[i].getTitular) {
        cuenta[i].veureCompte();
        cuentaexist = true;
        break;
       }     
    } if (cuentaexist == false) {
        alert("No existe esta cuenta")
    }
}
function crearCompte() {
   let cuentaexist = false;
    let nom = prompt("Nombre");
    let cognom = prompt("Apellidos");
    let num_comp = prompt("Elija su número de cuenta");
    let i;
    cuenta[i];
    for (i = 0; i < cuenta.length; i++) {
        if (num_comp === cuenta[i].getNumcomp && (nom + cognom) === cuenta[i].getTitular) {
            cuentaexist = true;
            alert("Operación abortada. Número de cuenta duplicada"); 
            cuenta[i].veureCompte();          
            break;
            }
        } if (cuentaexist == false) {
            alert("Nueva cuenta creada");
            cuenta.push(new Compte(nom, cognom, num_comp)); // Instancia de nuevo objeto cuenta desde la clase Compte
        }
    }

function donardeBaixa() {
    let cuentaexist = false;
    let nom = prompt("Nombre");
    let cognom = prompt("Apellidos");
    let num_comp = prompt("Elija su número de cuenta");
    for (let i = 0; i < cuenta.length; i++) {
        if (num_comp == cuenta[i].getNumcomp && (nom + cognom) == cuenta[i].getTitular) {
            cuentaexist = true;
            switch (parseInt(prompt("Va a eliminar la cuenta con número " + num_comp + ".Introduzca 1 para confirmar, 2 para cancelar."))) {
                case 1:
                    cuenta.splice(i, 1)
                    alert("Cuenta elminada");
                    break;
                case 2:
                    alert("Operación cancelada");
                    break;

            }
        } if (cuentaexist == false) {
            alert("Operación no disponible");
        }

    }
}



