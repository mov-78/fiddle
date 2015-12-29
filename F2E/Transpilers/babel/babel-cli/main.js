
class Point {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
  toString() {
    return `point (${this.x}, ${this.y})`
  }
}

class ColorPoint extends Point {
  constructor(x = 0, y = 0, color = 'cyan') {
    super(x, y)
    this.color = color
  }
  toString() {
    return `${this.color} ${super.toString()}`
  }
}

let cp = new ColorPoint(3, 4, 'red')
console.log(cp.toString())
