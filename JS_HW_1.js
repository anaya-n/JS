// let item_1 = 5;
// let item_2 = 3;
// let item_3 = item_1 + item_2;
// let item_4 = " Yolochka";
// let item_5 = item_3;
// let item_6 = 15;
// let item_6_type = Number(item_6);
// let item_7 = String(item_6);
// let item_7_type = String(item_7);

// console.log(item_1);
// console.log(item_2);
// console.log(item_3);
// console.log(item_4);
// console.log(item_3 + item_4);
// console.log(item_3*item_4);
// console.log('item_6 ==' , item_6, 'item_6_type ==', item_6, 'item_6_type ——', typeof item_6);
// console.log('item_7 ==', item_7, 'item_7_type ==', item_7, 'item_7_type ——', typeof item_7);


let age_1 = 10
let age_2 = 18
let age_3 = 60

// if (age_1 < age_2) {
//    console.log("You don't have access cause your age is " + age_1 + ". It's less than " + age_2) 
// } else if (age >= age_2 && age < age_3) {
//    console.log("Welcome !")
// } else if (age_1 > age_3) {
//     console.log("Keep calm and look Culture channel")
// } else {
//     console.log("Technical work".)
// }


//1*
// const checkAge = function(age) { 
// if (age < age_2) {
//     console.log("You don't have access cause your age is " + age + ". It's less than " + age_2) 
//  } else if (age >= age_2 && age < age_3) {
//     console.log("Welcome !")
//  } else if (age > age_3) {
//      console.log("Keep calm and look Culture channel")
//  } else {
//      console.log("Technical work")
//  }
// }

// checkAge(40)


//2*

// const checkAge = function(age) {
//     if(typeof age == 'number'){

//     if (age < age_2) {
//         console.log("You don't have access cause your age is " + age + ". It's less than " + age_2) 
//      } else if (age >= age_2 && age < age_3) {
//         console.log("Welcome !")
//      } else if (age > age_3) {
//          console.log("Keep calm and look Culture channel")
//      } else {
//          console.log("Technical work")
//      }
// } else {console.log('Not Integer Value')}
// }

// checkAge(18)
// checkAge('gfss')


//3*

const checkAge = function(age) {

    age = Number(age)
    console.log(age)
    if(!isNaN(age)){

    
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + ". It's less than " + age_2) 
     } else if (age >= age_2 && age < age_3) {
        console.log("Welcome !")
     } else if (age > age_3) {
         console.log("Keep calm and look Culture channel")
     } else {
         console.log("Technical work")
     }
} else {console.log('Not Integer Value')}
}

let agePrompt = prompt('Enter age')
checkAge(agePrompt)

// function checkAge(age) {
//     if (typeof(age) == 'Number') {
//         let input_age;
//         if (age < 18){
//             input_age = "You don't have access cause your age is " + input_age + ". It's less than ";
//         }
//         else if (age >= 18 && input_age < 60){
//             input_age = "Welcome !"
//         }
//         else if (age > 60){
//             input_age = "Keep calm and look Culture channel";
//         } else {
//             input_age = "Technical work";
//         }
//         return input_age 
//         let input_age_1 = checkAge(17)
//         console.log(input_age_1)
//         let input_age_2 = checkAge(18)
//         console.log(input_age_2)
//         let input_age_3 = checkAge(61)
//         console.log(input_age_3)

//         if (typeof(age) !=='Number') 
//         console.log("Error");
//     }
// }



    