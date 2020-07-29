import React, { useState } from 'react'
import '../../App.scss'
export default function Modal({ display, setData, events, times, setModal }) {
    const [formPosition, setPosition] = useState({
        position: null,
    })
    const [formStart, setStart] = useState({
        start: null,
    })
    const [formEnd, setEnd] = useState({
        end: null,
    })

    async function addEvent(position, start, end) {
        if (position === null | start === null | end === null) {
            alert('Darn! You must fill out all of the form')
            return
        }
        if(+start === +end){
            alert('Oops! Your Start and end times cannot be the same!')
            return
        }
        if(+start > +end){
            alert('Oops! Your start time cannot be after your end time!')
            return
        }else{
            let newEvents = [...events[position].availability, { start: start, end: end }]
            let copiedEvents = events
            copiedEvents[position].availability = newEvents
            await setData({ events: copiedEvents })
            await setPosition({
                position: null
            })
            await setStart({
                start: null
            })
            await setEnd({
                end: null
            })
            setModal({display: false})
        }
    }
    let reveal = (<div className="Modal">
        <div className="Form">
            <h1>Add Availability</h1>
            <h2>Position</h2>
            <select value={null} onChange={e => setPosition({ position: e.target.value })}>
                <option value={formPosition.position}>Select Position</option>
                {events.map((position, index) => (
                    <option value={index}>{position.position}</option>
                ))}
            </select>
            <h2>Start Time</h2>
            <select value={null} onChange={e => setStart({ start: e.target.value })}>
                <option value={null}>Select Start Time</option>
                {times.map((time, index) => (
                    <option value={index}>{time}</option>
                ))}
            </select>
            <h2>End Time</h2>
            <select value={null} onChange={e => setEnd({ end: e.target.value })}>
                <option value={null}>Select End Time</option>
                {times.map((time, index) => (
                    <option value={index}>{time}</option>
                ))}
                <option value={32}>5:00 PM</option>
            </select>
            <div className="ModalButton" onClick={() => addEvent(formPosition.position, formStart.start, formEnd.end)}><p>Save</p></div>
        </div>
    </div>)
    let hide = (<div>

    </div>)

    return (display ? reveal : hide

    )
}