import{API} from './API.js';

let mainConfig = {
    apiData : API(),
    leftArray : [],
    rightArray : [],
    theBody :  document.querySelector('#draw'),
    clickObj : '',
    clickCache : {},
};

export {mainConfig}