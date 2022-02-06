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

//Set player
let p1 = new Player();

// Spawn mobs
let numberOfMobsSpawned = 0;
let objectOfAlliesSpawned = {};
let objectOfEnemiesSpawned = {};
let spawn = (name, hp, atk, sprite, type, price = 0) => {
    let id = name + numberOfMobsSpawned; //create mob (html div) id
    let mob = '';

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
            right: 5em;
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

let allyTower = '';
let enemyTower = '';

let createGame = () => {
    allyTower = new Tower('yellow', 'towerAlly');
    enemyTower = new Tower('pink', 'towerEnemy');
}

let restart = () => {
    for (let allie in objectOfAlliesSpawned) {
        let allieInScreen = document.getElementById(objectOfAlliesSpawned[allie].id);
        allieInScreen.remove();
    }
    for (let enemie in objectOfEnemiesSpawned) {
        let enemieInScreen = document.getElementById(objectOfEnemiesSpawned[enemie].id);
        enemieInScreen.remove();
    }
    objectOfAlliesSpawned = {};
    objectOfEnemiesSpawned = {};
    p1.mana = 0;
    p1.updateCounter()
    p1.manaGeneratorLevel = 1;
    p1.manaGeranationRate = 1;
}

let playGame = (screenNumber = 2) => {
    changeScreen(screenNumber);
    createGame()

    let spawnEnemy = () => {
        spawn("Junin", 100, 5, "purple", "enemy")
    }
    let stopInterval = () => {
        clearInterval(rounds);
    }
    let stopEnemies = () => {
        clearInterval(enemies);
    }

    let gameLoop = () => {
        p1.generateMana();
        if (!Object.entries(objectOfAlliesSpawned).length == 0) {
            for (let allie in objectOfAlliesSpawned) {
                if (objectOfAlliesSpawned[allie].hp <= 0) {
                    delete objectOfAlliesSpawned[allie];
                } else {
                    objectOfAlliesSpawned[allie].tryToAttackThenWalk(objectOfEnemiesSpawned, enemyTower)
                }
            }
        }
        if (!Object.entries(objectOfEnemiesSpawned).length == 0) {
            for (let enemie in objectOfEnemiesSpawned) {
                if (objectOfEnemiesSpawned[enemie].hp <= 0) {
                    delete objectOfEnemiesSpawned[enemie];
                } else {
                    objectOfEnemiesSpawned[enemie].tryToAttackThenWalk(objectOfAlliesSpawned, allyTower);
                }
            }
        }
        if (allyTower.hp <= 0 || enemyTower.hp <= 0) {
            let gameOver = document.getElementById('gameOver');
            gameOver.innerHTML = enemyTower.hp <= 0
                ? "Game over, you win! Click on the screen to play again"
                : "Game over, you lose! Click on the screen to play again";
            stopInterval()
            stopEnemies()
            restart()
            changeScreen(3)
        }
    }

    let enemies = setInterval(spawnEnemy, 7000) // spawning enemies
    let rounds = setInterval(gameLoop, 500); // time that the game flows
    setTimeout(stopInterval, 650000); // time until game end
    setTimeout(stopEnemies, 650000); // stopping the spawn of enemies
}