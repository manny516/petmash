require('./css/main.scss');
import{API} from './js/API.js';
import{ImageLoader,imgClickEvent} from './js/ImageLoader.js'

let apiData = API();
let theBody = document.querySelector('#draw');
let leftArray = [];
let rightArray = [];
let randomLeftArray ;
let randomRightArray;
let selectedImages;

for(let i = 0; i < apiData.length; i++){
    if(i % 2 == 0 ){
        leftArray.push(apiData[i]);
    }else{
        rightArray.push(apiData[i]);
    }
}

randomLeftArray = Math.floor(Math.random() * leftArray.length);
randomRightArray = Math.floor(Math.random() * rightArray.length);

ImageLoader(leftArray[randomLeftArray],rightArray[randomRightArray],theBody);

 selectedImages = { 
    clickObj : document.querySelectorAll(".dog-img"),
};

// imgClickEvent(dogUrls);
// rightclick,cacheClicked,clickObj
imgClickEvent(selectedImages);

// function imgClickEvent(likeArray,mainArray){
    
//     var getImgClick = document.querySelectorAll('.dog-img');

//     getImgClick.forEach(function(item){
        
//         item.addEventListener('click',(e) => {
           
//         });
        
//     });

    // if(window.localStorage.length  < 1){
    //     console.log(likeArray());
    // }

    
//}
