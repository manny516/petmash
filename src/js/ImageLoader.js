


function ImageLoader(dogArrayLeft,dogArrayRight,siteContainer){
    let drawTemplate = `
    <div class=" dog-img left-img">  
        <img src="${dogArrayLeft}" alt="Left Image "/>
    
    </div>
    
    <div class="dog-img right-img">  
        <img src="${dogArrayRight}" alt="right Image "/>
    </div>`;
    siteContainer.insertAdjacentHTML('afterbegin', drawTemplate);
}


function imgClickEvent({clickObj,arrayLeft}){
    let imgClass; 
    // console.log(cacheClicked);

    function returnRandLeft(){
        return Math.floor(Math.random() * arrayLeft.length);
    }
    console.log(clickObj);
    clickObj.forEach( (item) =>{
        item.addEventListener("click",(e)=>{
            imgClass = e.currentTarget.classList;
            console.log(returnRandLeft());

            if(imgClass.contains("left-img")){
                console.log("Run the code for the Left side");
                
            }

            if(imgClass.contains("right-img")){
                console.log("Run the  code for the right side ");
            }
            // if(imgClass.contains("left.img")){
            //     "This is the left Image Array";
            // }
        });
    })
    // clickObj.foreach( (item) =>{
    //     console.log(item);
    //     item.addEventlistner("click",(e) =>{
    //         console.log(e.currentTarget);

    //     });

    // })


}


export {ImageLoader,imgClickEvent}