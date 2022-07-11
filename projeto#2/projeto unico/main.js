var edit = "";

function save(){
    edit = document.getElementById('edit').value;
    var nome = document.getElementById('name')
    nome.innerText = edit

    if (edit === ""){
        nome.innerText = "Username"
    }

}

