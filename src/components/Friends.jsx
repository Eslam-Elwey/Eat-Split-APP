
import FriendData from "./FriendData" ;
import { v4 as uuidv4 } from 'uuid';


function Friends({friends,onSelect,handleClose,selectedFriend , onCloseBill}) {

    

    


    return (
        <ul className="">
            {friends.map((friend)=><FriendData onCloseBill={onCloseBill} selectedFriend={selectedFriend} handleClose={handleClose} friend={friend} onSelect={onSelect} key={uuidv4()}/>)}
        </ul>
    )
}

export default Friends
