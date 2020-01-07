require('./css/main.scss');

var btnClick = document.querySelector('.test');
var theBody = document.querySelector('#draw');
var localStorageVal = Object.values(window.localStorage);


function dogData(){

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
        
        // return apiUrls;
       
}

var dogUrls = dogData();

console.log(dogUrls);

var drawTemplate = `
<div class="left-img">  
    <img src="${dogUrls}" alt="Left Image "/>

</div>

<div class="right-img">  
    <img src="${dogUrls}" alt="right Image "/>
</div>`;


theBody.insertAdjacentHTML('afterbegin', drawTemplate);



// var testArray = ['green','Blue','Orange','Yellow','Red','Purple'];

// testArray.splice(0,2);

// console.log(testArray);


btnClick.addEventListener("click", function(){

    dogUrls.splice(0,2);
    console.log(apiUrls.length);
    if(apiUrls == 0){
        window.localStorage.clear()
    }
    if(dogUrls.length == 0){
        dogData();
    }

});