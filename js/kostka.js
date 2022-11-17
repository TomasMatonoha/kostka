const enemy = document.getElementById('enemy');
const stats = document.getElementById('stats');
const button = document.getElementById('button');
const msg = document.getElementById('msg');
const w1 = document.getElementById('w1');
const w2 = document.getElementById('w2');
const w3 = document.getElementById('w3');
const weapon = document.getElementById('weapon')
let roll;
let lastEnemy;
let enemyMaxHP = 1;
let w1DMG = 1;
let w2DMG = 1;
let w3DMG = 1;
let pocHod = [];
let enemies = ["Fire demon", "Troll", "Vampire"];

button.addEventListener('click', function(){
    roll = Math.ceil(Math.random() * 3);
    console.log('roll', roll);
    if(roll == 1){
        combatLoop(w1DMG, enemyMaxHP);
    }
    else if(roll == 2){
        combatLoop(w2DMG, enemyMaxHP);
    }
    else if(roll == 3){
        combatLoop(w3DMG, enemyMaxHP);
    }
    console.log('w1', w1DMG)
    console.log('w2', w2DMG)
    console.log('w3', w3DMG)
    enemyMaxHP++;
    lastEnemy = roll;
    pocHod.push(roll);
    enemy.src = `img/enemy${roll}.png`;
    writeStats();
    weapon.classList.remove('d-none');
    weapon.classList.add('d-inline-block');
    button.classList.add('d-none');
    button.classList.remove('d-inline-block');
})

w1.addEventListener('click', function(){
    w1DMG++;
    weapon.classList.remove('d-inline-block');
    weapon.classList.add('d-none');
    enemy.classList.remove('d-none');
    enemy.classList.add('d-inline-block');
    button.classList.remove('d-none');
    button.classList.add('d-inline-block');
})

w2.addEventListener('click', function(){
    w2DMG++;
    weapon.classList.remove('d-inline-block');
    weapon.classList.add('d-none');
    enemy.classList.remove('d-none');
    enemy.classList.add('d-inline-block');
    button.classList.remove('d-none');
    button.classList.add('d-inline-block');
})

w3.addEventListener('click', function(){
    w3DMG++;
    weapon.classList.remove('d-inline-block');
    weapon.classList.add('d-none');
    enemy.classList.remove('d-none');
    enemy.classList.add('d-inline-block');
    button.classList.remove('d-none');
    button.classList.add('d-inline-block');
})

function combatLoop(damage, enemyHP){
    let playerMaxHP = 20;
    let playerHP = playerMaxHP;
    while(enemyHP>0 && playerHP>=0){
        enemyHP = enemyHP-damage;
        playerHP--;
    }
    console.log(playerHP);
    button.classList.remove('d-none');
    button.classList.add('d-inline-block');
    enemy.classList.add('d-none');
    enemy.classList.remove('d-inline-block');
}

function writeStats(){
    stats.innerHTML = `<p>Předchozí nepřítel : ${enemies[lastEnemy-1]}</p>`;
    stats.innerHTML += `<p>Počet poražených nepřátel : ${pocHod.length}</p>`;
}