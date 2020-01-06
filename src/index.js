require('./css/main.scss');
var btnClick = document.querySelector('.test');
var theBody = document.querySelector('body');

function dogData(){

    var apiUrls = [];

    if( window.localStorage.length < 1){

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
                // dogData.push(item.url);
                // apiUrl.push(item.url);
                // // console.log(apiUrl[0])
                // theBody.innerHTML = `<img src="${apiUrl[0]}" alt="The image" width=500 />
                
                // <img src="${apiUrl[1]}" alt="The image" width=500 />
                // `;
                window.localStorage.setItem('Dog'+index,item.url);
            });
        });
        
    }

    for(let i = 0; i < window.localStorage.length; i++){
        apiUrls.push(window.localStorage.Dog5+i);
    }

    return apiUrls;
}


var dogUrls = dogData();

console.log(dogUrls);



