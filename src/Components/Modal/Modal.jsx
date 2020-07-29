import React, { useState } from 'react'
import '../../App.scss'
export default function Modal({ display, setData, events, times, setModal }) {
    const [formPosition, setPosition] = useState({
        position: undefined,
    })
    const [formStart, setStart] = useState({
        start: undefined,
    })
    const [formEnd, setEnd] = useState({
        end: undefined,
    })

    async function addEvent(position, start, end) {

        if (position === undefined | start === undefined | end === undefined) {
            alert('Darn! You must fill out all of the form')
            return
        }
        if (+start === +end) {
            alert('Oops! Your Start and end times cannot be the same!')
            return
        }
        if (+start > +end) {
            alert('Oops! Your start time cannot be after your end time!')
            return
        }
        let testOverlapp1 = events[position].availability.findIndex(frame => (+start >= +frame.start && +start < +frame.end))
        let testOverlapp2 = events[position].availability.findIndex(frame => (+end > +frame.start && +end < +frame.end))
        let testOverlapp3 = events[position].availability.findIndex(frame => (+start <= +frame.start && + end > frame.end))
        if (testOverlapp1 !== -1 || testOverlapp2 !== -1 || testOverlapp3 !== -1) {
            alert('Oops! You have overlapping times!'
            )
            return
        } else {
            let newEvents = [...events[position].availability, { start: start, end: end }]
            let copiedEvents = events
            copiedEvents[position].availability = newEvents
            await setData({ events: copiedEvents })
            await setPosition({
                position: undefined
            })
            await setStart({
                start: undefined
            })
            await setEnd({
                end: undefined
            })
            setModal({ display: false })
        }
    }
    let reveal = (<div className="Modal">
        <div className="Form">
            <h1>Add Availability</h1>
            <h2>Position</h2>
            <select value={undefined} onChange={e => setPosition({ position: e.target.value })}>
                <option value={formPosition.position}>Select Position</option>
                {events.map((position, index) => (
                    <option key={index} value={index}>{position.position}</option>
                ))}
            </select>
            <h2>Start Time</h2>
            <select value={undefined} onChange={e => setStart({ start: e.target.value })}>
                <option value={undefined}>Select Start Time</option>
                {times.map((time, index) => (
                    <option key={index} value={index}>{time}</option>
                ))}
            </select>
            <h2>End Time</h2>
            <select value={undefined} onChange={e => setEnd({ end: e.target.value })}>
                <option value={undefined}>Select End Time</option>
                {times.map((time, index) => (
                    <option key={index} value={index}>{time}</option>
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