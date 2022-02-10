class Enemy extends Mob {
    constructor(name, hp, atk, sprite, id) {
        super(name, hp, atk, sprite, id);
    }

    tryToAttackThenWalk(opponents, tower) {
        if (!this.attack(opponents, tower)) {
            let elementToMove = document.getElementById(this.id);
            this.x = this.addEm(this.x, this.velocity);
            this.animateWalk();
            elementToMove.style.right = this.x;
        } else {
            this.attack(opponents, tower)
        }
    }

    areaOfAttack = (id) => {
        let target = document.getElementById(id);
        return {
            areaStart: target?.offsetLeft - target?.offsetHeight * 2,
            areaEnd: target?.offsetLeft - target?.offsetHeight // position + size of mob
        }
    }
}