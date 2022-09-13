let forms = document.querySelectorAll('.form');
let suivant = document.querySelector('#next');
let selecteur = 0;


var number = 0;

var Tableau = JSON.parse(localStorage.getItem('information')) ?? []

let table = [...Tableau]
function soumettre(){
    event.preventDefault()
    let nomEnfant = document.getElementById('nomEnfant').value;
    console.log(nomEnfant);

    let prenomEnfant = document.getElementById('prenomEnfant').value;
    console.log(prenomEnfant);

    let sexeEnfant = document.getElementById('sexeEnfant').value;
    console.log(sexeEnfant);

    let dateDeEnfant = document.getElementById('dateDeEnfant').value;
    console.log(dateDeEnfant);

    let lieuDeNaissanceEnfant = document.getElementById('lieuDeNaissanceEnfant').value;
    console.log(lieuDeNaissanceEnfant);

    let nomTuteur = document.getElementById('nomTuteur').value;
    console.log(nomTuteur);

    let prenomDuTuteur = document.getElementById('prenomDuTuteur').value;
    console.log(prenomDuTuteur);

    let profession = document.getElementById('profession').value;
    console.log(profession);

    let telephone = document.getElementById('téléphone').value;
    console.log(telephone);

    let email = document.getElementById('email').value;
    console.log(email);

    number= number + 1;

    let remplissage = document.getElementById('ligne');

    ligne.innerHTML += `
    <tr>
    <td scope="row">${number}</td>
    <td>${nomEnfant}</td>
    <td>${prenomEnfant}</td>
    <td>${sexeEnfant}</td>
    <td>${dateDeEnfant}</td>
    <td>${lieuDeNaissanceEnfant}</td>
    <td>${nomTuteur}</td>
    <td>${prenomDuTuteur}</td>
    <td>${profession}</td>
    <td>${telephone}</td>
    <td>${email}</td>
  </tr>
    `


    const information = {
      id : number,
      nome : nomEnfant,
      prenome : prenomEnfant,
      sexe : sexeEnfant,
      date : dateDeEnfant,
      lieu : lieuDeNaissanceEnfant,
      nomt : nomTuteur,
      prenomt : prenomDuTuteur,
      profession : profession,
      telephone : telephone,
      email : email,

    }
    table.push(information)
    localStorage.setItem("information", JSON.stringify(table)) 
}

for(let i=0; i<table.length; i++){
  let information = table[i];

  ligne.innerHTML += `
  <tr>
  <td scope="row">${information.id}</td>
  <td>${information.nome}</td>
  <td>${information.prenome}</td>
  <td>${information.sexe}</td>
  <td>${information.date}</td>
  <td>${information.lieu}</td>
  <td>${information.nomt}</td>
  <td>${information.prenomt}</td>
  <td>${information.profession}</td>
  <td>${information.telephone}</td>
  <td>${information.email}</td>
</tr>
  `
}

suivant.addEventListener('click', ()=>{
  
  forms.forEach(form=>{
    form.classList.remove('active')
  })
  
  

  selecteur++;

  if(selecteur>1){
    selecteur=0;
  }
  
  forms[selecteur].classList.add('active')
})