function ImageBoard(dogArray,siteContainer){
    var drawTemplate = `
    <div class=" dog-img left-img">  
        <img src="${dogArray[0]}" alt="Left Image "/>
    
    </div>
    
    <div class="dog-img right-img">  
        <img src="${dogArray[1]}" alt="right Image "/>
    </div>`;
    siteContainer.insertAdjacentHTML('afterbegin', drawTemplate);
}

export {ImageBoard}