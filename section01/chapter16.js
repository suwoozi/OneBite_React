// 1. 상수 객체
const animal = {
    type: "강아지",
    name: "길동",
    color: "black",
};

animal.age = 1; // 추가
animal.name = "고길동" // 수정
delete animal.color; // 삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    // 메서드
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();