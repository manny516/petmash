import{API} from './API.js';

let mainConfig = {
    apiData : API(),
    leftArray : [],
    rightArray : [],
    restArray : [],
    theBody :  document.querySelector('#draw'),
    clickObj : '',
    clickCache : new Object
};

export {mainConfig}