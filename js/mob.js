class Mob {
    constructor(name, hp, atk, sprite, id) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;

        this.sprite = sprite;
        this.id = id;

        this.x = "3em"; // left to right (player) | right to left (enemy)
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

    setSprite(newSprite) {
        let element = document.getElementById(this.id);
        element.style.backgroundImage = `url(${newSprite})`;
        element.style.backgroundSize = 'cover';
    }

    animateWalk() {
        let i = 0;
        let walk = setInterval(() => {
            this.sprite = `assets/sprites/Running/Running_0${i}.png`;
            this.setSprite(this.sprite);
            i++;
        }, 41);
        setTimeout(() => {
            clearInterval(walk);
        }, 500);
    }

    areaOfAttack = (id) => {
        let target = document.getElementById(id);
        console.log(this.id, target.offsetLeft)
        /*
        if target?.offsetLeft == 80 //? element left side is 80px from the left side of the screen
        and target?.offsetHeight == 48 //? (3em)
        areaStart == 104 //? position of the sprite (half of "you", sprite is in the center)
        areaEnd == 128 //? position of the enemy (one "you" of distance)
        areaBetween == 24 //? range of attack
        */
        return {
            areaStart: target?.offsetLeft + target?.offsetHeight / 2,
            areaEnd: target?.offsetLeft + target?.offsetHeight
        }
    }

    findEnemy(opponents) {
        let { areaStart, areaEnd } = this.areaOfAttack(this.id);
        console.log(this.id, areaStart, areaEnd);
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
            this.animateWalk();
            elementToMove.style.left = this.x;

        } else {
            console.log('------------------------------------------foundEnemy');
            this.attack(opponents, tower)
        }
    }
}