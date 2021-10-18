class Box extends Figura {
    constructor(x, y, width, height, speed, color, parent) {
        super(x, y, width, height, speed, color, parent);
        this.applyStyle();
    }
}