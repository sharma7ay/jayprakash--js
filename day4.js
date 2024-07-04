// //callBack Function
// // getSomething(function(){

// // })

// const fruit = ["mango","Apple","Orange"]

// fruit.forEach(function(fruit){
//     console.log(fruit)
// })

// const nums = [1,2,3,4,5]
// const square = []
// nums.forEach(function(nums){
//     square.push(nums*nums)
// })
// console.log(square)

// const data = [
//     {
//         firstName : "Jay",
//         lastName : "Sharma",
//         address : "Birgunj"
//     },
//     {
//         firstName : "Eli",
//         lastName : "tamang",
//         address : "Dharan"
//     },
//     {
//         firstName : "Sanchit",
//         lastName : "Subedi",
//         address : "Ithari"
//     }
// ]

// const jp = data.map((object)=>{
//     return {
//         ...object,
//         fullName : object.firstName + " " + object.lastName
//     }
// })
// console.log(jp)
// const result = data.map((object)=>{
//     return {
//         hello : object.firstName + " " + object.lastName
//     }
// })
// console.log(result)

// const numbers = [1,2,3,4,5]

// const result = numbers.map((object)=>{
//     return {
//         text : 'A',
//         number : object
//     }
// })
// console.log(result)


// wap to print firstName + lastName --> Jay Sharma using foreach

// data.forEach(function(object){
//     console.log(object.firstName +" "+ object.lastName)
// })

// const nums2 = [2,4,6,8]
// const squared = nums2.map((num)=>{
//     return num * num
// })
// console.log(nums2)
// console.log(squared)




// nums.map(function(fruit){

// })

// const numberData = [1,2,3,4,5,6,7,8,9,10]
// const oddNumbers = numberData.filter((number)=>{
//     return number%2 !== 0
// })
// console.log(oddNumbers)

//output ---> [6,7,8,9,10]

// const leftNumber = numberData.filter((number)=>{
//     return number > 5
// })
// console.log(leftNumber)

// books = [
//     {
//         title : "You can win",
//         author : 'shiv khera',
//         publishedAt : 2001
//     },
//     {
//         title : "Think like a monk",
//         author : 'Jay shetty',
//         publishedAt : 2022
//     },
//     {
//         title : "Cashflow quadrant",
//         author : 'Robert T. Kiyosaki',
//         publishedAt : 1909
//     },
//     {
//         title : "You can win2",
//         author : 'shiv khera',
//         publishedAt : 1990
//     },
//     {
//         title : "Think like a monk2",
//         author : 'Jay shetty',
//         publishedAt : 1999
//     },
//     {
//         title : "Cashflow quadrant2",
//         author : 'Robert T. Kiyosaki',
//         publishedAt : 2010
//     }
// ]

// const leftNumber = books.filter((number)=>{
//     return number.publishedAt > 2000
// })
// console.log(leftNumber)


// const files = ["index.html","app.js","app.java","style.css","test.js"]

// const jsExtention = files.filter((jp)=>{
//     return jp.includes(".js") // also endsWith
// })
// console.log(jsExtention)

// const lastTask = [1,2,null,undefined,"Jay","haha","hehe"]
// const numberName = lastTask.filter((jp)=>{
//     return jp !== null && jp !== undefined
// })
// console.log(numberName)



const data = [
    {
        name : "Manish",
        marks : 800,
        status : "pass"
    },
    {
        name : "Anish",
        marks : 500,
        status : "fail"
    },
    {
        name : "Pranjal",
        marks : 900,
        status : "pass"
    },
    {
        name : "Bob",
        marks : 100,
        status : "fail"
    },
    {
        name : "Hari",
        marks : 550,
        status : "fail"
    },
    {
        name : "Shyam",
        marks : 600,
        status : "pass"
    },
    {
        name : "Laxman",
        marks : 300,
        status : "fail"
    }
]

const lastTask = data.filter((jay)=>{
    return jay.marks > 500 && jay.status == "pass" && jay.name.endsWith("sh")
})
console.log(lastTask)