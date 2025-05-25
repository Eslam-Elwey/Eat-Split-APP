


function FriendData({friend,onSelect, handleClose,selectedFriend,onCloseBill}) {

    const {id,name,image,balance} = friend ;

    function handleSelect()
    {
        onSelect(id);
        handleClose(id) ;
    }

    function handleCloseButton()
    {
        onCloseBill(()=>false);
        handleClose(null) ;
    }

    return (
        <li className={selectedFriend?.id===id?"selected":""}>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <p className={balance>0?'green':balance<0?'red':''}>
                    {balance===0?`You and ${name} are even`:balance>0?`${name} owes you ${balance}€`:`You owe ${name} ${balance*-1}€`}
                    </p>
            </div>
            <button onClick={selectedFriend?.id===id?handleCloseButton:handleSelect} className="button">{selectedFriend?.id===id?'Close':'Select'}</button>
        </li>
    )
}

export default FriendData
