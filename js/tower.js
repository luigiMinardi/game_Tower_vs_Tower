class Tower {
    constructor(sprite, id) {
        this.hp = 100;
        this.level = 0;

        this.sprite = sprite;
        this.id = id;

        this.element = document.getElementById(id)
        this.position = this.element.offsetLeft
    }

    towerHitted(damage) {
        if (this.hp > 0) {
            this.hp -= damage;
        } else {
            console.log("F tower")
        }
    }
}