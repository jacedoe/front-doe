class Compte {
    constructor(nom, cognom, num_comp, num_tran, saldo, titular) {
        
        this._nom = nom;
        this._cognom = cognom;
        this._num_comp = num_comp;
        this._num_tran = 0;
        this._saldo = 50;
        this._titular = this._nom + this._cognom;
    }
    // Getters and Setters

        get getNom(){
            return this._nom;
        }
        set setNom(nom){
            this._nom = nom;
        }
        get getCognom(){
            return this._cognom;
        }
        set setCognom(cognom) {
            this._cognom = cognom;
        }
        get getTitular() {
            return this._titular;
        }
        set setTitular(titular){
            this._titular = titular;
        }
        get getNumcomp(){
            return this._num_comp;
        }
        set setNumcomp(num_comp){
            this._num_comp = num_comp;
        }
        get getNumtran(){
           return this._num_tran; 
        }
        set setNumtran(num_tran){
            this._num_tran = num_tran;
        }
        get getSaldo(){
            return this._saldo;
        }
        set setSaldo(saldo){
            this._saldo = saldo;
        }

        // Methods

        ingresarDiners(diners){
            this._num_tran += 1;
            this._saldo += diners;
            return this._saldo;
        }

        retirarDiners(diners){
            this._num_tran += 1;
            this._saldo -= diners;
            return this._saldo;
        }
        veureTran(){
            return this._num_tran;
        }
        veureCompte() {
            return alert("El Titular " + this._nom + "  " + this._cognom + " con el número de cuenta " + this._num_comp + " tiene un saldo de " + this._saldo + " euros ");
        }
        
}