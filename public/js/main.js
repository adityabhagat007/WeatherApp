
console.log("all okk")
const city = document.getElementById("city")

const d = document.getElementById("submitBtn")

const getinfo = async(event)=>{
    event.preventDefault();
    let c = city.value;
    console.log(c);
    let a= document.getElementById("text");
    if(c===""){
        a.innerText=" oops!! plz enter before search";
    }
    else{
        try{
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${c}&units=metric&appid=9c99faec43e39f78eb8b6626287e192d`;
     const response =  await fetch(url);
     const data =await response.json();
     const arr=[data];
     const w =arr[0].weather[0].main;
     let b=document.getElementById("card-title");
     b.innerText= w;
     a.innerText=arr[0].main.temp +' in celsius';
        }
        catch{
            a.innerText="Wrong Name";
        }
     /*fetch(url).then(response=>{
         return response.json();
     })
     .then(responseData=>{
        const arr =[responseData];
        console.log(arr[2]);
     });*/

    }
}

d.addEventListener("click",getinfo);