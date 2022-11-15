const kostka = document.getElementById('kostka');
const stats = document.getElementById('stats');
const button = document.getElementById('button');
let hod = 1;
let pocHod = [];

button.addEventListener('click', function(){
    hod = Math.ceil(Math.random() * 6);
    pocHod.push(hod);
    console.log(pocHod);
    kostka.src = `img/kostka${hod}.png`;
    writeStats();
})

function suma(){
    let sum = 0;
    for(let i = 0; i < pocHod.length; i++){
        sum += pocHod[i];
    }
    return sum;
}

function max(){
    let maximum = 1;
    pocHod.forEach(function(value, index){
        if (value > maximum) maximum = value;
    })
    return maximum;
}

function min(){
    let minimum = 6;
    pocHod.forEach(function(value, index){
        if (value < minimum) minimum = value;
    })
    return minimum;
}

function writeStats(){
    stats.innerHTML = `<p>Poslední hod : ${hod}</p>`;
    stats.innerHTML += `<p>Počet hodů : ${pocHod.length}</p>`;
    stats.innerHTML += `<p>Součet : ${suma()}</p>`;
    stats.innerHTML += `<p>Průmer : ${(suma() / pocHod.length).toFixed(2)}</p>`;
    stats.innerHTML += `<p>Maximum : ${max()}</p>`;
    stats.innerHTML += `<p>Minimum : ${min()}</p>`;
}