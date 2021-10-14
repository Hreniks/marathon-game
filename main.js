const scorpion = {
    name: "SCORPION",    
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ['sword'],
    attack: function () { 
        console.log(this.name + " fight");
     }
};

const subZero = {
    name: "SUB-ZERO",    
    hp: 90,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ['sword'],
    attack: function () { 
        console.log(this.name + " fight");
     }
}

function createPlayer(playerClass, obj){
    
    let newDiv = document.createElement('div');
    
    newDiv.classList.add(playerClass);

    let progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    let life = document.createElement('div');
    life.classList.add('life');
    life.style.width = obj.hp + "%";


    let name = document.createElement('div');
    name.classList.add('name');
    name.innerText = obj.name;


    let character = document.createElement('div');
    character.classList.add('character');
    character.appendChild(document.createElement('img')).setAttribute('src', obj.img);
    
    newDiv.appendChild(progressbar);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    newDiv.appendChild(character);


    return document.querySelector('.arenas').appendChild(newDiv);
}

createPlayer('player1',scorpion);
createPlayer('player2',subZero);