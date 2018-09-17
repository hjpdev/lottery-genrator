import("../src/Generator.js");
("use strict");

describe("Generator", function() {
  beforeEach(function() {
    generator = new Generator();
  });

  describe(".generateNumbers()", function() {
    it("generates six standard numbers", function() {
      expect(generator.generateNumbers().length == 6).toBe(true);
    });

    it("generates numbers", function() {
      expect(!isNaN(generator.generateNumbers()[0])).toBe(true);
    });

    it("generates numbers", function() {
      expect(!isNaN(generator.generateNumbers()[1])).toBe(true);
    });

    it("generates numbers", function() {
      expect(!isNaN(generator.generateNumbers()[2])).toBe(true);
    });

    it("generates numbers", function() {
      expect(!isNaN(generator.generateNumbers()[3])).toBe(true);
    });

    it("generates numbers", function() {
      expect(!isNaN(generator.generateNumbers()[4])).toBe(true);
    });

    it("generates numbers", function() {
      expect(!isNaN(generator.generateNumbers()[5])).toBe(true);
    });

    it("generates numbers below 60", function() {
      expect(generator.generateNumbers()[0] < 60).toBe(true);
    });

    it("generates numbers below 60", function() {
      expect(generator.generateNumbers()[1] < 60).toBe(true);
    });

    it("generates numbers below 60", function() {
      expect(generator.generateNumbers()[2] < 60).toBe(true);
    });

    it("generates numbers below 60", function() {
      expect(generator.generateNumbers()[3] < 60).toBe(true);
    });

    it("generates numbers below 60", function() {
      expect(generator.generateNumbers()[4] < 60).toBe(true);
    });

    it("generates numbers below 60", function() {
      expect(generator.generateNumbers()[5] < 60).toBe(true);
    });
  });

  describe(".generatePowerBall()", function() {
    it("generates one powerball bewteen 1-59", function() {
      expect(generator.generatePowerBall() < 60).toBe(true);
    });
  });
});
