const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    name: "SCORPION",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ['sword'],
    player: 1,
    attack: function () {
        console.log(this.name + "Fight...");
    }
};

const player2 = {
    name: "SUB-ZERO",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ['sword'],
    player: 2,
    attack: function () {
        console.log(this.name + "Fight...");
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}


function createPlayer(obj) {

    let newDiv = createElement('div', 'player' + obj.player);


    let progressbar = createElement('div', 'progressbar');

    let life = createElement('div', 'life');
    life.style.width = obj.hp + "%";


    let name = createElement('div', 'name');
    name.innerText = obj.name;


    let character = createElement('div', 'character');
    character.appendChild(createElement('img')).setAttribute('src', obj.img);

    newDiv.appendChild(progressbar);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    newDiv.appendChild(character);

    return newDiv;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= randomNumber(1, 20);
    $playerLife.style.width = player.hp + '%';

    if (player.hp <= 0) {
        $arenas.appendChild(playerWin(getWinner()));  
        $playerLife.style.width = 0;
        player.hp = 0;
        $randomButton.disabled = true;
    }

}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function playerWin(name) {
        const $loseTitle = createElement('div', 'loseTitle');
        $loseTitle.innerText = name + ' Wins!';
        return $loseTitle;
}

function getWinner(){
    if (player1.hp !== 0) return player1.name;
    if (player2.hp !== 0) return player2.name;  
}




$randomButton.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));