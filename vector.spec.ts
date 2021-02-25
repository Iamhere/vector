import { Vector } from "./vector";

describe("Vector", () => {
  describe("two dimensional", () => {
    let v1: Vector;
    let v2: Vector;
    beforeEach(() => {
      v1 = new Vector(1, 2);
      v2 = new Vector(2, 3);
    });
    it("adds two vectors", () => {
      expect(v1.add(v2)).toEqual(new Vector(3, 5));
    });
    it("subtracts two vectors", () => {
      expect(v1.subtract(v2)).toEqual(new Vector(-1, -1));
    });
    it("scalarMultiplies two vectors", () => {
      expect(v1.scalarMultiply(2)).toEqual(new Vector(2, 4));
    });
    it("dotProduct two vectors", () => {
      expect(v1.dotProduct(v2)).toEqual(8);
    });
    it("crossProduct two vectors", () => {
      expect(() => {
        v1.crossProduct(v2);
      }).toThrowError(
        new Error(
          "The cross product has only been defined for three dimensions"
        )
      );
    });
    it("calculates magnitude", () => {
      expect(v1.magnitude()).toEqual(Math.sqrt(5));
      expect(v2.magnitude()).toEqual(Math.sqrt(13));
    });
    it("calculates angle", () => {
      expect(v1.angle(v2).toFixed(6)).toEqual("7.125016");
    });
  });
  describe("three dimensional", () => {
    let v1: Vector;
    let v2: Vector;
    beforeEach(() => {
      v1 = new Vector(1, 2, 3);
      v2 = new Vector(2, 3, 4);
    });
    it("adds two vectors", () => {
      expect(v1.add(v2)).toEqual(new Vector(3, 5, 7));
    });
    it("subtracts two vectors", () => {
      expect(v1.subtract(v2)).toEqual(new Vector(-1, -1, -1));
    });
    it("scalarMultiplies two vectors", () => {
      expect(v1.scalarMultiply(2)).toEqual(new Vector(2, 4, 6));
    });
    it("scalarMultiplies two vectors", () => {
      expect(v1.dotProduct(v2)).toEqual(20);
    });
    it("crossProduct two vectors", () => {
      expect(v1.crossProduct(v2)).toEqual(new Vector(-1, 2, -1));
    });
    it("calculates magnitude", () => {
      expect(v1.magnitude()).toEqual(Math.sqrt(14));
      expect(v2.magnitude()).toEqual(Math.sqrt(29));
    });
    it("calculates angle", () => {
      expect(v1.angle(v2).toFixed(6)).toEqual("6.982497");
    });
  });
});
