// 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) *10;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
console.log(++num8) // 전위 연산 (해당 라인에서 바로 연산)
console.log(num8--) // 후위 연산 (해당 라인이 끝난 후 연산)

// 5. 논리 연산자
let or = true || false; // 둘 중 하나만 true 여도 true
let and = true && false; // 둘다 true 여야 true
let not = !true; // true인 경우 false

// 6. 비교 연산자
let comp1 = 1 === 2; // == 인 경우 자료형을 비교하지 못함, 값만 비교함
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
