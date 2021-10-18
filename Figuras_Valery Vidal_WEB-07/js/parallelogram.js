class Parallelogram extends Figura {
    constructor(x, y, width, height, speed, color, parent) {
        super(x, y, width, height, speed, color, parent);
        this.applyStyle();
    }

    applyStyle() {
        super.applyStyle();
        
        this.container.style.width = this.width + 'px';
        this.container.style.height = this.height + 'px';
        
        this.container.style.transform = 'skew(20deg)';
        

    }
}