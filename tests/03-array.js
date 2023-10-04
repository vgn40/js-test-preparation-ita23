function testArray() {
    describe('03-array - returnEvenNumbers', () => {
        it('should return even numbers from 2 to 20', () => {
            const expected = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
            const result = returnEvenNumbers();
            expect(result).toEqual(expected);
        });
    });

    describe('03-array - squareArray', () => {
        it('should return an array with the square of each number', () => {
            expect(squareArray([1, 2, 3])).toEqual([1, 4, 9]);
            expect(squareArray([-1, -2, 3])).toEqual([1, 4, 9]);
        });

        it('should return an empty array when given an empty array', () => {
            expect(squareArray([])).toEqual([]);
        });
    });

    describe('03-array - findMax', () => {
        it('should return the maximum number in an array', () => {
            expect(findMax([1, 2, 3])).toBe(3);
            expect(findMax([-1, -2, 3])).toBe(3);
        });

        it('should handle arrays with a single element', () => {
            expect(findMax([42])).toBe(42);
        });

        it('should throw an error for an empty array', () => {
            expect(() => findMax([])).toThrow(new Error('Array cannot be empty'));
        });
    });
}