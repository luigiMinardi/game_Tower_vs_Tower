let changeScreen = (screenNumber) => {

    let newScreen = "screen" + screenNumber;

    let allScreens = ["screen1", "screen2", "screen3"];
    allScreens = allScreens.filter(screen => !newScreen.includes(screen));

    document.getElementById(newScreen).style.display = "block";

    for (let screen of allScreens) {
        document.getElementById(screen).style.display = "none";
    }
}

let numberOfMobsSpawned = 0;
let objectOfMobsSpawned = {};
let spawn = (name, hp, atk, sprite, type) => {
    let id = name + numberOfMobsSpawned; //create mob (html div) id
    let mob = '';
    console.log(objectOfMobsSpawned);

    let minion = document.createElement("div"); //creating the html element

    if (type == "spawn") {
        mob = new Spawnable(name, hp, atk, sprite, id); //instance of object spawnable
        minion.style = `
            width: ${mob.width};
            height: ${mob.height};
            background-color: ${mob.sprite};
            position: absolute;
            left: 5em;
            bottom: 5em;
        ` // setting style
    } else if (type == "enemy") {
        mob = new Enemy(name, hp, atk, sprite, id);
        minion.style = `
            width: ${mob.width};
            height: ${mob.height};
            background-color: ${mob.sprite};
            position: absolute;
            bottom: 5em;
        ` // setting style
    } else {
        delete minion;
        return console.log(`${type} is not a valid type of mob.`);
    }
    objectOfMobsSpawned[id] = mob; //adding mob to the object of mobs

    minion.id = mob.id; //putting the id in the html

    numberOfMobsSpawned++; //increasing the id number

    let game = document.getElementById("game"); //selecting the "canvas"
    game.appendChild(minion); //adding mob in game
}

spawn("Junin", 100, 5, "black", "enemy");
objectOfMobsSpawned["Junin0"].walk(6);

let playGame = (screenNumber) => {

    changeScreen(screenNumber);
}