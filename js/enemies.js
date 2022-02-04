class Enemy extends Mob {
    constructor(name, hp, atk, sprite, id) {
        super(name, hp, atk, sprite, id);
    }

    walk(x) {
        let elementToMove = document.getElementById(this.id);
        this.x = this.addEm(this.x, x);
        elementToMove.style.right = this.x;
        console.log(elementToMove.style.right);
    }

    areaOfAttack = (id) => {
        let target = document.getElementById(id);

        return {
            areaStart: target.offsetLeft - target.offsetHeight * 2,
            areaEnd: target.offsetLeft - target.offsetHeight // position + size of mob
        }
    }
}