// 기본적인 함수 선언과 호출
function funName() {
    console.log("함수 실행");
}
funName();

function returnFunc() {
    console.log("함수가 실행되었음");
    return 123;
}
const a = returnFunc();
console.log(a);

//함수를 만드는 목적
//1. 코드의 재사용
//2. 코드를 깔끔하게 보이게

function sum(a,b){
    return a+b;
}
const number = sum(1,2);
const number2 = sum(3,4);
const number3 = sum(5,6);

// 기명 함수
function hello() {
    console.log("hello");
}
hello();

//익명 함수
const world = function () {
    console.log("hihi");
}
world();

//함수의 재사용 예시
function handler() {
    console.log("clicked!")
}

document.body.addEventListener('click',handler);
handler();
handler();
document.body.addEventListener('click',function(){

})

//메소드
//객체 데이터
const object1 = {
    name : "jeonhun",
    age : 85,
    getName: function() {
        return this.name
        // return object1.name
    }
}
const hisName = object1.getName();
console.log(hisName);
console.log(object.getName());

//Js 조건문 1.if문 2.switch문
const isShow = true;
const cheked = false;

if (isShow) { //실행 됨
    console.log("Show!");
} else {
    console.log("Hide?");
}
if (cheked) {
    console.log("Checked");
}
console.log(ABC);

// 스위치
// switch (condition) {
//     case value1:
//         state1;
//         break;
//     case value2:
//         state2;
//         break;
//     default:
//         state3:
// }
function caseInSwitch(val) {
    let answer = "DD";
    switch (val) {
        case 1:
            answer = "alpha"
            break;
        case 2:
            answer = "bravo"
            break;
    }
    return answer;
}
console.log(caseInSwitch(3));

// function switch0fstuff(val) {
//     let answer = "";
//     switch (val) {
//         case "a":
//             answer = "apple";
//             break;
//         case "b":
//             answer = "bird";
//             break;
//         default:
//             answer = "stuff";
//     }
//     return answer;
// }
// console.log(switch0fstuff(1));
// console.log(switch0fstuff("a"));

// function size(val) {
//     let answer = "";
//     switch (val) {
//         case 1:
//         case 2:
//         case 3:
//             answer = "LOW";
//             break;
//     }
// }

//스위치를 사용하는 것이 효과적인 경우
// 옵션이 많이 경우에 if else 대신 switch

function caseInSwitch(val) {
    let answer = "";
    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 7) {
        answer = "byebye"
    }
    return answer;
}
function caseInSwitch(val) {
    let answer = "";
    switch(val) {
        case "bob":
            answer = "Maley";
            break;
        case 42:
            answer = "The Answer";
        case 7:
            answer = "byebye";
            break;
    }
}

function caseInSwitch2(val) {
    return answer;
}
//반복문
// for, for in, for of, forEach, while, do while ....
for(let i=0;i<10;i++) {
    console.log(i); //01234556789
}
// for in문
// object 사용할 수 있는 반복문
// 배열에도 사용할 수 있지만, 추천하지는 않는다.

const obj = {
    name : '이름',
    age : '나이'
}

for(const key in obj) {
    console.log(key);
    console.log(obj.name, obj.age);
    console.log('key값: ${key}');
    console.log('value값: ${obj[key]}');
}

// for of문
// 반복 가능한 객체(Array, Map, Set, String, TypedArray,Arguments)
// 보통은 Array사용한다

const array = ['1번','2번','3번'];

for(const element of array) {
    console.log(element);
    console.log(array);
}

// foreach for of 비슷함
array.forEach((element)=>{
    console.log(element);
})

// while
while(condition) {
    // condition이 참이면 실행
}
// do while
do {
    //거짓이더라도 do 코드는 무조건 한번 실행
} while(condition)