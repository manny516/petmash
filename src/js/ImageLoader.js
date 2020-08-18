import { toInteger } from "lodash";

function ImageLoader({apiData,leftArray,rightArray,restArray,theBody,clickObj,clickCache}){

    let randomLeftArray,randomRightArray;

    let imageReturn = {
        ranCall : ranCall(),
        imageHTML : imageHTML(),
        imgClick : ImgClickEvent()
    }

    

    function splitSpread(ParentArray,ChOne,ChTwo){
        
        let imgExe = ['png','jpg','jpeg'];
        for(let i = 0; i < ParentArray.length; i++){
            for(let x = 0; x < imgExe.length; x++){
                if(ParentArray[i].slice(-3) == imgExe[x]){
                    if(i % 2 == 0 ){
                        ChOne.push(ParentArray[i]);
                    }else{
                        ChTwo.push(ParentArray[i]);
                    }
                }
            }
        }

    }

    
    function ranCall(){
        console.log(apiData);
        splitSpread(apiData,leftArray,rightArray);
    
        randomRightArray = Math.floor(Math.random() * rightArray.length);
        randomLeftArray = Math.floor(Math.random() * leftArray.length);
        console.log(`Left Array ${randomLeftArray} : Right Array ${randomRightArray}`);
    }


    function imageRest(imgClass){

        console.log("Image class" + imgClass);
        let leftDiv= document.querySelector(".left-img");
        let rightDiv = document.querySelector(".right-img");

        if(leftArray.length >= Math.max(leftArray.length,rightArray.length)){
            // console.log(Math.ceil(rightArray.length * .30));
            if(rightArray.length <= Math.ceil( parseInt(imgClass) * .40)){

                for(let i = 0; i < rightArray.length; i++){
                    restArray.push(rightArray[i]);
                }

                for(let x = 0; x < leftArray.length; x++){
                    restArray.push(leftArray[x]);
                }

                leftArray.length = 0 ;
                rightArray.length = 0 ;
                splitSpread(restArray,leftArray,rightArray);
                console.log("Right is larger and time to rest");
                console.log(rightArray);
                console.log(leftArray);
                rightDiv.setAttribute("data-image-length",rightArray.length);
                leftDiv.setAttribute("data-image-length",leftArray.length);

            }
        }else if(rightArray.length >= Math.max(rightArray.length,rightArray.length)){
            if(leftArray.length <= Math.ceil(parseInt(imgClass) * .40)){

                for(let x = 0; x < leftArray.length; x++){
                    restArray.push(leftArray[x]);
                }

                for(let i = 0; i < rightArray.length; i++){
                    restArray.push(rightArray[i]);
                }

                rightArray.length = 0 ;
                leftArray.length = 0 ;
                splitSpread(restArray,leftArray,rightArray);
                console.log("Left is larger and time to rest");
                console.log(leftArray);
                console.log(rightArray);
                leftDiv.setAttribute("data-image-length",leftArray.length);
                rightDiv.setAttribute("data-image-length",rightArray.length);

                
            }
            
        }
    //     if(leftArray.length == Math.max(leftArray.length,rightArray.length)){
    //         // if(rightArray.length <= Math.ceil(rightArray * .30)){
    //         //     restArray.push.apply(leftArray,rightArray);
    //         //     console.log(restArray);
    //         // }
    //         console.log("ITs larger");
    //     }
    }

    function addLength(divClass,targetArray){
        divClass.setAttribute("data-image-length",targetArray.length);
    }
    
    function imageHTML(){

        let leftImg,
        rightImg,
        drawTemplate;
      
        drawTemplate = `
            <div class=" dog-img left-img">  
                <img src="${leftArray[randomLeftArray]}" alt="Left Image" data-left-index="${randomLeftArray}"/>
            </div>
            
            <div class="dog-img right-img">  
                <img src="${rightArray[randomRightArray]}" alt="right Image" data-right-index="${randomRightArray}"/>
            </div>`;

            theBody.insertAdjacentHTML('afterbegin', drawTemplate);
            document.querySelectorAll(".dog-img") ? clickObj = document.querySelectorAll(".dog-img") : '' ;

            leftImg = document.querySelector(".left-img");
            rightImg = document.querySelector(".right-img");
            
            addLength(leftImg,leftArray);
            addLength(rightImg,rightArray);
        
    }


    function ImgClickEvent(){
        let imgClass,
        imgTag,
        imgLeftSrc,
        imgRightSrc,
        imgRanIndexLeft,
        imgRanIndexRight;

      
        let leftImg = document.querySelector(".left-img img");
        let rightImg = document.querySelector(".right-img img");
        
        let srcImgAdd = (position,posArray,posRandArray,posSrc,posIndex)=>{
            posArray.splice(posRandArray,1);
            posSrc = imgTag.getAttribute("src");
            if(position == "right"){
                posIndex = imgTag.getAttribute("data-right-index");
                clickCache[`right${posIndex}`] = posSrc;
                console.log(clickCache[`right${posIndex}`]);
            }else{
                posIndex = imgTag.getAttribute("data-left-index");
                clickCache[`left${posIndex}`] = posSrc;
                console.log(clickCache[`left${posIndex}`]);
            }

            console.log(posArray.length);
        }

        clickObj.forEach( (item) =>{
            item.addEventListener("click",(e)=>{
                let leftDiv= document.querySelector(".left-img").getAttribute("data-image-length");
                let rightDiv = document.querySelector(".right-img").getAttribute("data-image-length");
                
                randomRightArray = Math.floor(Math.random() * rightArray.length);
                randomLeftArray = Math.floor(Math.random() * leftArray.length);

                console.log(`Random Right ${randomRightArray}`);
                console.log(`Random Left ${randomLeftArray}`);

                imgClass = e.currentTarget.classList;
                imgTag = e.currentTarget.querySelector("img");

                leftImg.setAttribute("src",leftArray[randomLeftArray]);
                rightImg.setAttribute('src',rightArray[randomRightArray]);
                leftImg.setAttribute('data-left-index',randomLeftArray);
                rightImg.setAttribute('data-right-index',randomRightArray);

                if(imgClass.contains("left-img")){ 
                    srcImgAdd("left",leftArray,randomLeftArray,imgLeftSrc,imgRanIndexLeft) ;
                    imageRest(leftDiv);
                }
                
                if(imgClass.contains("right-img")){
                    srcImgAdd("right",rightArray,randomRightArray,imgRightSrc,imgRanIndexRight);
                    imageRest(rightDiv);

                } 

                console.log(clickCache);
            });
        })
    }


    return imageReturn;
}

export {ImageLoader}