import React from 'react'
import Avatar from '@mui/material/Avatar';
import './chart.css'
import {Link} from 'react-router-dom'

function Charts({name,message,profilePic,timestamp}) {
  return (
    // /charts/:person
    <Link to ={`/charts/${name}`}>

    <div className='chat'>
      <div className='col'>
          <div className='row'>
         <Avatar className='chat_image' alt={name} src={profilePic} >{name.slice(0,1)}</Avatar>
            <h2>{name}</h2>
            </div>
         <div className='chart_details'>
            <p>{message}</p>
      </div>

         </div>
         <p className='chat_timestamp'>{timestamp}</p>
    </div>
    </Link>
  )
}

export default Charts
