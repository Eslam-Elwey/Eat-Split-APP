import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewFriendForm({isOpen , onAddfriend}) {

    const[name,setname]=useState("") ;
    const[randomIndex,setRandomIndex] = useState(Math.floor(Math.random()*10000));

    const imageSrc = `https://i.pravatar.cc/48?u=${randomIndex}` ;

    if(!isOpen)
    {
        return ;
    }

    function handleSubmit(e)
    {
        e.preventDefault();

        const data = {
            name,
            image : imageSrc ,
            id:uuidv4(),
            balance : 0 
        }

        setRandomIndex(()=>Math.floor(Math.random()*10000));

        setname(()=>"");
        
        onAddfriend(data) ;

    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="name">🧚‍♂️ Friend name</label>
            <input type = "text" id="name" value={name} required onChange={(e)=>setname(()=>e.target.value)} />
            <label htmlFor="image">🏜 Image URL</label>
            <input type = "url" id="image" value={imageSrc} readOnly />
            <button className="button">Add</button>
        </form>
    )
}

export default NewFriendForm
