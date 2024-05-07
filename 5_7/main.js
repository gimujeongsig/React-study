const 함수 = function() {
    console.log("함수 내부 코드입니다...")
    console.log("함수 내부 코드입니다...")
    console.log("함수 내부 코드입니다...")
}
함수();
console.log(typeof(함수()));
console.log(함수());

//선언적 함수
function 함수1() {
    console.log("함수 1 입니다...");
}
함수1();
let a = prompt('string 문자열을 넣으면');
console.log(a);

//매개변수와 리턴값을 가지는 함수
function 함수2(매개변수) {
    console.log(매개변수);
    return 매개변수;
}

function f(x) {
    return x * x
}
console.log(f(3));

//함수 예시 최솟값을 구하는 함수
function min(array) {
    let output = array[0];
    for (const item of array){
        if (output > item) {
            output = item;
        }
    }
    return output
}

const testArray = [55,32,11,103,275,330,9];
console.log(`${testArray} 중에서`);
console.log(`최솟값은 = ${min(testArray)} 입니다.`);

function sample(...items) {
    console.log(items);
}
sample(1,2);
sample(3,4,5,6,7);

function sample2 (a,b...c){
    console.log(sample2(a,b,c));
}

console.log(Array.isArray(testArray));

//
function prt (...items) {
    console.log(items);
}

const array = [1,2,3,4];

console.log("전개 연산자를 사용하지 않을 경우");
prt(array);
console.log("전개 연산자를 사용할 경우");
prt(...array);

//기본 매개변수
// 함수의 매개변수로 항상 값을 넣는것이 귀찮아  

function earning (name, wage = 5000, hours=40) {
    console.log(`${name} 님의 정보`);
    console.log(`${name} 님의 급여 ${wage}`);
    console.log(`${name} 님의 근로시간 ${hours}`);
}
earning('서정훈');
earning('서정훈', 10000);
earning('서정훈', 10000, 50);

function callThreeTimes (callback) {
    for (let i = 0; i <3; i++) {
        callback(i)
    }
}
function print1 (i) {
    console.log(`${i}번째 함수 호출`);
}
callThreeTimes(print1);

function callThreeTimes2 () {
    function print2 (i) {
        console.log(`${i}번째 함수 호출`);
    }
    for (let i = 0; i <3; i++) {
        print2(i);
    }
}
callThreeTimes2();

//익명함수 
function callThreeTimes3 (callback) {
    for(let i =0;i <3;i++) {
        callback(i);
    }
}
callThreeTimes3(function(i) {
    console.log(`${i}번째 함수 호출`);
})

//
const numbers = [11, 33, 232, 45, 9];

numbers.forEach(function (value, index, array) {
    console.log(`${index}번째 요소 : ${value}`);
})

//map() 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 만드는 함수

let numbers1 = [273,11, 103, 32,12];
numbers1 = numbers1.map(function (value, index, array) {
    return value * value
});

numbers1.forEach(console.log);

// filter() 메소드
// 배열이 가지고 있는 함수(Array 자료형의 내장 함수)
// filter() 메소드는 콜백 함수에서 리턴하는 값이 ture 것들만 모아서 새로운 배열 만드는것

const numbers2 = [0,1,2,3,4,5];
const evenNumbers = numbers2.filter(function (value) {
    return value % 2 === 0
});
console.log(`원래 배열${numbers2}`);
console.log(`짝수 배열${evenNumbers2}`);

// 화살표 함수
// 앞에서 살펴본 map filter 함수처럼 단순한 형태의 콜백 함수를 쉽게 입력하기 위해서
// 화살표 함수라는 생성 방법이 있다.
// 화살표 함수는 function 키워드 대신 화살표(=>)사용한다.
// (매개변수) => {}
numbers2.map((value) => value * value);

//메소드 체이닝
// map, filter, foreach와 같은 함수를 연속적으로 사용하고 싶을때
// 화살표 함수에서 응용해서 쓴다

let = numbers3 [0,1,2,3,4,5,6,7,8,9];

numbers3
    .filter((value) => value % 2 === 0)
    .map((value) => value * value)
    .forEach((value) => {
        console.log(value);
    });