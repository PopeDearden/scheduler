import React, { useState } from 'react'
import '../../App.scss'
export default function Modal({ display, setData, events, times }) {
    const [formPosition, setPosition] = useState({
        position: null,
    })
    const [formStart, setStart] = useState({
        start: null,
    })
    const [formEnd, setEnd] = useState({
        end: null,
    })

    function addEvent(position, start, end) {
        if (position === null | start === null | end === null) {
            alert('You must fill out all of the form')
        }
        let newEvents = [...events[position].availability, { start: start, end: end}]
        let copiedEvents = events
        copiedEvents[position].availability = newEvents
        setData({ events: copiedEvents })
    }
    let reveal = (<div className="Modal">
        <form>
            <select value={formPosition.position} onChange={e => setPosition({ position: e.target.value })}>
                <option value={null}>Select Position</option>
                {events.map((position, index) => (
                    <option value={index}>{position.position}</option>
                    ))}
            </select>
            <select value={formStart.start} onChange={e => setStart({ start: e.target.value })}>
                    <option value={null}>Select Start Time</option>
                {times.map((time, index)=>(
                    <option value={index}>{time}</option>
                ))}
            </select>
            <select value={formEnd.end} onChange={e => setEnd({ end: e.target.value })}>
                    <option value={null}>Select End Time</option>
                {times.map((time, index)=>(
                    <option value={index}>{time}</option>
                ))}
            </select>
        </form>
        <div className="ModalButton" onClick={() => addEvent(formPosition.position, formStart.start,formEnd.end)}><p>Submit</p></div>
    </div>)
    let hide = (<div>

    </div>)

    return (display ? reveal : hide

    )
}