import React from 'react'
import '../../App.scss'

export default function ScheduleLayout({times}) {

  return(
    <div className="ScheduleLayout">
        <div className="TitleBar">
            <h2>Time</h2>
        </div>
     {times.map((time, index) =>{
         if(index % 4 === 0){
             return(
                <div key={index} className="TimeTitle">
                    <p>{time}</p>
                    </div>
             )
         }
         else{
             return(
                 <div key={index} className="TimeEmpty">
                     </div>
             )
         }
     })}
    </div>
  )
}