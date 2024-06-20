var globalVar = "I am a global variable!";

function scopeTest() {
    var localVar = "I am a local variable!";
    console.log(globalVar);
    console.log(localVar);
}

scopeTest();

console.log(localVar); // This will cause an error
