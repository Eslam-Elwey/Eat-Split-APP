
import Friends from "./Friends"
import NewFriendForm from "./NewFriendForm";




function ExisitingFriends({friends,addNewFriend , onSelect ,onCloseBill ,selectedFriend,handleClose,isOpenForm,setIsOpenForm}) {

    
    
    


    function handleOpenForem()
    {
        setIsOpenForm(()=>!isOpenForm);
    }

    

    return (
        <div className="sidebar">
            <Friends onCloseBill={onCloseBill} selectedFriend={selectedFriend} handleClose={handleClose} friends={friends} onSelect={onSelect} />
            <NewFriendForm onAddfriend={addNewFriend} isOpen={isOpenForm} setIsOpenForm={setIsOpenForm}/>
            <button onClick={handleOpenForem} className="button">{isOpenForm?'Close':'Add friend'}</button>
        </div>
    )
}

export default ExisitingFriends
