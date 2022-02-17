const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'img/walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'img/scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'img/barbara-ramos-graphic-designer.jpg',
    },
  ];


const teamContainer = document.querySelector('.team-container');


console.log(team)

for(let i=0; i<team.length; i++){
    let membro = team[i];
    teamContainer.innerHTML += 
    `<div class="team-card">
        <div class="card-image">
            <img
                src="${membro.image}"
                alt="${membro.name}"
            />
        </div>
        <div class="card-text">
            <h3>${membro.name}</h3>
            <p>${membro.role}</p>
        </div>
    </div>
    </div>`;

    
}
console.log(teamContainer)