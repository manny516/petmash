require('./css/main.scss');
import{btnClick,theBody,dogData} from './js/API.js';

var dogUrls = dogData();
displayBoard(dogUrls);

imgClickEvent();


function imgClickEvent(likeArray){

    var getImgClick = document.querySelectorAll('.dog-img');
    getImgClick.forEach(function(item){
        item.addEventListener('click',(e) => {
            let getCurrentEle = e.currentTarget;
            likeArray.push(getCurrentEle.querySelector('img').getAttribute('src'));

        });

    });

}



function displayBoard(dogArray){
    var drawTemplate = `
    <div class=" dog-img left-img">  
        <img src="${dogArray[0]}" alt="Left Image "/>
    
    </div>
    
    <div class="dog-img right-img">  
        <img src="${dogArray[1]}" alt="right Image "/>
    </div>`;
    theBody.insertAdjacentHTML('afterbegin', drawTemplate);
}




// getImgClick.addEventListener("click", function(e){
//     console.log(e.currentTarget);
//     // dogUrls.splice(0,2);
//     // console.log(apiUrls.length);
//     // if(apiUrls == 0){
//     //     window.localStorage.clear()
//     // }
//     // if(dogUrls.length == 0){
//     //     dogData();
//     // }

// });