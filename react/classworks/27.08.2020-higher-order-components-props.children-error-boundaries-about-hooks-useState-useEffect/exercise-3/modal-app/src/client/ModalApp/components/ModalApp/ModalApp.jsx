import React, {useState} from 'react'
import ModalWindow from '../ModalWindow/'
import Button from '../../../../shared/components/Button/';

const ModalApp = () =>{
    const [open, setOpen] = useState(false);

    const handleOpen = () =>setOpen(true);
    const handleClose = () => setOpen(false);   

    return(
       <>
        <ModalWindow open={open} onClick={handleClose}/>
        <Button text="open" type="primary" onClick={handleOpen}/>
        </>
        )
}

export default ModalApp



