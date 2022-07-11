var name = ""
function send(){
    name = document.getElementById("name").value
    var res = document.getElementById("res")

    if (name === "vitor"){
        res.innerHTML= name
        res.style.color="lightgreen"
    }else{
        res.innerHTML=name
        res.style.color="red
        var main = document.getElementById("main")
        main.style.display="block"
    }
}
function sn(){
    var yn = document.getElementById("sn").value
    if(yn === "yes"){
        document.writeln(" pode entrar !! ")
    }
}