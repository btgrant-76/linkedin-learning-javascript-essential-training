class Encoder {
  constructor(leftTurn, rightTurn) {
    this.leftTurn = leftTurn;
    this.rightTurn = rightTurn;
  }

  turnRight() {
    console.log(this.rightTurn);
  }
  turnLeft() {
    console.log(this.leftTurn);
  }
}

export default Encoder;
