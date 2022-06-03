class DirectionInput {
  constructor() {
    this.heldDirection = [];

    this.map = {
      "ArrowUp": "up",
      "KeyW": "up",
      "ArrowDown": "down",
      "KeyS": "down",
      "ArrowLeft": "left",
      "KeyA": "left",
      "ArrowRight": "right",
      "KeyD": "right",
    }
  }

  get direction() {
    return this.heldDirection[0];
  }

  init() {
    document.addEventListener("keydown", e => {
      const direction = this.map[e.code];
      if (direction && this.heldDirection.indexOf(direction) === -1) {
        this.heldDirection.unshift(direction);
      }
    });
    document.addEventListener("keyup", e => {
      const direction = this.map[e.code];
      const index = this.heldDirection.indexOf(direction);
      if (index > -1) {
        this.heldDirection.splice(index, 1);
      }
    })
  }
}