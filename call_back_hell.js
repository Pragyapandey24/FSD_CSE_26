function GetData(dataId){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },3000);
    });
}

function Api(){
    return new Promise ((resolve,reject)=>{
        setTimeout (()=>{
            console.log("weatherData,i found");
            resolve(200);
        },3000);
    });
}

async function getweatherData(){
    await Api();
    await Api();
}
getweatherData();