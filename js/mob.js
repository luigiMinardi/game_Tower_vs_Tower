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

        this.velocity = 0.3;
    }

    addEm(position, em) {
        return parseFloat(position.replace("em", "")) + em + "em";
    }

    subtractEm(position, em) {
        return parseFloat(position.replace("em", "")) - em + "em";
    }

    areaOfAttack = (id) => {
        let target = document.getElementById(id);

        return {
            areaStart: target.offsetLeft + target.offsetHeight,
            areaEnd: target.offsetLeft + target.offsetHeight * 2 // position + size of mob
        }
    }

    findEnemy(opponent) {
        /*
        TODO:
         * Map list of opponents and see if has a match 
         * then return true or false
         */
        let opponentInScreen = document.getElementById(opponent.id)
        let positionOponent = opponentInScreen.offsetLeft
        let { areaStart, areaEnd } = this.areaOfAttack(this.id)
        console.log(positionOponent, "positionOponent")
        console.log(areaStart, "areaStart")
        console.log(areaEnd, "areaEnd")
        return positionOponent > areaStart && positionOponent < areaEnd && this.y == opponent.y;
    }

    attack(opponent) {
        if (this.findEnemy(opponent) && opponent.hp > 0) {
            opponent.hp -= this.atk;
            console.log(opponent.hp);
        } else if (opponent.hp <= 0 && this.findEnemy(opponent)) {
            console.log("your opponent died");
        } else {
            console.log("Without opponent in front of you");
        }
    }

    walk() {
        let elementToMove = document.getElementById(this.id);
        this.x = this.addEm(this.x, this.velocity);
        elementToMove.style.left = this.x;
        console.log(elementToMove.style.left);
    }
}