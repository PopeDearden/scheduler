import React, { useState } from 'react'
import data from '../../data.json'
import '../../App.scss'
import ScheduleFilled from '../Schedule/ScheduleFilled'

export default function Modal({display, setData, events, times}) {

function addEvent(position, start, end) {
let findPosition = events.findIndex(name=>name.position===position)
let newEvents = [...events[findPosition].availability, {start: "5", end:"15"}] 
let copiedEvents = events
copiedEvents[findPosition].availability = newEvents
setData({events: copiedEvents, times: times})
}
let reveal = (<div className="Modal">
    <div className="Button" 
    style={{color: "black", border: "1px solid black"}}
    onClick={()=>addEvent('Doctor', 0, 1)}
    >
        test
    </div>
</div>)
let hide = (<div>

</div>)

  return( display ? reveal : hide
   
  )
}