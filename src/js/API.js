var theBody = document.querySelector('#draw');
var likeImg = [];

function API(){

    if(window.localStorage.length <= 1){
        fetch("https://api.thedogapi.com/v1/images/search?limit=100",{
        method: 'GET',
        headers : {
            'Content-Type':'application/json',
            'x-api-key' : '47696efc-9fa3-46a5-8715-ed1c7dbdaa87'
        }
        }).then( (response) =>{ 
            return response.json();
        }).then((theData) => {

            theData.map((item,index) => {
                window.localStorage.setItem('Dog'+index,item.url);
            })
        }).then(() =>{
            console.log("No Local storage data was found : Successfully Created Local storage data");
            return Object.values(window.localStorage);
        }).catch(function(error){
            console.log(error);
        });

    }else{
        return Object.values(window.localStorage);
    }
       
}

export {likeImg,theBody,API} 