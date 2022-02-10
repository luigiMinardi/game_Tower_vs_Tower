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
            console.log('--------------------------------------foundAlly');
            this.attack(opponents, tower)
        }
    }

    areaOfAttack = (id) => {
        let target = document.getElementById(id);
        console.log(this.id, target.offsetLeft)
        /*
        if target?.offsetLeft == 330  //? left side of the element is 330px from the left end of screen
        and target?.offsetHeight == 48 //? (3em)
        areaStart == 282 //? position of the spawnable (left side - size of element)
        areaEnd == 306 //? position of left side - half of element (position of sprite)
        areaBetween == 24 //? area of attack
        */
        return {
            areaStart: target?.offsetLeft - target?.offsetHeight,
            areaEnd: target?.offsetLeft - target?.offsetHeight / 2
        }
    }
}