const humain ={
    couleur_cheveux: "bleu",
couleur_yeux:"noir",
taille: 187,
age:34,
sex:"M",
hobbies: ["pèche","JS","boxe"],
img:"https://c.tenor.com/ysUnD6xjPZQAAAAC/kamoulox.gif",
nom:"toto",

};


document.write(`<div>
<img src=${humain.img}/>
<div>
<h1>${humain.nom}</h1><br/>
<span>${humain.sex}</span><br/>
<span>${humain.age}</span><br/>
<span>hobbies: ${humain.hobbies.join(' - ')}
<span/>
<span>${humain.taille}cm</span>
</div>
</div>`);




    