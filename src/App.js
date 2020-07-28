import React, { useState } from 'react'
import data from './data.json'
import ScheduleTimeLayout from './Components/Schedule/ScheduleTimeLayout'
import ScheduleBlankLayout from './Components/Schedule/ScheduleBlankLayout'
import './App.scss'
import './Reset.scss'

export default function App() {
  const [schedule, setData] = useState({
    data
  });
  return(
    <div className="App">
      <div className="ScheduleBox">
      <ScheduleTimeLayout 
      times={schedule.data.times}/>
      {schedule.data.data.map((data, index)=>(
        <ScheduleBlankLayout 
        times={schedule.data.times}
        title={data.position}
        color={data.color}/>
      ))}
      
      </div>
    </div>
  )
}