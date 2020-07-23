
function ImageLoader({apiData,leftArray,rightArray,theBody,clickObj,clickCache}){

    console.log(clickObj);
    let imageReturn = {
        ranCall : ranCall(),
        imageHTML : imageHTML(),
        imgClick : ImgClickEvent()
    }

    let randomLeftArray;
    let randomRightArray;

    function ranCall(){

        console.log(apiData);

        for(let i = 0; i < apiData.length; i++){
            if(i % 2 == 0 ){
                leftArray.push(apiData[i]);
            }else{
                rightArray.push(apiData[i]);
            }
        }

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

            if(document.querySelectorAll(".dog-img")){
                clickObj = document.querySelectorAll(".dog-img") ;
            }
    }


    function ImgClickEvent(){
        let imgClass; 
        let imgTag;
        let imgHref;
        let imgRanIndexLeft;
        let imgRanIndexRight
        let leftImg = document.querySelector(".left-img img");
        let rightImg = document.querySelector(".right-img img");
        console.log(clickObj);
        
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
              
                if(imgClass.contains("left-img")){                    
                    imgTag.setAttribute('data-left-index',randomLeftArray);
                    leftArray.splice(randomLeftArray,1);

                    imgHref = imgTag.getAttribute("src");
                    imgRanIndexLeft = imgTag.getAttribute("data-left-index");

                    clickCache[`left${imgRanIndexLeft}`] = true;
                }

                if(imgClass.contains("right-img")){
                    imgTag.setAttribute('data-right-index',randomRightArray);
                    rightArray.splice(randomRightArray,1);

                    imgRanIndexRight = imgTag.getAttribute("data-right-index");
                    clickCache[`right${imgRanIndexRight}`] = true;
                    console.log("Run the code for the Left side");
                }

                console.log(clickCache);
            });
        })
    }


    return imageReturn;
}

export {ImageLoader}