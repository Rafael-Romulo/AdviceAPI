function newAdvice(advice) {
    newel = document.createElement("li");
    newel.textContent = advice;
    newel.className = "conselhoshowing";
    document.getElementById("listofadvices").appendChild(newel);

}

function requerAdvice(url) {
    let data = new XMLHttpRequest();
    data.open("GET", url, false);
    data.send();
    return data.responseText
}

function showAdvice() {
    datastring = requerAdvice("https://api.adviceslip.com/advice");
    conselho = JSON.parse(datastring);
    conselhocleaned = conselho["slip"]["advice"];
    newAdvice(conselhocleaned);

}