window.onload = load

var chuckSay;
var results;
var url = "https://api.github.com/search/repositories?q="
var textfield = document.getElementById("search");

function load(){
    var welcome = document.getElementById("welcome");
    var button = document.getElementById("Button-click");
    var button1 = document.getElementById("bRepo")
    chuckSay = document.getElementById("jokes");
    results = document.getElementById("results");
    button.onclick = getData;
    button1.onclick = search;
    welcome.classList.add("text-titulo");
}

function getData() {
    randomRequest("GET", "http://api.icndb.com/jokes/random");
}

function search () {
    url += document.getElementById(textfield.value);
    search("GET", url);
}

function randomRequest(method, url){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        var data;
        xhr.onload = function () {
            console.log(xhr.response);
            if (this.status >= 200 && this.status < 300) {
                data = JSON.parse(xhr.response);
                chuckSay.innerHTML = data.value.joke;

            }else{
                chuckSay.innerHTML = "Error, vuelva a intentarlo";
                chuckSay.style.color = "Red";
            }
        };
        xhr.onerror = function () {
            chuckSay.innerHTML = "Error, vuelva a intentarlo";
            chuckSay.style.color = "Red";


        };
        xhr.send();
}

function search (method,url) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    var data;
    xhr.onload = function () {
        console.log(xhr.response);
        if (this.status >= 200 && this.status < 300) {
            data = JSON.parse(xhr.response);
            results.innerHTML = data.items.url;

        }else{
            results.innerHTML = "Error, vuelva a intentarlo";
            results.style.color = "Red";
        }
    };
    xhr.onerror = function () {
        results.innerHTML = "Error, vuelva a intentarlo";
        results.style.color = "Red";

    };
    xhr.send();
}


