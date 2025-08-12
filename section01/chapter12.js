// 1. 함수 표현식
// 호이스팅 불가능

function funcA() {
    console.log("funcA");
}

let varA = funcA;
console.log(varA);

let varB = function funcB() { // 익명함수
    console.log("funcB");
}

varB();

// 2. 화살표 함수

let varC = (value) => {
    console.log(value);
    return value + 1;
}
console.log(varC(10));