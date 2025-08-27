// {} in object its object declaration... but with function, if else etc.. {} is scope

if(true){
    let a = 10
    const b = 10
    var c = 30
}
// we cant access a,b out of the scope/if but c can
// block scope -> under {} global scope -> outside 

function one(){
    const userName = "Aakash"

    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website);
    //two()
}
one()

// we can make function inside a function but cant access a function outside the function block scope

if(true){
    const userName = "Aakash"
    if(userName === "Aakash"){
        const website = " youtube"
        console.log(userName + website);
        
    }
    // console.log(website);
}
// console.log(userName);
// above is an error example that it cant show output outside the scope

//***********************INTERESTING***************************//

function addOne(num){ // function
    return num + 1
}
addOne()

const addTwo = function(num){ // Expression functiom
    return num + 2
}
// the addOne can be called even above the declaration of addOne
// but we cant do with the addTwo