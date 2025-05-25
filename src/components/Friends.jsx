import FriendData from "./FriendData" ;
import { v4 as uuidv4 } from 'uuid';


function Friends({friends,onSelect}) {



    return (
        <ul className="">
            {friends.map((friend)=><FriendData friend={friend} onSelect={onSelect} key={uuidv4()}/>)}
        </ul>
    )
}

export default Friends
