
// 1st choice

// async function anuj(){

//     let delhiWeather = new Promise(function(resolve, reject){

//         setTimeout(() => {
//             resolve("27 deg");
//         }, 2000);
    
//     })
    
//     let banWeather = new Promise(function(resolve, reject){
    
//         setTimeout(() => {
//             resolve("28 deg");
//         }, 1000);
    
//     })

//     // 1st choice

//     delhiWeather.then(function(val){
//         console.log(val);
//     })

//     banWeather.then(function(val){
//         console.log(val);
//     })
// }

// anuj();

// console.log(anuj);

// // output => [AsyncFunction: anuj]
//                 // 28 deg
//                 // 27 deg



// 2nd choice

async function anuj(){

    let delhiWeather = new Promise(function(resolve, reject){
        console.log("2");
        setTimeout(() => {
            resolve("27 deg");
        }, 5000);
    
    })
    
    let banWeather = new Promise(function(resolve, reject){
        console.log("1");
        setTimeout(() => {
            resolve("28 deg");
        }, 1000);
    
    })

    // 1st choice


    console.log("fetching delhi");

    let delhi = await delhiWeather;  // resolved value delhi ke andr aajegi

    console.log("fetched delhi");

    console.log(delhi);  

    console.log("fetching ban");

    let ban = await banWeather;     

    console.log(ban);

    console.log("fetched ban");

    // jabh tak delhiweather reolve nai hojata jabh tk neche nai ayea(banweather jabh tk resolve nai hoga)


    // 2
    // 1
    // fetching delhi   
    // fetched delhi     waiting for 5 sec (printed after 5 sec)
    // 27 deg           (printed after 5 sec)
    // fetching ban     (printed after 5 sec)
    // 28 deg           (printed after 5 sec)
    // fetched ban      (printed after 5 sec)

}

anuj();





