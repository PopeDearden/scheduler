import React, { useState } from 'react'
import data from './data.json'
import ScheduleTimeLayout from './Components/Schedule/ScheduleTimeLayout'
import ScheduleBlankLayout from './Components/Schedule/ScheduleBlankLayout'
import ScheduleFilled from './Components/Schedule/ScheduleFilled'
import Modal from './Components/Modal/Modal'
import './App.scss'
import './Reset.scss'


export default function App() {
  const [schedule, setData] = useState({
    events: data.events,
  });
  const [time, setTime] = useState({
    times: data.times
  });
  const [modal, setModal] = useState({
    display: false
  })
  return (
    <div className="App">
      <div className="Header">
        <div className="HeaderContent">
          <h1>Availability Scheduler</h1>
          <div onClick={() => setModal(prevState => ({ display: !prevState.display }))} className="Button">
            <p>{modal.display ? "Cancel" : "Add Availability"}</p>
          </div>
        </div>
      </div>
      <div className="BodyArea">
      <p id="info">*To delete times, double click on the time block.</p>
        <div className="Chart">
          <div className="ScheduleBox">
            <ScheduleTimeLayout
              times={time.times} />
            {schedule.events.map((data, index) => (
              <div className="Role">
                <ScheduleBlankLayout
                  times={time.times}
                  title={data.position}
                  color={data.color} />
                <ScheduleFilled
                events={schedule.events}
                  available={data.availability}
                  title={data.position}
                  color={data.color}
                  times={time.times}
                  setData={setData}
                />
              </div>
            ))}
          </div>
          <Modal
            display={modal.display}
            setData={setData} 
            events={schedule.events}
            times={time.times}
            setModal={setModal}/>
            
        </div>
      </div>
    </div>
  )
}