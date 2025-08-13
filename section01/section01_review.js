// section 01 복습 - 도서 관리 프로그램
// 기능 1. 책 추가하기
// 기능 2. 책 목록보기
// 기능 3. 책 검색하기
// 기능 4. 책 삭제하기

const library = [];

// 기능 1. 책 추가하기
function addBook(title, author, publisher) {
    const exists = library.find(
        (book) => {
            return book.title === title && book.author === author
        }
    );

    if (exists) {
        console.log(`${title} 은 이미 추가되어있는 책입니다.`);
        return;
    };
    
    const book = {
        title: title,
        author: author,
        publisher: publisher
    };
    library.push(book);
};

addBook("채식주의자", "한강", "창비");
addBook("데미안", "헤르만 헤세", "민음사");
console.log(library);

// 기능 2. 책 목록보기
function listBooks() {
    library.forEach((book, index) => {
        console.log(book);
    })
}

listBooks();

// 기능 3. 책 검색하기
function searchBook(word) {
    const exists = library.filter(
        (book) => {
            return book.title === word || book.author === word || book.publisher === word
        }
    );

    if (exists.length > 0) {
        console.log(exists);
        return;
    } else {
        console.log(`${word} 를 찾을 수 없습니다.`);
        return;
    };
}

searchBook("창비");

// 기능 4. 책 삭제하기
function deleteBook(title, author) {
    const index = library.findIndex(
        (book) => {
            return book.title === title && book.author === author
        }
    );

    if (index === -1) {
        console.log(`${title} 를 찾을 수 없습니다.`);
    } else {
        library.splice(index, 1);
        console.log(`${title} 를 삭제하였습니다.`)
    }
}

deleteBook("채식주의자", "한강");