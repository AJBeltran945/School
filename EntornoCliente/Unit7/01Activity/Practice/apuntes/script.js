function person1(callback){
    setTimeout(() =>{
        console.log("Persona 1: Juan")
        callback();
    },2000)
}

function person3(callback){
    setTimeout(() =>{
        console.log("Persona 3: David")
        callback();
    },3000)
}

function person2(callback){
    setTimeout(() =>{
        console.log("Persona 2: Pedro")
        callback();
    },1000)
}

document.getElementById("callbacks").addEventListener("click", () =>{
    person1(() =>{
        person2(() =>{
            person3(() => {
                setTimeout(() =>{
                    console.log("Estan todas las personas")
                },1000)
            })
        })
    })
})

// ---------------------------------------------------------------------------------------------

function walkTheDog(){
    return new Promise((resolve, reject) => {

        const possibility = Math.floor(Math.random() * 10 + 1)
        let isWalkingTheDog = true

        if (possibility <= 2){
            isWalkingTheDog = false
        }

        setTimeout(() =>{
            if (isWalkingTheDog){
                resolve("You walked the dog 🐕")
            }else{
                reject("You DIDN'T walked the dog 🐕")
            }
        }, 2000)
    })
}

function cleanTheKitchen(){
    return new Promise((resolve, reject) => {

        const possibility = Math.floor(Math.random() * 10 + 1)
        let isCleaningTheKitchen = true

        if (possibility <= 2){
            isCleaningTheKitchen = false
        }

        setTimeout(() =>{
            if (isCleaningTheKitchen){
                resolve("You cleaned the kitchen 🧹")
            }else{
                reject("You DIDN'T cleaned the kitchen 🧹")
            }
        }, 3000)
    })
}

function takeOutTheTrash(){
    return new Promise((resolve, reject) => {

        const possibility = Math.floor(Math.random() * 10 + 1)
        let isTakingOutTheTrash = true

        if (possibility <= 2){
            isTakingOutTheTrash = false
        }

        setTimeout(() =>{
            if (isTakingOutTheTrash){
                resolve("You took out the trash ♻️")
            }else{
                reject("You DIDN'T took out the trash ♻️")
            }
        }, 3000)
    })
}

document.getElementById("promises").addEventListener("click", () =>{
    walkTheDog().then(value => {console.log(value); return cleanTheKitchen()})
                .then(value => {console.log(value); return takeOutTheTrash()})
                .then(value => {console.log(value); return console.log("All the chores are done")})
                .catch(error => console.error(error))
})

// ---------------------------------------------------------------------------------------------

async function doChores(){

    try{

        const walkTheDogResult = await walkTheDog()
        console.log(walkTheDogResult)
        const cleanTheKitchenResult = await cleanTheKitchen()
        console.log(cleanTheKitchenResult)
        const takeOutTheTrashResult = await takeOutTheTrash()
        console.log(takeOutTheTrashResult)

        console.log("You did all the chores!!")

    } catch (e){
        console.error(e)
    }
}

document.getElementById("asycnAwait").addEventListener("click", () =>{
    doChores()
})

// ---------------------------------------------------------------------------------------------

const walkTheDogRe =
    new Promise((resolve, reject) => {

        const possibility = Math.floor(Math.random() * 10 + 1)
        let isWalkingTheDog = true

        if (possibility <= 2){
            isWalkingTheDog = false
        }

        setTimeout(() =>{
            if (isWalkingTheDog){
                resolve("You walked the dog 🐕")
            }else{
                reject("You DIDN'T walked the dog 🐕")
            }
        }, 2000)
    })


const cleanTheKitchenRe =
     new Promise((resolve, reject) => {

        const possibility = Math.floor(Math.random() * 10 + 1)
        let isCleaningTheKitchen = true

        if (possibility <= 2){
            isCleaningTheKitchen = false
        }

        setTimeout(() =>{
            if (isCleaningTheKitchen){
                resolve("You cleaned the kitchen 🧹")
            }else{
                reject("You DIDN'T cleaned the kitchen 🧹")
            }
        }, 3000)
    })


const takeOutTheTrashRe =
     new Promise((resolve, reject) => {

        const possibility = Math.floor(Math.random() * 10 + 1)
        let isTakingOutTheTrash = true

        if (possibility <= 2){
            isTakingOutTheTrash = false
        }

        setTimeout(() =>{
            if (isTakingOutTheTrash){
                resolve("You took out the trash ♻️")
            }else{
                reject("You DIDN'T took out the trash ♻️")
            }
        }, 3000)
    })

document.getElementById("promiseAll").addEventListener("click", () =>{
    Promise.all([walkTheDogRe, cleanTheKitchenRe, takeOutTheTrashRe])
        .then((results) => {
            for (const result of results) {
                console.log(result)
            }
        })
        .catch((error) => {
            console.error(error)
        })
})