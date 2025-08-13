// section 02 복습 - 도서 관리 프로그램 업그레이드
// 추가 기능 1. 책 추가 시 입력 값이 비어있는 경우 경고 메세지 출력
// 추가 기능 2. 책 목록보기 시 비동기 처리
// 추가 기능 3. 책 대여하기
// 추가 기능 4. 책 반납하기


const library = [];

// 기능 1. 책 추가하기
function addBook({ title, author, publisher }) {

    if (!title || !author || !publisher) {
        console.log("모든 정보를 입력해주세요.");
        return;
    };

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
        publisher: publisher,
        isBorrowed: false,
    };

    library.push(book);
};

addBook({ title: "채식주의자", author: "한강", publisher: "창비" });
addBook({ title: "데미안", author: "헤르만 헤세", publisher: "민음사" });
console.log(library);

// 기능 2. 책 목록보기
async function listBooks() {

    return new Promise((resolve) => {
        setTimeout(() => {
            library.forEach((book, i) => {
                console.log(`${i + 1}. ${book.title} (${book.author}) - ${book.isBorrowed ? "대여 중" : "대여 가능"}`);
            });
            resolve(library);
        }, 500);
    });
}

listBooks();

// 기능 3. 책 검색하기
function searchBook(word) {

    if (!word) {
        console.log("검색할 단어를 입력해주세요.");
        return;
    };

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
function deleteBook({ title, author }) {

    if (!title || !author) {
        console.log("모든 정보를 입력해주세요.");
        return;
    };

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
    };
}

// deleteBook({ title: "채식주의자", author: "한강" });

// 기능 5. 책 대여하기
function borrowBook({ title, author }) {

    if (!title || !author) {
        console.log("모든 정보를 입력해주세요.");
        return;
    };

    const book = library.find((book) => {
        return book.title === title && book.author === author
    });

    if (!book) {
        console.log(`${title} 를 찾을 수 없습니다.`);
        return;
    };

    if (book.isBorrowed) {
        console.log(`${title} 은 이미 대여중입니다.`);
        return;
    };

    book.isBorrowed = true;
    book.borrowedAt = new Date();
    console.log(`${title} 을 대여했습니다.`);
}

borrowBook({ title: "채식주의자", author: "한강" });

// 기능 5. 책 반납하기
function returnBook({title, author}) {

    if (!title || !author) {
        console.log("모든 정보를 입력해주세요.");
        return;
    };

    const book = library.find((book) => {
        return book.title === title && book.author === author
    });

    if (!book) {
        console.log(`${title} 를 찾을 수 없습니다.`);
        return;
    };

    if (!book.isBorrowed) {
        console.log(`${title} 은 대여중이 아닙니다.`);
        return;
    };

    book.isBorrowed = false;
    delete book.borrowedAt;
    console.log(`${title} 을 반납했습니다.`);
}

returnBook({ title: "채식주의자", author: "한강" });