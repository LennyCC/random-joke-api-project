// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function(){
    getRandomJoke();
})
// el codigo asíncrono puede ser gestionado dentro de una funcion con la directiva 'async'

 async function getRandomJoke(){
    const ajax = new XMLHttpRequest;
    const url = 'https://api.chucknorris.io/jokes/random'
// la silectiva 'await' espera a que se acabe la funcion asincrona
//hasta que no se acabe no se ejecutará la siguiente instrucción

    let response = await fetch(url)
    let data = await response.json()
    updateDOM(data)
    
    ajax.open('GET', url, true);

    ajax.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
            let data = JSON.parse(this.responseText);
            jokeDIV.innerHTML = `${data.value}`
        } else {
            this.onerror = onerror();
        }
    }
    ajax.send();
}
function updateDOM(data){
    jokeDIV.innerHTML = data.value
}
function onerror(){
     jokeDIV.textContent = 'There was an error!';  
}
