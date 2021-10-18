class Triangle extends Figura {
    constructor(x, y, width, height, speed, color, parent) {
        super(x, y, width, height, speed, color, parent);
        this.applyStyle();
    }
 
    applyStyle() {
        super.applyStyle();
        this.container.style.backgroundColor = 'transparent'
        this.container.style.width = '0px';
        this.container.style.height = '0px';

        this.container.style.borderLeftWidth = (this.height / 2) + 'px';
        this.container.style.borderLeftStyle = 'solid';
        this.container.style.borderLeftColor = 'transparent';

        this.container.style.borderRightWidth = (this.height / 2) + 'px';
        this.container.style.borderRightStyle = 'solid';
        this.container.style.borderRightColor = 'transparent';

        this.container.style.borderBottomWidth = this.width + 'px';
        this.container.style.borderBottomStyle = 'solid';
        this.container.style.borderBottomColor = this.color;
    }
}

// #triangle-up {
//     width: 0;
//     height: 0;
//     border-left: 50px solid transparent;
//     border-right: 50px solid transparent;
//     border-bottom: 100px solid red;
//   }