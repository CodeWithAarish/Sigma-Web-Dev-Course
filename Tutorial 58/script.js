function nice(name) {
    console.log("Hey " + name + " you are nice");
    console.log("Hey " + name + " you are good");
    console.log("Hey " + name + " your t-shirt is nice");
    console.log("Hey " + name + " your course is also nice");
}

function sum(a, b, c = 1) {
    console.log(a, b, c)
    return a + b + c
}


result1 = sum(1)
result2 = sum(12, 2)
result3 = sum(4, 2)

console.log("sum of these number is: ", result1)
console.log("sum of these number is: ", result2)
console.log("sum of these number is: ", result3)

const func1 = (x)=>{
    console.log("I am an arrow function", x);
}

func1(34)
func1(99)
func1(33)