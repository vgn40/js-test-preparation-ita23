function testObjects() {
    describe('05-objects - createBook', () => {
        it("should return an object with properties: title, author, and year", function() {
            const myBook = createBook();
            expect(myBook).toEqual(jasmine.objectContaining({
                title: jasmine.any(String),
                author: jasmine.any(String),
                year: jasmine.any(Number)
            }));
        });
    });

    describe('05-objects - findBookByAuthor', () => {
        it("should return the correct book object by author if found", function() {
            const books = [
                {title: "Sample", author: "John Doe", year: 2020},
                {title: "Here I am", author: "Peter Hansen", year: 1987}
            ];
            const result = findBookByAuthor(books, "John Doe");
            expect(result).toEqual({title: "Sample", author: "John Doe", year: 2020});
        });
    });

    describe('05-objects - getOlderBooks', () => {
        it("should return all books published before a given year", function() {
            const books = [
                {title: "A", year: 1990},
                {title: "B", year: 2022}
            ];
            const oldBooks = getOlderBooks(books, 2000);
            expect(oldBooks).toEqual([{title: "A", year: 1990}]);
        });

        it("should return an empty array if no books are found published before a given year", function() {
            const books = [
                {title: "A", year: 2010},
                {title: "B", year: 2022}
            ];
            const oldBooks = getOlderBooks(books, 2000);
            expect(oldBooks).toEqual([]);
        });
    });
}