class Keyboard {
  constructor(keys, encoders) {
    this.keys = keys;
    this.encoders = encoders;
  }

  getKeyCount() {
    return this.keys.length;
  }

  getEncoderCount() {
    return this.encoders.length;
  }
}

export default Keyboard;
