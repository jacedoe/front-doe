function letraDni(dni)
{
    let string="TRWAGMYFPDXBNJZSQVHLCKET";
    let position = dni%23;
    let letter = string.substring(position, position+1);
    return letter;
}

letraDni(78850398);