import { useRef, useEffect } from 'react'
import { Hub } from 'aws-amplify';


function handleTitleUpdate(updatedTitle:String){
    Hub.dispatch(
        'TitleUpdate', 
        { 
            event: 'updateTitle', 
            data: {color:'blue'}, 
            message:`${updatedTitle}`
    });
}

export {handleTitleUpdate}