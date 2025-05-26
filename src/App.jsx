
import { useState } from 'react';
import './App.css' ;
import BillForm from './components/BillForm';
import ExisitingFriends from './components/ExisitingFriends';


const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {

  const[friends,setFriends]=useState(initialFriends) ;
  const[isOpenBill,setIsOpenBill]=useState(false) ;
  const[matchedFriend,setMatchedFriend]=useState(null) ;
  const [selectedFriend,setSelectedFriend] = useState(null) ;
  const[isOpenForm,setIsOpenForm]=useState(false) ;

  function handleClose(id)
  {
      setSelectedFriend(()=>friends.filter((fri)=>fri.id===id)[0]);
  }
  

  function addNewFriend(friendData)
  {
      setFriends(()=>[...friends,friendData]) ;
  }



  function handleSelectChoice(id)
  {
    setIsOpenBill(()=>true);
    setMatchedFriend(()=>friends.filter((friend)=>friend.id===id)[0]);
  }

  function handleBillValue(updatedid,money)
  {
    const copyFriends = structuredClone(friends) ;

    const updatedIndex = copyFriends.findIndex((friend)=>friend.id===updatedid);

    copyFriends[updatedIndex] = {...copyFriends[updatedIndex] , balance:money+copyFriends[updatedIndex].balance} ;

    setFriends(()=>copyFriends) ;



  }

  function handleSplitValue(moneyVal)
  {
    setFriends(()=>friends.map((friend)=>selectedFriend.id===friend.id?{...friend,balance:moneyVal+friend.balance}:{...friend}));
  }

  return (
    <>
    <div style={{color:"white" , fontSize:"3rem" , width:"60%",margin : "10px auto",backgroundColor:"gray" ,borderRadius:"12px"}}>
      <h1 style={{width:"80%",padding:"10px" , margin:"auto"}}>Eat & Split APP</h1>
      </div>
    <div className='app'>
      <ExisitingFriends isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm}  handleClose={handleClose} selectedFriend={selectedFriend} onCloseBill={setIsOpenBill} friends ={friends} addNewFriend={addNewFriend} onSelect={handleSelectChoice}/>
      <BillForm onSplitBill2={handleSplitValue} setIsOpenForm={setIsOpenForm} handleClose={handleClose} onSplitBill={handleBillValue} friendData={matchedFriend} isOpenBill={isOpenBill} setIsOpenBill={setIsOpenBill}/>
    </div>
    </>
  )
}

export default App
