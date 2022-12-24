var inputText = document.querySelector("#input-translator")
var btnTranslate = document.querySelector("#translation-btn")
var outputMessage = document.querySelector("#output-translator")

var yodaAPI = "https://api.funtranslations.com/translate/yoda.json"

function getUrlTranslation(text) {
   return yodaAPI + "?" + "text=" + text;
}

function clickEventHandler() {
    var userInput = inputText.value;

    fetch(getUrlTranslation(userInput))
    .then(Response => Response.json()
    .then(json => {
        outputMessage.innerText = json.contents.translated;
    }))
}

btnTranslate.addEventListener('click', clickEventHandler);