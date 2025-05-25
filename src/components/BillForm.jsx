import { useState } from "react";


function BillForm({isOpenBill , setIsOpenBill ,friendData , onSplitBill,handleClose,setIsOpenForm,onSplitBill2}) {

    const[billValue,setBillValue]=useState("") ;
    const[myShare,setMyShare]=useState("") ;
    const[payer,setPayer]=useState("You") ;

    const friendShare = billValue - (myShare?myShare:0) ;
    if(isOpenBill)
    {
        setIsOpenForm(()=>false);
    }


    function handleCloseX()
    {
        setIsOpenBill(()=>!isOpenBill);
        handleClose(null);
        setBillValue(()=>"");
        setMyShare(()=>"");
        setPayer(()=>"You");
    }

    function handleSubmit(e)
    {
        let updatedBalance ;
        e.preventDefault();
        
        if(payer==="You")
        {
            updatedBalance = friendShare ;
        }

        else if(payer==="Friend")
        {
            updatedBalance = -myShare ;
        }

        setBillValue(()=>"");
        setMyShare(()=>"");
        setPayer(()=>"You");


        // onSplitBill(friendData.id,updatedBalance);
        onSplitBill2(updatedBalance);
        setIsOpenBill(()=>!isOpenBill);
        handleClose(null);
    }


    if(!isOpenBill)
    {
        return ;
    }

    return (
        <>
        
        <form onSubmit={handleSubmit} className="form-split-bill">
            <span onClick={handleCloseX} style={{fontSize:"4rem" , position :"absolute" , right:"30rem" , top:"12rem" , cursor:"pointer"}} >&times;</span>
            <h2>split a bill with {friendData.name}</h2>

            <label htmlFor="name">💰 Bill Value</label>
            <input type = "number" id="value" required value={billValue} onChange={(e)=>setBillValue(()=>Number(e.target.value))} />

            <label htmlFor="share">🧍‍♂️ Your expense</label>
            <input type = "number" id="share" required value={myShare} onChange={(e)=>setMyShare(()=>e.target.value<=billValue?Number(e.target.value):myShare)} />

            <label htmlFor="fShare">🕴 {friendData.name}'s expense</label>
            <input type = "number" id="fShare" disabled value={friendShare} />

            <label htmlFor="pay">😭 Who is paying the bill?</label>
            <select name="pay" id="pay" value={payer} onChange={(e)=>setPayer(()=>e.target.value)}>
                <option value="You">You</option>
                <option value="Friend">{friendData.name}</option>
            </select>

            <button className="button">Split bill</button>
        </form>
        </>
    )
}

export default BillForm
