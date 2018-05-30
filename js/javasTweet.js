
var areadeTexto=document.getElementById("areaTexto"); 
var autor=document.getElementById("autor");
var contenedorCaracteres=document.getElementById("charConter");
var contador=0;
var botonEnviar=document.getElementById("enviar");
var longitud=areadeTexto.length;
var contadorClicks=document.getElementById("contadorClicks");
var contadorClick=0;

enviar.addEventListener("submit",mostrarTweet);
areaTexto.addEventListener("keyup",ContadorLetras);
botonEnviar.addEventListener("click",mostrarTweet);
areaTexto.addEventListener("keydown",ContadorLetras);
document.addEventListener("click",main);
areaTexto.addEventListener("click",ignorar);
botonEnviar.addEventListener("click",ignorar);
autor.addEventListener("click",ignorar);


function ContadorLetras(event){
  contador=areadeTexto.value.length;
  contenedorCaracteres.textContent=contador+"/140";
}

function mostrarTweet(event){
  var tweetStories=document.getElementById("tweetStories");
  var article=document.createElement("article");
  var tweet=document.createElement("span");
  var sign=document.createElement("label");
  sign.innerHTML="  @"+autor.value+"<hr>";
  tweet.innerHTML=areadeTexto.value + "<br>";

  tweet.appendChild(sign);
  article.appendChild(tweet)
  tweetStories.appendChild(article);

  areadeTexto.value="";
  areadeTexto.length=0;
  autor.value="";

}
function main(){
  contadorClick++;
  document.getElementById("contadorClicks").innerHTML="Numero de Clicks:"+contadorClick;
}
function ignorar(event){
  event.stopPropagation();
}
