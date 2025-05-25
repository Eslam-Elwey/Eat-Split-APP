import { useState } from "react";
import Friends from "./Friends"
import NewFriendForm from "./NewFriendForm";




function ExisitingFriends({friends,addNewFriend , onSelect}) {

    
    const[isOpenForm,setIsOpenForm]=useState(false) ;

    function handleOpenForem()
    {
        setIsOpenForm(()=>!isOpenForm);
    }

    

    return (
        <div className="sidebar">
            <Friends friends={friends} onSelect={onSelect} />
            <NewFriendForm onAddfriend={addNewFriend} isOpen={isOpenForm}/>
            <button onClick={handleOpenForem} className="button">{isOpenForm?'Close':'Add friend'}</button>
        </div>
    )
}

export default ExisitingFriends
