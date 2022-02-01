class Spawnable {
    constructor(name, hp, atk, sprite) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.sprite = sprite;

        this.x = "5em" // left to right
        this.y = "5em" // bottom to top
        this.width = "3em";
        this.height = "3em";
    }

    attack(opponent) {
        opponent.hp -= this.atk;
    }

    walk(x) {
        this.x += x;
    }

    spawn() {
        let minion = document.createElement("div")
        minion.style.width = this.width;
        minion.style.height = this.height;
        minion.style.backgroundColor = this.sprite;
        minion.style.position = "absolute";
        minion.style.left = "5em"
        minion.style.bottom = "5em"
        let game = document.getElementById("game");
        game.appendChild(minion);
    }
}

let test = new Spawnable("Junin", 100, 5, "white");

test.spawn();