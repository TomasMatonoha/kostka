const enemy = document.getElementById("enemy");
const stats = document.getElementById("stats");
const startButton = document.getElementById("startButton");
const msg = document.getElementById("msg");
const w1 = document.getElementById("w1");
const w2 = document.getElementById("w2");
const w3 = document.getElementById("w3");
const weapon = document.getElementById("weapon");
const combatLog = document.getElementById("combatLog");
let delayInMs = 1000;
let roll;
let enemyMaxHP = 1;
let playerHP = 20;
let w1DMG = 1;
let w2DMG = 1;
let w3DMG = 1;
let pocHod = [];

startButton.addEventListener("click", function () {
  startButton.classList.add("d-none");
  weapon.classList.remove("d-none");
  weapon.classList.add("d-inline-block");
  msg.classList.add("d-none");
});

w1.addEventListener("click", function () {
  w1DMG++;
  {
    roll = Math.ceil(Math.random() * 3);
    console.log("roll", roll);
    if (roll == 1) {
      enemy.title = 'Ohnivý mág'
      combatLoop(w1DMG, enemyMaxHP);
    } else if (roll == 2) {
      enemy.title = 'Troll'
      combatLoop(w2DMG, enemyMaxHP);
    } else if (roll == 3) {
      enemy.title = 'Upír'
      combatLoop(w3DMG, enemyMaxHP);
    }
    console.log("w1", w1DMG);
    console.log("w2", w2DMG);
    console.log("w3", w3DMG);
    enemyMaxHP++;
    enemy.src = `img/enemy${roll}.png`;
    pocHod.push(roll);
    enemy.classList.remove("d-none");
    enemy.classList.add("d-inline-block");
    weapon.classList.remove("d-none");
    weapon.classList.add("d-inline-block");
  }
});

w2.addEventListener("click", function () {
  w2DMG++;
  {
    roll = Math.ceil(Math.random() * 3);
    console.log("roll", roll);
    if (roll == 1) {
      enemy.title = 'Ohnivý mág'
      combatLoop(w1DMG, enemyMaxHP);
    } else if (roll == 2) {
      enemy.title = 'Troll'
      combatLoop(w2DMG, enemyMaxHP);
    } else if (roll == 3) {
      enemy.title = 'Upír'
      combatLoop(w3DMG, enemyMaxHP);
    }
    console.log("w1", w1DMG);
    console.log("w2", w2DMG);
    console.log("w3", w3DMG);
    enemyMaxHP++;
    enemy.src = `img/enemy${roll}.png`;
    pocHod.push(roll);
    enemy.classList.remove("d-none");
    enemy.classList.add("d-inline-block");
    weapon.classList.remove("d-none");
    weapon.classList.add("d-inline-block");
  }
});

w3.addEventListener("click", function () {
  w3DMG++;
  {
    roll = Math.ceil(Math.random() * 3);
    console.log("roll", roll);
    if (roll == 1) {
      enemy.title = 'Ohnivý mág'
      combatLoop(w1DMG, enemyMaxHP);
    } else if (roll == 2) {
      enemy.title = 'Troll'
      combatLoop(w2DMG, enemyMaxHP);
    } else if (roll == 3) {
      enemy.title = 'Upír'
      combatLoop(w3DMG, enemyMaxHP);
    }
    console.log("w1", w1DMG);
    console.log("w2", w2DMG);
    console.log("w3", w3DMG);
    enemyMaxHP++;
    enemy.src = `img/enemy${roll}.png`;
    pocHod.push(roll);
    enemy.classList.remove("d-none");
    enemy.classList.add("d-inline-block");
    weapon.classList.remove("d-none");
    weapon.classList.add("d-inline-block");
  }
});

function combatLoop(damage, enemyHP) {
  console.log("damage", damage);
  combatLog.innerHTML = "";
  let loops = 0;
  let zivoty;
  if(damage==1){
    zivoty = 'život';
  }
  else if(damage<=4){
    zivoty = 'životy';
  }
  else{
    zivoty = 'životů';
  }
  while (enemyHP > 0 && playerHP > 0) {
    loops++;
    console.log("Loops", loops);
    enemyHP = enemyHP - damage;
    playerHP--;
    combatLog.innerHTML += `<p class="text-center">Nepřítel ubral hráči <strong>1</strong> život (Player HP : ${playerHP})</p>`;
    combatLog.innerHTML += `<p class="text-center">Hráč ubral nepříteli <strong>${damage}</strong> ${zivoty} (Enemy HP: ${enemyHP})</p>`;
  }
  stats.innerHTML = `<p>Počet životů hráče : ${playerHP}</p>`;
  writeStats();
  console.log("playerHP", playerHP);
  weapon.classList.remove("d-inline-block");
  weapon.classList.add("d-none");
}

function writeStats() {
  if (playerHP <= 0) {
    stats.innerHTML = `<p><b>KONEC HRY<b></p>`;
    stats.innerHTML += `<p><b>POČET PORAŽENÝCH NEPŘÁTEL : ${pocHod.length}<b></p>`;
    enemy.disabled = true;
    w1.disabled = true;
    w2.disabled = true;
    w3.disabled = true;
  } else {
    stats.innerHTML += `<p>Počet životů nepřátel : ${enemyMaxHP}</p>`;
    stats.innerHTML += `<p>Poškození, které způsobí vodní hůlka : ${w1DMG}</p>`;
    stats.innerHTML += `<p>Poškození, které způsobí meč : ${w2DMG}</p>`;
    stats.innerHTML += `<p>Poškození, které způsobí stříbrná dýka : ${w3DMG}</p>`;
  }
}
