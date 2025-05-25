

function FriendData({friend,onSelect}) {

    const {id,name,image,balance} = friend ;

    function handleSelect()
    {
        onSelect(id);
    }

    return (
        <li>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <p className={balance>0?'green':balance<0?'red':''}>
                    {balance===0?`You and ${name} are even`:balance>0?`${name} owes you ${balance}€`:`You owe ${name} ${balance*-1}€`}
                    </p>
            </div>
            <button onClick={handleSelect} className="button">Select</button>
        </li>
    )
}

export default FriendData
