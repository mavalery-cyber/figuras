class TriangleTop extends Figura {
    constructor(x, y, width, height, speed, color, parent) {
        super(x, y, width, height, speed, color, parent);
        this.applyStyle();
    }

    applyStyle() {
        super.applyStyle();
        this.container.style.backgroundColor = 'transparent';
        this.container.style.width = '0px';
        this.container.style.height = '0px';

        this.container.style.borderTop = this.width + 'px';
        this.container.style.borderTopStyle = 'solid';
        this.container.style.borderTopColor = this.color;

        this.container.style.borderLeft = this.width + 'px';
        this.container.style.borderLeftStyle = 'solid';
        this.container.style.borderLeftColor = 'transparent';
    }
}

// #triangle-topright {
//     width: 0;
//     height: 0;
//     border-top: 100px solid red;
//     border-left: 100px solid transparent;
//   }