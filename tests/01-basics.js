function testBasics() {
    describe('01-basics - add', () => {
        it("should add two positive numbers correctly", function() {
            expect(add(2, 3)).toBe(5);
        });

        it("should return 0 when adding a negative number and its absolute value", function() {
            expect(add(-1, 1)).toBe(0);
        });

        it("should handle adding two negative numbers", function() {
            expect(add(-2, -3)).toBe(-5);
        });

        it("should handle zero values", function() {
            expect(add(0, 3)).toBe(3);
            expect(add(2, 0)).toBe(2);
            expect(add(0, 0)).toBe(0);
        });
    });

    describe('01-basics - determineLength', () => {
        it("should determine the length of a string correctly", function() {
            expect(determineLength("Hello")).toBe(5);
            expect(determineLength("AB")).toBe(2);
        });

        it("should return 0 for an empty string", function() {
            expect(determineLength("")).toBe(0);
        });

        it("should handle spaces in strings", function() {
            expect(determineLength("Hello World")).toBe(11);
        });
    });

    describe('01-basics - concatenateWithDelimiter', () => {
        it("should concatenate two strings with a specified delimiter", function() {
            expect(concatenateWithDelimiter("Hello", "World", ", ")).toBe("Hello, World");
            expect(concatenateWithDelimiter("A", "B", "-")).toBe("A-B");
        });

        it("should handle empty delimiters", function() {
            expect(concatenateWithDelimiter("Hello", "World", "")).toBe("HelloWorld");
        });

        it("should handle empty strings", function() {
            expect(concatenateWithDelimiter("", "World", ", ")).toBe(", World");
            expect(concatenateWithDelimiter("Hello", "", ", ")).toBe("Hello, ");
            expect(concatenateWithDelimiter("", "", ", ")).toBe(", ");
        });
    });


}
