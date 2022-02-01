class Spawnable extends Mob {
    constructor(name, hp, atk, sprite, id) {
        super(name,hp,atk,sprite,id);
    }
}

// new Spawnable("Junin", 100, 5, "white", "Junin1");

let numberOfMobsSpawned = 0
let objectOfMobsSpawned = {}
let spawn = (name, hp, atk, color) => {
    let id = name + numberOfMobsSpawned //create mob (html div) id
    let spawned = new Spawnable(name, hp, atk, color, id); //instance of object spawnable
    objectOfMobsSpawned[id] = spawned //adding mob to the object of mobs
    console.log(objectOfMobsSpawned)
    let minion = document.createElement("div") //creating the html element

    minion.style = `
        width: ${spawned.width};
        height: ${spawned.height};
        background-color: ${spawned.sprite};
        position: absolute;
        left: 5em;
        bottom: 5em;
    ` // setting style
    minion.id = spawned.id //putting the id in the html

    numberOfMobsSpawned++ //increasing the id number

    let game = document.getElementById("game"); //selecting the "canvas"
    game.appendChild(minion); //adding mob in game
}

spawn("Junin", 100, 5, "black", 10)
objectOfMobsSpawned["Junin0"].walk(6)