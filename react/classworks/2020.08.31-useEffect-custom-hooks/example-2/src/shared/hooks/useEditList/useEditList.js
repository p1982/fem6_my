import {useState} from 'react';

const useEditList = (orginalList) => {
    const [list, setList] = useState(orginalList);

    const handleRemove = (idx) => {
        const newList = [...list]; 
        newList.splice(idx, 1);
        setList(newList);
    }; 

    return [list, setList, handleRemove];
}

export {useEditList};
