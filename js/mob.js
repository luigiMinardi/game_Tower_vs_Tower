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
            areaStart: target?.offsetLeft + target?.offsetHeight,
            areaEnd: target?.offsetLeft + target?.offsetHeight * 2 // position + size of mob
        }
    }

    findEnemy(opponents) {
        let { areaStart, areaEnd } = this.areaOfAttack(this.id);
        let opponentsToAttack = [];
        for (let opponent in opponents) {
            let opponentId = opponents[opponent].id;
            let opponentInScreen = document.getElementById(opponentId);
            let positionOponent = opponentInScreen?.offsetLeft;
            if (positionOponent > areaStart && positionOponent < areaEnd) {
                opponentsToAttack.push(opponentId);
            }
        }
        return opponentsToAttack
    }

    attack(opponents, tower) {
        let opponentsToAttack = this.findEnemy(opponents)
        let { areaStart, areaEnd } = this.areaOfAttack(this.id);
        let trueOrFalse = false
        if (opponentsToAttack.length > 0) {
            let i = 0
            for (let opponent in opponents) {
                let opponentId = opponents[opponent].id;
                if (opponentId == opponentsToAttack[i]) {
                    opponents[opponent].hp -= this.atk;
                    console.log(opponents[opponent].hp);
                }
                if (opponents[opponent].hp <= 0) {
                    let opponentInScreen = document.getElementById(opponentId);
                    opponentInScreen.remove();
                }
                i++
            }
            trueOrFalse = true //found enemies
        } else {
            trueOrFalse = false //without enemies
        }
        console.log(tower.id, tower.position, tower.hp)
        if (tower.position > areaStart && tower.position < areaEnd) {
            tower.hp -= this.atk;
            console.log(tower.hp)
            trueOrFalse = true //with tower infront
        }
        return trueOrFalse
    }

    tryToAttackThenWalk(opponents, tower) {
        if (!this.attack(opponents, tower)) {
            let elementToMove = document.getElementById(this.id);
            this.x = this.addEm(this.x, this.velocity);
            elementToMove.style.left = this.x;
        } else {
            this.attack(opponents, tower)
        }
    }
}