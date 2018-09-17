"use strict";

describe("Generator", function() {
  describe(".generateNumbers", function() {
    it("Generates six standard numbers", function() {
      spyOn(generator, generateNumbers()).and.returnValue([1, 2, 3, 4, 5, 6]);
      expect(generator.generateNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
