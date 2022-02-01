class Mob {
    constructor(name, hp, atk, sprite, id) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;

        this.sprite = sprite;
        this.id = id;

        this.x = "5em"; // left to right (player) | right to left (enemy)
        this.y = "5em"; // bottom to top

        this.width = "3em";
        this.height = "3em";
    }

    #addEm(position, em) {
        return parseInt(position.replace("em", "")) + em + "em";
    }

    #subtractEm(position, em) {
        return parseInt(position.replace("em", "")) - em + "em";
    }

    #findEnemy(opponent) {
        /*
        TODO:
         * Map list of opponents and see if has a match 
         * then return true or false
         */
        let opponentX = this.#subtractEm(opponent.x, 3);
        return this.x == opponentX && this.y == opponent.y;
    }

    attack(opponent) {
        if (this.#findEnemy(opponent) && opponent.hp > 0) {
            opponent.hp -= this.atk;
            console.log(opponent.hp);
        }else if (opponent.hp <= 0 && this.#findEnemy(opponent)) {
            console.log("your opponent died")
        }else {
            console.log("Without opponent in front of you");
        }
    }

    walk(x) {
        let elementToMove = document.getElementById(this.id);
        this.x = this.#addEm(this.x, x);
        elementToMove.style.left = this.x;
        console.log(elementToMove.style.left);
    }
}