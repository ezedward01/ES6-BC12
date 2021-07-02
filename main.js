/**
 * Khai báo biến
 * - Khai báo biến với let và const
 * - So sánh giữa let, const, var
 * - Nên dùng cái nào trong trường hợp nào
 * + var: có hoisting, fuction scope
 * + let, const: không có hoisting, block scope
 * + const: bắt buộc phải gán value khi khai báo và không thể re-assign giá trị
 * - Nên dùng cái nào trong trường hợp nào?
 * + var: khi browser không hổ trợ let, const (IE)
 * + let: khi cần re-assign giá trị
 * + const: khi không cần re-assign giá trị 
 */

//var
// console.log(fullName); //work (undefined)
// var fullName = 'Chu Ho Tay'
// console.log(fullName);


// function showErrowWithVar(){
//     var isError = true;
//     var error = '';

//     if (isError){
//         var error = 'Something went wrong!';
//         console.log(error);
//     }
//     console.log(error);
// }
// showErrowWithVar();

// let
// let age = 18;
// console.log(age);
// let age = 20; toang//age has been declared

// function showErrowWithVar(){
//     let isError = true;
//     let error = '';

//     if (isError){
//         let error = 'Something went wrong!';
//         console.log(error);
//     }
//     console.log(error);
// }

// showErrowWithVar();

//const
// console.log(birthYear); toang (không có hoisting)
// const birthYear; //toang (phải có giá trị khi khai báo)
// const birthYear = 2000;

/**
 * Function
 * - Arrow fuction
 * - So sánh declaratiion vs expresstion(normal fuction) vss arrow Fuction(cú pháp, con trỏ this)
 */


//Expression fuction
// const calcAgeNormal = function(birthYear){
//     console.log(this)
//     return 2021 - birthYear;

// }
// calcAgeNormal()
//Arrow fuction
// - Không định nghĩa bối cảnh thực thị (this) của riêng nó
// - Không quan tâm nó được thực thi trong ngữ cảnh nào, giá trị this của arrow fuc = this của outer fuction
// - Nếu nó không có outer function thì this = global object(window)
// - Không dùng arrow function để làm constructor func và làm method của object
// const calcAgeArrow = (birthYear) => {
//     console.log(this);
//     console.log(2021 - birthYear);
// }

// calcAgeArrow(2000);

// const calcAgeArrowShort = (birthYear) => 2021 - birthYear;

// const calAgeOneParam = birthYear => 2021 - birthYear;

// const Student = () => {

// }

// var tay = new Student(); //err: Student is not a constructor

// var birthYear = 1008
const student = {
    name: 'Tay',
    birthYear: 2000,
    
    calcAgeNormal: function(){
        console.log(this)
        console.log(2021-this.birthYear)
        // const _this = this;
        // const checkAgeNormal = function(){
        //     console.log('checkAgeNormal',this.birthYear)
        //     if (2021 - this.birthYear >= 18){
        //         console.log('You are old enough');
        //     } else {
        //         console.log('You are not old enough')
        //     }
        // }.bind(student)
        // checkAgeNormal()

        const checkAgeArrow = () => {
            console.log('checkAgeNormal',this.birthYear)
            if (2021 - this.birthYear >= 18){
                console.log('You are old enough');
            } else {
                console.log('You are not old enough')
            }
        }
        checkAgeArrowl()
    },
    //Không dùng arrow func lên phương thức của obj
    calcAgeArrow: () => {
        console.log(this);
        console.log(2021 - this.birthYear);
    }
}
// student.calcAgeNormal();
student.calcAgeArrow();

/**
 * Default Parameter
 */
const withoutDefaultParam = (typeofUser) => {
    if (typeofUser ==='user'){
        console.log('Redirect to user page');
    } else {
        console.log('Redirect to admin page')
    }
}
// withoutDefaultParam('admin')

const withDefaultParam = (typeofUser = 'user') =>{
    if (typeofUser ==='user'){
        console.log('Redirect to user page');
    } else {
        console.log('Redirect to admin page')
    }
}

withDefaultParam();

/**
 * Destructuring
 * - Destructuring Array
 * - Destructuring Object
 */

// With Array
// Without Destructuring
// const students = ['Tay', 'Hoang', 'Huy'];
// // const tay = students[0];
// // console.log(tay)
// const [tay, hoang, huy] = students; //đặt vào 3 biến tương ứng với 3 vị trí
// console.log(tay, huy)
// console.log(tay, hoang, huy);

// Object
//Without Destructuring
// const _student = {
//     fullName: 'tay',
//     age: 10,
//     class: 'BC12'
// }
// const fullName = _student.fullName;
// const age = _student['age'];
// console.log(fullName, age)

// With Destructuring
// const _student = {
//     fullname: 'tay',
//     age: 10,
//     class: 'BC12'
// }
// const { fullname, class: className } = _student;
// console.log(fullname, className)

/**
 * Template string
 */
const fullName = 'Huy Hoang'
const str = 'My name is' + fullName;
const templateStr = `My name is ${fullName}`

/**
 * Enhanced Object Literals (shorthand syntax)
 */
const age = 18;
const person = {
    fullName: 'Chu Ho Guom',
    age,

    clacAge(){
        return 2021 - this.age;
    }
}

console.log(person);
