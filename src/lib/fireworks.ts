/* koto:
 * i dont really know where this script from is... maybe http://xfwl.club/ ?
 * but it is empty now.
 */

interface CoordinateType {
  x: number;
  y: number;
}

interface AreaType {
  width: number;
  height: number;
}

class Circle {
  private readonly origin: CoordinateType;
  readonly position: CoordinateType;
  private readonly color: string;
  private readonly speed: number;
  private readonly angle: number;
  private context: CanvasRenderingContext2D;
  private renderCount: number;
  constructor({ origin, speed, color, angle, context }) {
    this.origin = origin
    this.position = { ...this.origin }
    this.color = color
    this.speed = speed
    this.angle = angle
    this.context = context
    this.renderCount = 0
  }

  draw() {
    this.context.fillStyle = this.color
    this.context.beginPath()
    this.context.arc(this.position.x, this.position.y, 2, 0, Math.PI * 2)
    this.context.fill()
  }

  move() {
    this.position.x = Math.sin(this.angle) * this.speed + this.position.x
    this.position.y =
      Math.cos(this.angle) * this.speed +
      this.position.y +
      this.renderCount * 0.3
    this.renderCount++
  }
}

class Boom {
  private readonly origin: CoordinateType;
  private readonly context: CanvasRenderingContext2D;
  private readonly circleCount: number;
  private area: AreaType;
  stop: boolean;
  private readonly circles: Circle[];

  constructor({ origin, context, circleCount = 10, area }) {
    this.origin = origin
    this.context = context
    this.circleCount = circleCount
    this.area = area
    this.stop = false
    this.circles = []
  }

  randomArray(range) {
    const length = range.length
    const randomIndex = Math.floor(length * Math.random())
    return range[randomIndex]
  }

  randomColor() {
    const range = ['8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    return (
      '#' +
      this.randomArray(range) +
      this.randomArray(range) +
      this.randomArray(range) +
      this.randomArray(range) +
      this.randomArray(range) +
      this.randomArray(range)
    )
  }

  randomRange(start, end) {
    return (end - start) * Math.random() + start
  }

  init() {
    for (let i = 0; i < this.circleCount; i++) {
      const circle = new Circle({
        context: this.context,
        origin: this.origin,
        color: this.randomColor(),
        angle: this.randomRange(Math.PI - 1, Math.PI + 1),
        speed: this.randomRange(1, 6),
      })
      this.circles.push(circle)
    }
  }

  move() {
    this.circles.forEach((circle, index) => {
      if (
        circle.position.x > this.area.width ||
        circle.position.y > this.area.height
      ) {
        return this.circles.splice(index, 1)
      }
      circle.move()
    })
    if (this.circles.length === 0) {
      this.stop = true
    }
  }

  draw() {
    this.circles.forEach((circle) => circle.draw())
  }
}

// TODO: 调整页面大小后自动调整 canvas 大小
class CursorSpecialEffects {
  private readonly computerCanvas: HTMLCanvasElement;
  private readonly renderCanvas: HTMLCanvasElement;

  private readonly computerContext: CanvasRenderingContext2D;
  private readonly renderContext: CanvasRenderingContext2D;

  private readonly globalWidth: number;
  private readonly globalHeight: number;

  private booms: Boom[];

  private running: boolean;
  constructor() {
    this.computerCanvas = document.createElement('canvas')
    this.renderCanvas = document.createElement('canvas')

    this.computerContext = this.computerCanvas.getContext('2d')
    this.renderContext = this.renderCanvas.getContext('2d')

    this.globalWidth = window.innerWidth
    this.globalHeight = window.innerHeight

    this.booms = []
    this.running = false
  }

  handleMouseDown(e) {
    const boom = new Boom({
      origin: { x: e.clientX, y: e.clientY },
      context: this.computerContext,
      area: {
        width: this.globalWidth,
        height: this.globalHeight,
      },
    })
    boom.init()
    this.booms.push(boom)
    this.running || this.run()
  }

  handlePageHide() {
    this.booms = []
    this.running = false
  }

  init() {
    const style = this.renderCanvas.style
    style.position = 'fixed'
    style.top = style.left = '0'
    style.zIndex = '999999999999999999999999999999999999999999'
    style.pointerEvents = 'none'

    style.width =
      String(this.renderCanvas.width =
        this.computerCanvas.width =
          this.globalWidth)
    style.height =
      String(this.renderCanvas.height =
        this.computerCanvas.height =
          this.globalHeight)

    document.body.append(this.renderCanvas)

    window.addEventListener('mousedown', this.handleMouseDown.bind(this))
    window.addEventListener('pagehide', this.handlePageHide.bind(this))
  }

  // untested
  destroy() {
    this.running = false
    try {
      document.body.removeChild(this.renderCanvas)
      window.removeEventListener('mousedown', this.handleMouseDown.bind(this))
      window.removeEventListener('pagehide', this.handlePageHide.bind(this))
    } catch (err) {
      console.error(err)
    }
  }

  run() {
    this.running = true
    if (this.booms.length === 0) {
      return (this.running = false)
    }

    requestAnimationFrame(this.run.bind(this))

    this.computerContext.clearRect(0, 0, this.globalWidth, this.globalHeight)
    this.renderContext.clearRect(0, 0, this.globalWidth, this.globalHeight)

    this.booms.forEach((boom, index) => {
      if (boom.stop) {
        return this.booms.splice(index, 1)
      }
      boom.move()
      boom.draw()
    })
    this.renderContext.drawImage(
      this.computerCanvas,
      0,
      0,
      this.globalWidth,
      this.globalHeight
    )
  }
}

export { CursorSpecialEffects }
