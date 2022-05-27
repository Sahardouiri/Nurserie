//les fonctions en JS
function somme(x , y){
    return x+y;

}
document.write(somme(999,888));

document.write("<br>")
function soustraction(x , y){
    return x-y;

}
document.write(soustraction(999,888));

document.write("<br>")
function division(x , y){
    return x/y;

}
document.write(division(999,888));

document.write("<br>")

function multiplication(x , y){
    return x*y;

}
document.write(multiplication(9,8));

let paragraphe = document.querySelector("#info");
paragraphe.innerText= "on change le texte dans notre paragraphe"

let form = document.querySelector("#myform");
console.log(form)
form.addEventListener("submit",onSubmit)
function onSubmit( event){
    event.preventDefault();
    paragraphe.innerText="le Formulaire à bien été envoyé";
}