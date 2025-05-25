
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
  const[matchedFriend,setMatchedFriend]=useState(initialFriends[0]) ;
  

  function addNewFriend(friendData)
  {
      setFriends(()=>[...friends,friendData]) ;
  }



  function handleSelectChoice(id)
  {
    setIsOpenBill(()=>true);
    setMatchedFriend(()=>friends.filter((friend)=>friend.id===id)[0]);
    console.log(matchedFriend);
  }

  function handleBillValue(updatedid,money)
  {
    const copyFriends = structuredClone(friends) ;

    const updatedIndex = copyFriends.findIndex((friend)=>friend.id===updatedid);

    copyFriends[updatedIndex] = {...copyFriends[updatedIndex] , balance:money} ;

    setFriends(()=>copyFriends) ;
  }

  return (
    <div className='app'>
      <ExisitingFriends friends ={friends} addNewFriend={addNewFriend} onSelect={handleSelectChoice}/>
      <BillForm onSplitBill={handleBillValue} friendData={matchedFriend} isOpenBill={isOpenBill} setIsOpenBill={setIsOpenBill}/>
      
    </div>
  )
}

export default App
