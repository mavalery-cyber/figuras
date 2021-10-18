class Pacman extends Figura {
    constructor(x, y, width, height, speed, color, parent) {
        super(x, y, width, height, speed, color, parent);
        this.applyStyle();
    }

    applyStyle() {
        super.applyStyle();
        this.container.style.backgroundColor = 'transparent';
        this.container.style.width = '0px';
        this.container.style.height = '0px';

        this.container.style.borderRight = this.width + 'px';
        this.container.style.borderRightStyle = 'solid';
        this.container.style.borderRightColor = 'transparent';

        this.container.style.borderTop = this.width + 'px';
        this.container.style.borderTopStyle = 'solid';
        this.container.style.borderTopColor = this.color;

        this.container.style.borderLeft = this.width + 'px';
        this.container.style.borderLeftStyle = 'solid';
        this.container.style.borderLeftColor = this.color;

        this.container.style.borderBottom = this.width + 'px';
        this.container.style.borderBottomStyle = 'solid';
        this.container.style.borderBottomColor = this.color;

        this.container.style.borderTopLeftRadius = this.width + 'px';
        this.container.style.borderTopRightRadius = this.width + 'px';
        this.container.style.borderBottomLeftRadius = this.width + 'px';
        this.container.style.borderBottomRightRadius = this.width + 'px';
    }
}

// #pacman {
//     width: 0px;
//     height: 0px;
//     border-right: 60px solid transparent;
//     border-top: 60px solid red;
//     border-left: 60px solid red;
//     border-bottom: 60px solid red;
//     border-top-left-radius: 60px;
//     border-top-right-radius: 60px;
//     border-bottom-left-radius: 60px;
//     border-bottom-right-radius: 60px;
//   }
