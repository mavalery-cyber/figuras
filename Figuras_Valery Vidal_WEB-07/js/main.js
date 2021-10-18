/**
* @name main.js
* @file Add a small description for this file.
* @author <Add Your Name Here>, <addyouremail@mail.com>
* @version 1.0.0
*/

"use strict";

window.addEventListener('load', init, false);

function init() {

    var timer = window.setInterval(update, 100);

    var xInput = document.getElementById('xInput');
    var yInput = document.getElementById('yInput');
    var widthInput = document.getElementById('widthInput');
    var heightInput = document.getElementById('heightInput');
    var speedInput = document.getElementById('speedInput');
    var colorSelect = document.getElementById('colorSelect');
    var typeSelect = document.getElementById('typeSelect');
    var agregarButton = document.getElementById('agregarButton');
    agregarButton.onclick = agregarButtonAction;

    var pool = [];
    pool.push(new Ball(20, 0, 40, 40, 10, 'red', document.body));
    pool.push(new Box(80, 0, 50, 50, 5, 'blue', document.body));
    pool.push(new Triangle(200, 200, 50, 50, 5, 'blue', document.body));

    function agregarButtonAction(e) {
        if (xInput.value !== '' &&
            yInput.value !== '' &&
            widthInput.value !== '' &&
            heightInput.value !== '' &&
            speedInput.value !== '' &&
            colorSelect.value !== '' &&
            typeSelect.value !== '') {

            switch (typeSelect.value) {
                case 'ball':
                    pool.push(new Ball(Number(xInput.value), Number(yInput.value), Number(widthInput.value), Number(heightInput.value), Number(speedInput.value), colorSelect.value, document.body));
                    break;
                case 'box':
                    pool.push(new Box(Number(xInput.value), Number(yInput.value), Number(widthInput.value), Number(heightInput.value), Number(speedInput.value), colorSelect.value, document.body));
                    break;
                case 'triangle':
                    pool.push(new Triangle(Number(xInput.value), Number(yInput.value), Number(widthInput.value), Number(heightInput.value), Number(speedInput.value), colorSelect.value, document.body));
                    break;
                case 'triangleTop':
                        pool.push(new TriangleTop(Number(xInput.value), Number(yInput.value), Number(widthInput.value), Number(heightInput.value), Number(speedInput.value), colorSelect.value, document.body));
                        break;
                case 'egg':
                        pool.push(new Egg(Number(xInput.value), Number(yInput.value), Number(widthInput.value), Number(heightInput.value), Number(speedInput.value), colorSelect.value, document.body));
                        break; 
                case 'parallelogram':
                        pool.push(new Parallelogram(Number(xInput.value), Number(yInput.value), Number(widthInput.value), Number(heightInput.value), Number(speedInput.value), colorSelect.value, document.body));
                        break;  
                case 'trapezoid':
                        pool.push(new Trapezoid(Number(xInput.value), Number(yInput.value), Number(widthInput.value), Number(heightInput.value), Number(speedInput.value), colorSelect.value, document.body));
                        break;  
                case 'pacman':
                        pool.push(new Pacman(Number(xInput.value), Number(yInput.value), Number(widthInput.value), Number(heightInput.value), Number(speedInput.value), colorSelect.value, document.body));
                        break;
                case 'triangleButtomRight':
                        pool.push(new TriangleButtomRight(Number(xInput.value), Number(yInput.value), Number(widthInput.value), Number(heightInput.value), Number(speedInput.value), colorSelect.value, document.body));
                        break; 
                case 'triangleRight':
                        pool.push(new TriangleRight(Number(xInput.value), Number(yInput.value), Number(widthInput.value), Number(heightInput.value), Number(speedInput.value), colorSelect.value, document.body));
                        break;    
                default:
                    break;  
            }
        }
    }

    function update() {
        pool.forEach(item => {
            item.update();
        })
    }
}