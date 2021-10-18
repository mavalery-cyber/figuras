class Egg extends Figura {
    constructor(x, y, width, height, speed, color, parent) {
        super(x, y, width, height, speed, color, parent);
        this.applyStyle();
    }

    applyStyle() {
        super.applyStyle();

        this.container.style.width = this.width + 'px';
        this.container.style.height = this.width + 54 + 'px';
        
        this.container.style.borderRadius = '50% / 60% 60% 40% 40%';
    }
}