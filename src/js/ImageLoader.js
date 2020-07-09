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

export {ImageLoader}