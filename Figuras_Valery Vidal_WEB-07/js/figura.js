class Figura {
    constructor(x, y, width, height, speed, color, parent) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.color = color;
        this.parent = parent;
        this.container = document.createElement('div');
        this.parent.appendChild(this.container);
    }

    applyStyle() {
        this.container.style.position = 'absolute';
        this.container.style.left = this.x + 'px';
        this.container.style.top = this.y + 'px';
        this.container.style.width = this.width + 'px';
        this.container.style.height = this.height + 'px';
        this.container.style.backgroundColor = this.color;
    }

    update() {
        this.x += this.speed;
        this.y += this.speed;

        if (this.x >= window.innerWidth) {
            this.x = 0 - this.width;
        }

        if (this.y >= window.innerHeight) {
            this.y = 0 - this.height;
        }


        this.container.style.left = this.x + 'px';
        this.container.style.top = this.y + 'px';
    }
}
