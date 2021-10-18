class Ball extends Figura {
    constructor(x, y, width, height, speed, color, parent) {
        super(x, y, width, height, speed, color, parent);
        this.applyStyle();
    }

    applyStyle() {
        super.applyStyle();
        this.container.style.borderRadius = '50%';
    }
}