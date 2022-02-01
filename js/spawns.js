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

    walk(id, x) {
        let elementToMove = document.getElementById(id)
        console.log(this.x)
        this.x = parseInt(this.x.replace("em", "")) + x + "em";
        elementToMove.style.left = this.x
        console.log(elementToMove.style.left)
    }
}

// new Spawnable("Junin", 100, 5, "white", "Junin1");

let numberOfMobsSpawned = 0
let spawn = (name, hp, atk, color) => {
    let id = name + numberOfMobsSpawned
    let spawned = new Spawnable(name, hp, atk, color, id);
    let minion = document.createElement("div")

    minion.style.width = spawned.width;
    minion.style.height = spawned.height;
    minion.style.backgroundColor = spawned.sprite;
    minion.style.position = "absolute";
    minion.style.left = "5em"
    minion.style.bottom = "5em"
    minion.id = spawned.id

    numberOfMobsSpawned++

    let game = document.getElementById("game");
    game.appendChild(minion);
}

spawn("Junin", 100, 5, "black")

// async function spawnMob() {
//     await test.spawn();
//     await test.walk("Junin0", 4)
// }

// spawnMob()