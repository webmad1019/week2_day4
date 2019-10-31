/*
const drawApp = {
    title: 'Aplicación de trazado de formas básicas',
    author: 'Ger',
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    wWidth: undefined,
    wHeight: undefined,
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
    },
    setDimensions() {
        document.getElementsByTagName('body')[0].style.margin = 0
        this.canvasDom.setAttribute('height', window.innerHeight)
        this.canvasDom.setAttribute('width', window.innerWidth)
        this.wWidth = window.innerWidth
        this.wHeight = window.innerHeight
    },
    drawFilledSquare() {
        this.ctx.fillRect(this.wWidth / 2 - 100, this.wHeight / 2 - 100, 200, 200)
    },
    drawLinearSquares() {
        this.ctx.strokeRect(10, this.wHeight / 2 - 100, 200, 200)
        this.ctx.strokeStyle = 'red'
        this.ctx.strokeRect(this.wWidth / 2 - 100, this.wHeight / 2 - 100, 200, 200)
        this.ctx.strokeStyle = 'green'
        this.ctx.strokeRect(this.wWidth - 210, this.wHeight / 2 - 100, 200, 200)
    },
    drawLine() {
        this.ctx.strokeStyle = 'blue'
        this.ctx.beginPath()
        this.ctx.moveTo(this.wWidth / 2, 100)
        this.ctx.lineTo(this.wWidth / 2, this.wHeight - 100)
        this.ctx.stroke()
    },
    drawStyleLine() {
        this.ctx.strokeStyle = 'red'
        this.ctx.lineWidth = 20
        this.ctx.setLineDash([40, 80])          // ['tamaño del trazo', 'espacio entre trazos']
        this.ctx.beginPath()
        this.ctx.moveTo(this.wWidth / 2 - 10, 100)
        this.ctx.lineTo(this.wWidth / 2, this.wHeight - 100)
        this.ctx.stroke()
    },
    drawCircle() {
        //this.ctx.arc(x, y, radio, anguloInicio, anguloFinal)
        this.ctx.fillStyle = 'red'
        this.ctx.strokeStyle = 'green'
        this.ctx.lineWidth = 20
        this.ctx.arc(this.wWidth / 2, this.wHeight / 2, 100, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.stroke()
    },
    drawText(text) {
        this.ctx.font = '80px sans-serif'
        this.ctx.fillText(text, 100, 100)
    },
    drawImage(name) {
        let myImage = new Image()
        myImage.src = `img/${name}`
        myImage.onload = () => this.ctx.drawImage(myImage, 100, 100)
    }
}
*/








/*
const animateApp = {
    title: 'Aplicación de animación de formas básicas',
    author: 'Ger',
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    wWidth: undefined,
    wHeight: undefined,
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
    },
    setDimensions() {
        document.getElementsByTagName('body')[0].style.margin = 0
        this.canvasDom.setAttribute('height', window.innerHeight)
        this.canvasDom.setAttribute('width', window.innerWidth)
        this.wWidth = window.innerWidth
        this.wHeight = window.innerHeight
    },
    drawAnimatedBall(name) {
        const ball = new Ball(this.ctx, name)
        setInterval(() => {
            this.clearScreen()
            ball.draw()
        }, 10)
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.wWidth, this.wHeight)
    }
}


class Ball {
    constructor(ctx, name) {
        this._ctx = ctx
        this._image = new Image()
        this._image.src = `img/${name}`
        this._posX = 1
        this._posY = 0
        this._vel = 1
    }

    draw() {

        
        //this._posX >= window.innerWidth - 300 ? this.changeDirection() : null
        //this._posX <= 0 ? this.changeDirection() : null
        

        this._posX >= window.innerWidth - 300 || this._posX <= 0 ? this.changeDirection() : null

        this._posX += this._vel
        this._ctx.drawImage(this._image, this._posX, this._posY)
    }

    changeDirection() {
        this._vel *= -1
    }
}
*/






/*
const controlsApp = {
    title: 'Aplicación de animación de formas básicas controladas por teclado',
    author: 'Ger',
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    wWidth: undefined,
    wHeight: undefined,
    ball: undefined,
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
    },
    setDimensions() {
        document.getElementsByTagName('body')[0].style.margin = 0
        this.canvasDom.setAttribute('height', window.innerHeight)
        this.canvasDom.setAttribute('width', window.innerWidth)
        this.wWidth = window.innerWidth
        this.wHeight = window.innerHeight
    },
    setEventListeners() {
        document.onkeydown = e => {
            switch (e.keyCode) {
                case 37:
                    this.ball.goLeft()
                    break
                case 39:
                    this.ball.goRight()
                    break
            }
        }
    },
    drawControlledBall(name) {
        this.ball = new Ball(this.ctx, name)
        setInterval(() => {
            this.clearScreen()
            this.ball.draw()
        }, 10)
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.wWidth, this.wHeight)
    }
}



class Ball {
    constructor(ctx, name) {
        this._ctx = ctx
        this._image = new Image()
        this._image.src = `img/${name}`
        this._posX = 1
        this._posY = 0
        this._vel = 4
    }

    draw() {
        this._ctx.drawImage(this._image, this._posX, this._posY)
    }

    goLeft() {
        this._posX -= this._vel
    }

    goRight() {
        this._posX += this._vel
    }
}

*/








const obstaclesApp = {
    title: 'Aplicación de generación de obstáculos',
    author: 'Ger',
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    wWidth: undefined,
    wHeight: undefined,
    obstacles: [],
    frames: 1,
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()

        setInterval(() => this.updateGameArea(), 20);
    },
    setDimensions() {
        document.getElementsByTagName('body')[0].style.margin = 0
        this.canvasDom.setAttribute('height', window.innerHeight)
        this.canvasDom.setAttribute('width', window.innerWidth)
        this.wWidth = window.innerWidth
        this.wHeight = window.innerHeight
    },
    updateGameArea() {
        this.clearScreen()
        this.manageObstacles()
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.wWidth, this.wHeight)
    },
    manageObstacles() {

        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].update()
        }

        this.frames += 1

        if (this.frames % 20 === 0) {
            this.obstacles.push(new Obstacle(this.ctx, 10, 40, this.wWidth, 0))
        }
    }
}




class Obstacle {
    constructor(ctx, width, height, x, y) {
        this._width = width;
        this._height = height;
        this._posX = x;
        this._posY = y;
        this._ctx = ctx;

        this._speedX = 0;
        this._speedY = 0;
    }

    update() {
        this._posX -= 1
        this._ctx.fillRect(this._posX, this._posY, this._width, this._height);
    }
}