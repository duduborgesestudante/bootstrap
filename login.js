let matricula =document.getElementById("matricula")
let senha = document.getElementById("senha")
let estudante = document.getElementById("estudante")
let biblio = document.getElementById("biblio")


function redirecionar(){
    
    if(estudante.checked){
        window.location.href= "pagina_estudante.html"
    }else if(biblio.checked){
        window.location.href= "pagina_biblioteca.html"
    }else{
        alert("Por favor, selecione uma opção")
    }
}