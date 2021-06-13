let url = 'https://nl1.api.radio-browser.info/json/stations/byname/jazz';
let response = await fetch(url);

let commits = await response.json(); // leer respuesta del cuerpo y devolver como JSON



document.write(commits[8].name);

commits.forEach(x => console.log(x.name));