const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];


let teamCont = document.querySelector('.team-container');

  for(i=0; i<team.length; i++){

    teamContainer(team[i].name,team[i].role,team[i].image);
  }
  
  function teamContainer (name,role,image){

    teamCont.innerHTML +=`
    <div class="team-card">
              <div class="card-image">
                <img
                  src="img/${image}"
                  alt="${name}"
                />
              </div>
              <div class="card-text">
                <h3>${name}</h3>
                <p>${role}</p>
              </div>
            </div>
    `
  }
  
  function getMember(){

    let newCard = {};
    
    newCard.name = document.getElementById('name').value;
    newCard.role = document.getElementById('role').value;
    newCard.image = document.getElementById('image').value;

    teamContainer(newCard.name,newCard.role,newCard.image);
    
    return newCard;
    
  }
  
  
  let buttonCreate = document.getElementById('addMemberButton');

  buttonCreate.addEventListener('click', function(){
    
    
    team.push(getMember());
  
  })



