require('./css/main.scss');
import{mainConfig} from './js/ClickConfig.js';
import{ImageLoader} from './js/ImageLoader.js';



// let leftArray = [];
// let rightArray = [];
let randomLeftArray ;
let randomRightArray;
let selectedImages;

ImageLoader(mainConfig).ranCall;
// ImageLoader(config).imageHTML;



// ranCall();



// clickConfig = { 
//     clickObj : document.querySelectorAll(".dog-img"),
//     arrayLeft : leftArray,
//     clickCache : selectedImages,
// };

// imgClickEvent(clickConfig);

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
