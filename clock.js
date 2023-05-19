contaData()


function contaData() {
    var now = new Date();
    var she = new Date(2023,6,2);

    var h2 = document.getElementById("h2");
    h2.innerHTML = Math.floor((she.getTime()-now.getTime())/86400000);
}
console.log("teste")