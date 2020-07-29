import React from 'react'
import '../../App.scss'

export default function ScheduleLayout({times, title, color}) {

  return(
    <div className="ScheduleLayout">
        <div className="TitleBar2" style={{backgroundColor: `${color}`}}>
            <h2>{title}</h2>
        </div>
     {times.map((time, index) =>{
         if(index % 4 === 0){
             return(
                <div key={index} className="TimeTitle2">
                    <p></p>
                    </div>
             )
         }
         else{
             return(
                 <div key={index} className="TimeEmpty2">
                     </div>
             )
         }
     })}
    </div>
  )
}