function testLoopsConditionals() {
    describe("02-loops-conditional - getNextEven", function() {
        it("should return the next even number", () => {
            expect(getNextEven(3)).toBe(4);
        });

        it("should return the next even number if given an even number", () => {
            expect(getNextEven(8)).toBe(10);
        });

        it("should handle negative numbers", () => {
            expect(getNextEven(-3)).toBe(-2);
        });
    });

    describe("02-loops-conditional - isMultipleOf", function() {
        it("should return true if n is a multiple of m", () => {
            expect(isMultipleOf(10, 2)).toBeTrue();
        });

        it("should return false if n is not a multiple of m", () => {
            expect(isMultipleOf(10, 3)).toBeFalse();
        });

        it("should handle negative numbers", () => {
            expect(isMultipleOf(-10, 2)).toBeTrue();
        });
    });

    describe("02-loops-conditional - reverseString", function() {
        it("should return the reversed string", () => {
            expect(reverseString("hello")).toBe("olleh");
        });

        it("should return an empty string if given an empty string", () => {
            expect(reverseString("")).toBe("");
        });

        it("should handle single characters", () => {
            expect(reverseString("a")).toBe("a");
        });
    });
}