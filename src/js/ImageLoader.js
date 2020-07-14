function ImageLoader({apiData,leftArray,rightArray,theBody,clickObj}){

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
                <img src="${leftArray[randomLeftArray]}" alt="Left Image "/>
            </div>
            
            <div class="dog-img right-img">  
                <img src="${rightArray[randomRightArray]}" alt="right Image "/>
            </div>`;

            theBody.insertAdjacentHTML('afterbegin', drawTemplate);

            if(document.querySelectorAll(".dog-img")){
                clickObj = document.querySelectorAll(".dog-img") ;
            }
    }


    function ImgClickEvent(){
        let imgClass; 

        console.log(clickObj);

        clickObj.forEach( (item) =>{
            item.addEventListener("click",(e)=>{
                imgClass = e.currentTarget.classList;

                if(imgClass.contains("left-img")){
                    let imgTag = e.currentTarget.querySelector("img");
                    console.log("Run the code for the Left side");
                    console.log(imgTag.getAttribute("src"));
                }

                if(imgClass.contains("right-img")){
                    console.log("Run the  code for the right side ");
                }
            });
        })
    }


    return imageReturn;
}

export {ImageLoader}