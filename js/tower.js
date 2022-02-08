class Tower {
    constructor(sprite, id) {
        this.maxHp = 1000;
        this.hp = 1000;
        this.level = 0;

        this.sprite = sprite;
        this.id = id;

        this.element = document.getElementById(id)
        this.position = this.element.offsetLeft
    }
}