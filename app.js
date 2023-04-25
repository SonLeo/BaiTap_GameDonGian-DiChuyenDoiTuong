Class Hero {
    constructor(image, top, right, bottom, left, size) {
        this.image = image;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this.size = size;
    }
    
    getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    moveRight = function () {
        this.left++;
        this.right--;
    }

    moveDown = function () {
        this.top++;
        this.bottom--;
    }

    moveLeft = function () {
        this.left--;
        this.right++;
    }

    moveTop = function () {
        this.top--;
        this.bottom++;
    }
}

let hero = new Hero('naruto.png', 0, window.innerWidth - 200, window.innerHeight - 200, 0, 200);

function start() {
    if ((hero.left < window.innerWidth - hero.size) && (hero.top == 0)) {
        hero.moveRight();
    } else if ((hero.top < window.innerHeight - hero.size) && (hero.left >= window.innerWidth - hero.size)) {
        hero.moveDown();
    } else if ((hero.top >= window.innerHeight - hero.size) && (hero.right < window.innerWidth - hero.size)) {
        hero.moveLeft();
    } else if ((hero.bottom < window.innerHeight - hero.size) && (hero.left == 0)) {
        hero.moveTop();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10)
}

start();
