var apiUrls = [];

function dogData(){

    

    fetch("https://api.thedogapi.com/v1/images/search?limit=100",{
    method: 'GET',
    headers : {
        'Content-Type':'application/json',
        'x-api-key' : '47696efc-9fa3-46a5-8715-ed1c7dbdaa87'
    }
    }).then( (response) =>{ 
        return response.json();
    }).then((theData) => {
        var dogData = [];
        theData.map((item,index) => {
            window.localStorage.setItem('Dog'+index,item.url);
        });
    }).catch(function(error){
        console.log(error);
    });

    for(let i = 0; i < window.localStorage.length; i++){
        apiUrls.push(window.localStorage.Dog5+i);
    }
    
    return apiUrls;
   
}

export {apiUrls,dogData} 