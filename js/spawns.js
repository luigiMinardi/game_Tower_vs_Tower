class Spawnable {
    constructor(name, hp, atk, sprite, id) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.sprite = sprite;

        this.x = "5em" // left to right
        this.y = "5em" // bottom to top
        this.width = "3em";
        this.height = "3em";

        this.id = id
    }

    attack(opponent) {
        let opponentX = parseInt(opponent.x.replace("em", "")) - 3 + "em"
        if (this.x == opponentX && this.y == opponent.y && opponent.hp > 0) {
            opponent.hp -= this.atk;
            console.log(opponent.hp)
        } else if (opponent.hp > 0) {
            console.log("your opponent died")
        } else {
            console.log("Without opponent in front of you")
        }
    }

    walk(x) {
        let elementToMove = document.getElementById(this.id)
        console.log(this.x)
        this.x = parseInt(this.x.replace("em", "")) + x + "em";
        elementToMove.style.left = this.x
        console.log(elementToMove.style.left)
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

spawn("Junin", 100, 5, "black")
objectOfMobsSpawned["Junin0"].walk(6)