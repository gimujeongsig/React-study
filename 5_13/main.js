setTimeout(() =>{
    console.log('1초마다 실행됩니다.')
}, i * 1000);

let count = 0;
setInterval(() =>{
    console.log(`1초마다 실행됩니다.(${count}번째 시행)`);
    count++
}, 1 * 1000);

let id
let count2 = 0
id = setInterval(() => {
    console.log(`1초마다 실행됩니다2(${count2}번째)`);
    count2++
}, 1 * 1000);
console.log(`다이머 id는 ${id}`);
setTimeout(() => {
    console.log('타이머를 종료합니다.');
    clearInterval(id);
},5*1000);

let pi = 3.14
console.log(`main.js의 pi는${pi}`);

//엄격 모드
'use strict'
data = 10;
console.log(data);

//익명 함수
let 익명_함수
익명_함수 = function() {
    console.log('1번째 익명 함수 입니다.')
}
익명_함수 = function() {
    console.log('2번째 익명 함수 입니다.')
}
익명_함수();



선언적함수();
function 선언적함수 () {
    console.log('1번째 선언적함수 입니다.')
}
function 선언적함수 () {
    console.log('2번째 선언적함수 입니다.')
}



함수 = function() {
    console.log('익명 함수 입니다.');
}
function 함수 () {
    console.log('선언적 함수 입니다');
}
함수();

console.log(typeof([]));
const array = ['사과','바나나','감'];

const product = {
    제품명 : "건조 망고",
    유형 : "건조식품",
    성분 : "망고, 설탕, 색소",
    원산지 : "필리핀",
    기능 : function (맛있음) {}
}

const pet = {
    name : "코코",
    eat : function (food) {
        alert(this.name+ '은/는'+food+'을/를 먹습니다.')
    }
}

pet.eat(밥);

pet.나이 = '2';
pet.종 = '고양이';
console.log(JSON.stringify(pet, null, 2));

delete pet.나이;
console.log(JSON.stringify(pet, null, 2));