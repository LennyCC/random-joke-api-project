// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function(){
    getRandomJoke();
})

function getRandomJoke(){
    const ajax = new XMLHttpRequest;
    const url = 'https://api.chucknorris.io/jokes/random'
//utiliza sistema de promesas: fetch

    fetch(url).
    then(response => response.json())
    then(data => jokeDIV.innerHTML = data.value)
    catch(error => console.log(error))

    console.log(jokeDIV.textContent)

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
