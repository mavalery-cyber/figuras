class TriangleButtomRight extends Figura {
    constructor(x, y, width, height, speed, color, parent) {
        super(x, y, width, height, speed, color, parent);
        this.applyStyle();
    }
 
    applyStyle() {
        super.applyStyle();
        this.container.style.backgroundColor = 'transparent';
        this.container.style.width = '0px';
        this.container.style.height = '0px';

        this.container.style.borderBottom = this.width + 'px';
        this.container.style.borderBottomStyle = 'solid';
        this.container.style.borderBottomColor = this.color;

        this.container.style.borderLeft = this.width + 'px';
        this.container.style.borderLeftStyle = 'solid';
        this.container.style.borderLeftColor = 'transparent';
    }
}