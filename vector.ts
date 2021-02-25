const toDegrees = (radians: number) => (radians * 180) / Math.PI;

export class Vector {
  components: number[];
  constructor(...components: number[]) {
    this.components = components;
  }

  add(vector: Vector) {
    this.components = this.components.map(
      (c, index) => c + vector.components[index]
    );
    return this;
  }

  subtract(vector: Vector) {
    this.components = this.components.map(
      (c, index) => c - vector.components[index]
    );
    return this;
  }

  scalarMultiply(num: number) {
    this.components = this.components.map((c) => c * num);
    return this;
  }

  dotProduct(vector: Vector): number {
    return this.components.reduce(
      (acc, c, index) => acc + c * vector.components[index],
      0
    );
  }

  crossProduct(vector: Vector): Vector {
    if (this.components.length !== 3) {
      throw new Error(
        "The cross product has only been defined for three dimensions"
      );
    }
    this.components = [
      this.components[1] * vector.components[2] -
        vector.components[1] * this.components[2],
      -(
        this.components[0] * vector.components[2] -
        vector.components[0] * this.components[2]
      ),
      this.components[0] * vector.components[1] -
        vector.components[0] * this.components[1],
    ];

    return this;
  }

  magnitude() {
    return Math.sqrt(
      this.components.reduce((acc, component) => acc + component * component, 0)
    );
  }

  angle(vector: Vector) {
    return toDegrees(
      Math.acos(this.dotProduct(vector) / this.magnitude() / vector.magnitude())
    );
  }
}
