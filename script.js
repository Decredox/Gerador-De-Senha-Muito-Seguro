var senhas_anterioroes = []
var pass = ''
class GerarSenhaAleatoria {
    constructor(num) {  
 var arr = "0AaBb1CcDd2EeFf3GgHh4IiJj5KkLl6MmNn7OoPp8QqRr9SsTt-UuVvWwXx\YyZz@#$%¨&*()£¢¬_-`´{}[]^~:;|\'><".split("").sort()
    var password = ""
    for (let i = 0; i < num; i++) {
         var aleatorio = Math.floor(Math.random() * arr.length)
        password+=arr[aleatorio]
    }
    if(senhas_anterioroes.includes(password)){
        console.log("Gerando novamente, pois essa e repetida...")
    return new GerarSenhaAleatoria(num)
    }else{
        senhas_anterioroes.push(password)
     pass=password
        return console.log(password)
    }
    }
}

/*
example:

let button = document.getElementById("button")
let input_text = document.getElementById("InputText").value
let spanId = document.getElementById("span")
let timer = true; 

button.addEventListener("click", () => {
if(timer == true){
new GerarSenhaAleatoria(input_text)
spanId.innerHTML = pass
timer=false;
}else{
timer=false
setTimeout(() => {
timer=true;
},500)
}
})

*/

