import {inchValue} from "./parametres.js";

function convertUSAHeight(foot, inch ){
    const height =( foot *12 + inch) * inchValue;
    return height;
    
};

export {convertUSAHeight};