// // // const isRaining = true

// // // // if(isRaining){
// // // //     console.log("Carry Umbrella")
// // // // }else{
// // // //     console.log("Don't carry umbrella")
// // // // }
// // // // //ternary operater

// // // // const result = isRaining ? "Carry Umbrella" : "Don't carry umbrella"
// // // // console.log(result)

// // // //Sort-curcuit
// // // isRaining && console.log("Carry Unbrella")

// // // const age = 21
// // // if(age > 18){
// // //     console.log("You can cast vote")
// // // }else{
// // //     console.log("You cannot cast vote")
// // // }


// // // const age = "21"
// // // if(age === 21){
// // //     console.log("Age equals to 21")
// // // }else{
// // //     console.log("Age don't equal to 21")
// // // }


// // // const temperature = 27
// // // if(temperature > 30){
// // //     consile.log("Hot")
// // // }else if(tempearture > 20){
// // //     console.log("Moderate")
// // // }else{
// // //     console.log("Cool")
// // // }

// // const grade = 85
// // // Grade 
// // // 80-90 --> console.log("A")
// // // 70-80 --> console.log("B+")
// // // 60-70 --> console.log("B")
// // // 0-60 --> console.log("Fail")


// // if(grade > 80 && grade < 90){
// //     console.log("A")
// // }else if(grade > 70 && grade < 80){
// //     console.log("B+")
// // }else if(grade < 60 && grade > 70){
// //     console.log("B")
// // }else{
// //     console.log("Fail")
// // }

// // const days = ['Sunday','Monday','wednesday','Thrusday','Friday','Saturday']
// // for(var i = 0; i < days.length;i++){
// //     console.log(days[i])
// // }

// // for(let abc of days){
// //     console.log(abc)
// // }

// const data = {
//     name : 'jay',
//     age : 22,
//     address : 'Dharan'
// }
// for(let key in data){
//     console.log(key + " is " + data[key])
// }

//Function

function add(a,b){
    console.log(a + b)
}
add(1,2)



// named regular function
// const add = function(a,b){
//     console.log(a + b)
// }
// const add = function(a,b){
//     console.log(a + b)
// }
// ()=>{
//     console.log("Hello World")
// }


// const number = [1,2,3,4,5]

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// const sum = sumArray(numbers);
// console.log("The sum of the numbers is:", sum);

// const numbers = [1, 2, 3, 4, 5];

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// const sum = sumArray(numbers);
// console.log("The sum of the numbers is:", sum);

const info = {
    status: 200,
    message: "Code found",
    code: [
        {
            _id: "668510da18d90581711b6292",
            text: "test\n",
            userId: "f959757",
            title: "test",
            ipAddress: "49.244.110.12",
            createdAt: "2024-07-03T08:50:34.704Z"
           
        }
    ]
}


// function logUserInfo(data) {
//     if (data && data.code && data.code.length > 0) {
//         const { userId, title, ipAddress } = data.code[0];
//         console.log("User ID:", userId);
//         console.log("Title:", title);
//         console.log("IP Address:", ipAddress);
//     } else {
//         console.log("No data available");
//     }
// }

// logUserInfo(data);


function haha(info){
    console.log(info.code[0].userId)
    console.log(info.code[0].title)
    console.log(info.code[0].ipAddress)
}
haha(info)