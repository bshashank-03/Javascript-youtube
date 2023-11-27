const coding = ["CPP", "Python", "Ruby", "Swift"]

// coding.forEach(function (item) {
// console.log(item);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )