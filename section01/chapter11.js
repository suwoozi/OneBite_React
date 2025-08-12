// 함수 선언
// 선언 후 호출해야 실행됨
// 함수호출 후 () 필수

function greeting () {
    console.log("안녕하세요!");
}

console.log("호출 전");
greeting();
console.log("호출 후");

function getArea (width, height) { // (매개변수)

    function another() { // 중첩함수
        console.log("another");
    }

    another();

    let area = width * height;

    return area;
}

let area1 = getArea(15, 20); // (인수)
console.log(area1);

// 호이스팅 -> 끌어올리다.
// 함수 호출 후 함수선언이 아래있어도 실행가능