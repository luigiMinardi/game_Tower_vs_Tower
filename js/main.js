// Change Screen
let changeScreen = (screenNumber) => {

    let newScreen = "screen" + screenNumber;

    let allScreens = ["screen1", "screen2", "screen3"];
    allScreens = allScreens.filter(screen => !newScreen.includes(screen));

    document.getElementById(newScreen).style.display = "block";

    for (let screen of allScreens) {
        document.getElementById(screen).style.display = "none";
    }
}

//Set player and towers
let p1 = new Player();
let allyTower = new Tower('yellow', 'towerAlly');
let enemyTower = new Tower('pink', 'towerEnemy');

// Spawn mobs
let numberOfMobsSpawned = 0;
let objectOfAlliesSpawned = {};
let objectOfEnemiesSpawned = {};
let spawn = (name, hp, atk, sprite, type, price = 0) => {
    let id = name + numberOfMobsSpawned; //create mob (html div) id
    let mob = '';
    console.log(objectOfAlliesSpawned);
    console.log(objectOfEnemiesSpawned);

    let minion = document.createElement("div"); //creating the html element

    if (type == "spawn" && p1.mana >= price) {
        p1.mana -= price; //deducting the mana of the player
        p1.updateCounter();
        mob = new Spawnable(name, hp, atk, sprite, id, price); //instance of object spawnable
        minion.style = `
            width: ${mob.width};
            height: ${mob.height};
            background-color: ${mob.sprite};
            position: absolute;
            left: 5em;
            bottom: 5em;
        ` // setting style
        objectOfAlliesSpawned[id] = mob; //adding mob to the object of mobs
    } else if (type == "enemy") {
        mob = new Enemy(name, hp, atk, sprite, id);
        minion.style = `
            width: ${mob.width};
            height: ${mob.height};
            background-color: ${mob.sprite};
            position: absolute;
            bottom: 5em;
        ` // setting style
        objectOfEnemiesSpawned[id] = mob; //adding mob to the object of mobs
    } else {
        delete minion;
        return console.log(`${type} is not a valid type of mob.`);
    }

    minion.id = mob.id; //putting the id in the html

    numberOfMobsSpawned++; //increasing the id number

    let game = document.getElementById("game"); //selecting the "canvas"
    game.appendChild(minion); //adding mob in game
}

spawn("Junin", 100, 5, "black", "enemy");
objectOfEnemiesSpawned["Junin0"].walk(6);

let playGame = (screenNumber = 2) => {
    // Get the Interval ID
    let test = () => {
        p1.generateMana();
        p1.generateMana();
        p1.generateMana();
        p1.generateMana();
        p1.generateMana();
        p1.generateMana();
        p1.generateMana();
        p1.generateMana();
        if (!Object.entries(objectOfAlliesSpawned).length == 0) {
            for (let allies in objectOfAlliesSpawned) {
                console.log(objectOfAlliesSpawned[allies])
                objectOfAlliesSpawned[allies].walk(0.1)
            }
        }
    }
    let stop_interval = () => {
        clearInterval(setInterval_ID);
    }
    var setInterval_ID = setInterval(test, 500);
    // Set timeout to call stop_interval function after 12 seconds
    setTimeout(stop_interval, 60000); // time until game end

}