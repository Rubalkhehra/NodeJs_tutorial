const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("This is resolved!!"),
    5000);
});
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("This is resolved!!"),
    10000);
});
async function handlePromise(){
    console.log("hello world!");
    const val = await p1;
    console.log("hello 1");
    console.log(val);

    const val1= await p2;
    console.log("hello 2");
    console.log(val);
};

function printSomething(){
    console.log("I am called after handlePromise function that i am later in call stack");
}

handlePromise();
printSomething();