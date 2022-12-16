import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import './tender.css'
import database from '../firebase';

function TenderCards() {
    const[people,setPeople]=useState([])
       

    useEffect(()=>{
            const unsubscribe=database.collection('people').onSnapshot((snapshot)=>(
                setPeople(snapshot.docs.map(doc=>doc.data()))
            ))

            return ()=>{
                unsubscribe();

            }
    },[]);

  return (
    <div>
        <div className='card-container'>

     {
         people.map((person)=>(
             <TinderCard
             className='swipe'
             key={person.name}
             preventSwipe={['up','down']}>

            <div  className="card" style={{backgroundImage:`url(${person.img})`,backgroundRepeat:'no-repeat'}}>
                <h3>{person.name}</h3>
            </div>
            </TinderCard>
        ))
    }
    </div>
    </div> 
    
  )
}

export default TenderCards

