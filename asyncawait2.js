async function anuj(){

    let delhiWeather = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("27 deg");
        }, 5000);
    
    })
    
    let banWeather = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("28 deg");
        }, 1000);
    
    })

    // 1st choice


    console.log("fetching delhi");

    let delhi = await delhiWeather;  // resolved value delhi ke andr aajegi
                                    // yha se neche badhne nai dega jabh tk delhiweather reolve na hojae chah he kitni log statements use krlo

    console.log("fetched delhi");

    console.log(delhi);  

    console.log("fetching ban");

    let ban = await banWeather;     

    console.log(ban);

    console.log("fetched ban");

}

console.log("one");

console.log(anuj());

anuj().then(function(){
    console.log("completed");
})

console.log("two");


//
one
fetching delhi       
Promise { <pending> }
fetching delhi       
two
fetched delhi
27 deg       
fetching ban 
28 deg       
fetched ban  
fetched delhi
27 deg       
fetching ban 
28 deg       
fetched ban  
completed   



