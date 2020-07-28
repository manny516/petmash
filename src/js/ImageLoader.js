
function ImageLoader({apiData,leftArray,rightArray,theBody,clickObj,clickCache}){

    let randomLeftArray;
    let randomRightArray;

    let imageReturn = {
        ranCall : ranCall(),
        imageHTML : imageHTML(),
        imgClick : ImgClickEvent()
    }


    function splitSpread(ParentArray,ChOne,ChTwo){
        
        let imgExe = ['png','jpg','gif','jpeg'];
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

        console.log(leftArray);
        console.log(rightArray);
        randomRightArray = Math.floor(Math.random() * rightArray.length);
        randomLeftArray = Math.floor(Math.random() * leftArray.length);
        console.log(`Left Array ${randomLeftArray} : Right Array ${randomRightArray}`);
    }


    function imageHTML(){

        let drawTemplate = `
            <div class=" dog-img left-img">  
                <img src="${leftArray[randomLeftArray]}" alt="Left Image" data-left-index="${randomLeftArray}"/>
            </div>
            
            <div class="dog-img right-img">  
                <img src="${rightArray[randomRightArray]}" alt="right Image" data-right-index="${randomRightArray}"/>
            </div>`;

            theBody.insertAdjacentHTML('afterbegin', drawTemplate);
            document.querySelectorAll(".dog-img") ? clickObj = document.querySelectorAll(".dog-img") : '' ;
        
    }


    function ImgClickEvent(){
        let imgClass; 
        let imgTag;
        let imgLeftSrc;
        let imgRightSrc;
        let imgRanIndexLeft;
        let imgRanIndexRight;
        let leftImg = document.querySelector(".left-img img");
        let rightImg = document.querySelector(".right-img img");
        // console.log(clickObj);
        
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

                imgClass.contains("left-img") ? srcImgAdd("left",leftArray,randomLeftArray,imgLeftSrc,imgRanIndexLeft) : '';
                
                imgClass.contains("right-img") ? srcImgAdd("right",rightArray,randomRightArray,imgRightSrc,imgRanIndexRight) : '';

                console.log(clickCache);
            });
        })
    }


    return imageReturn;
}

export {ImageLoader}