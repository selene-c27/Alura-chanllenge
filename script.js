var bnencriptar = document.querySelector(".botonEncriptar");
var bndesencriptar = document.querySelector(".botonDesencriptar");
var muneco = document.querySelector(".Contenedormuneco");
var contenedor = document.querySelector(".contenedorparrafo");
var resultado = document.querySelector(".textoresultado");



bnencriptar.onclick = encriptar;
bndesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}
function desencriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}
function recuperarTexto() {
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}
function ocultarAdelante (){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");

}
function encriptarTexto(mensaje){
    var texto = mensaje
    var textofinal = ""

    for(var i=0; i < texto.length; i++){
        
        if(texto[i] == "a"){
            textofinal = textofinal + "ai"
        }
        
        else if(texto [i] == "e"){
            textofinal = textofinal + "enter"
        }
        else if(texto [i] == "i"){
            textofinal = textofinal + "imes"
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "ober"
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "ufat"
        }
    
        else{
            textofinal =textofinal + texto[i]
        }
        
    }
    return textofinal
}
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i=0; i < texto.length; i++){
        
        if(texto[i] == "a"){
            textofinal = textofinal + "a"
            i = i+1;
        }
        
        else if(texto[i] == "e"){
            textofinal = textofinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "u"
            i = i+3;
        }
    
        else{
            textofinal = textofinal + texto[i];
        }
        
    }
    return textofinal;
}
const btncopiar = document.querySelector("..btn-copiar");
btncopiar.addEventListener("click", Copiar = () => {
        var contenido = document.querySelector(".textoresultado").textContent;
        navigator.clipboard.writeText(cajatexto);
        console.log("hola");
}
)

