require('./css/main.scss');
import{likeImg,theBody,API} from './js/API.js';
import{ImageLoader} from './js/ImageLoader.js'


var dogUrls = API();
ImageLoader(dogUrls,theBody);
imgClickEvent(likeImg,dogUrls);

function imgClickEvent(likeArray,mainArray){

    var getImgClick = document.querySelectorAll('.dog-img');

    getImgClick.forEach(function(item){
        item.addEventListener('click',(e) => {
            let getCurrentEle = e.currentTarget;
            likeArray.push(getCurrentEle.querySelector('img').getAttribute('src'));
            mainArray.splice(0,2);
            getImgClick[0].firstElementChild.setAttribute('src',mainArray[0]);
            getImgClick[1].firstElementChild.setAttribute('src',mainArray[1]);
        
        });

    });

    
}





// getImgClick.addEventListener("click", function(e){
//     console.log(e.currentTarget);
//     dogUrls.splice(0,2);
//     console.log(apiUrls.length);
//     if(apiUrls == 0){
//         window.localStorage.clear()
//     }
//     if(dogUrls.length == 0){
//         dogData();
//     }

// });