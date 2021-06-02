    # BankAccount Example
    ## Una aproximación a la programación orientada a objetos en JavaScript
    #### Ejercicio realizado durante el curso Fonaments de la programació de la IT Academy Barcelonactiva
    
    En el següent exercici el nostre client és una entitat bancària. El banc vol que un client pugui donar d’alta, de
        baixa, veure informació o fer certes operacions en un compte corrent. Per fer-ho necessitem una classe Compte
        que tindrà el camp Titular (nom + cognom), saldo, nombre de compte i el nombre de transaccions realitzades. Els
        mètodes de la classe són: ingresar euros, retirar euros, retornar saldo, veure transaccions, veure compte.
        El mètode ingresar euros permet fer un ingrés al saldo del compte.
        El mètode retirar saldo permet treure euros del saldo del compte
        El mètode retornar saldo, retorna el saldo total del compte
        El mètode veure transaccions, retorna el nombre de transaccions que s’han fet amb el compte
        El mètode veure compte mostra per pantalla totes les dades del compte
        Per donar d’alta un compte, el client ha d’omplir les següents dades: nom, cognom i nombre de compte. Quan es
        crea un compte, la qüantitat sempre és 50€ i el nombre de transaccions és 0</p>

    Abans de crear el compte, hem d’estar segurs que no hi ha cap compte que tingui el mateix titular i el mateix
        nombre de compte. Si un titular ja té aquest nombre de compte, hem d’informar a l’usuari dient-li que el compte
        no es crearà perquè ja té un compte amb aquest nombre i li mostrarem totes les dades d’aquest compte.

        Per donar de baixa un compte, li demanarem a l’usuari que introdueixi nom, cognom i nombre de compte. Si el
        compte existeix, l’eliminarem i informarem a l’usuari que el compte ha estat eliminat. Si el compte no existeix,
        informarem a l’usuari que el compte no existeix i mostrarem a l’usuari tots els comptes que té.

        Per veure un compte, li demanarem a l’usuari que introdueixi nom, cognom i nombre de compte. Si el compte
        existeix, li mostrarem a l’usuari tota la informació del compte. Si el compte no existeix, informarem a l’usuari
        que el compte no existeix i li mostrarem tots els seus comptes.

        Si l’usuari vol fer operacions amb el compte corrent, primer ha d’introduir el nom, cognom i el compte amb el
        que vol operar i llavors ha de poder ingresar, retirar, veure transaccions i veure compte. Si el compte no
        existeix, s’ha d’informar a l’usuari de que el compte amb el que vol operar no existeix i se li han de mostrar
        tots els seus comptes.
    