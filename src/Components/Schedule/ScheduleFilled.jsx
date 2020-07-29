import React from 'react'

import '../../App.scss'

export default function ScheduleFilled({ available, color, times, title, setData, events }) {

    function fixTime(fix) {
        if (+fix === 32) {
            return "5:00 PM"
        }
        else {
            return times[fix]
        }
    }
    async function deleteEvent(position, start, end) {
        if (position === 'Doctor') {
            position = 0
        }
        if (position === 'Assistant') {
            position = 1
        }
        if (position === 'Hygienist') {
            position = 2
        }
        let copiedEvents = events
        let removeEvent = events[position].availability.filter(frame =>
            frame.start !== start && frame.end !== end)
        copiedEvents[position].availability = removeEvent
        await setData({
            events: copiedEvents
        })
        
        
    }

    return (
        <div className="Available">
            {available.map((time, index) => {
                return (
                    <div key={index} onDoubleClick={() => deleteEvent(title, time.start, time.end)} className="Bubble" style={{
                        position: "absolute",
                        height: `${(time.end - time.start) * 20 - 8}px`,
                        width: "144px",
                        backgroundColor: `${color}78`,
                        margin: "0px",
                        padding: "0px",
                        borderRadius: "10px",
                        border: `3px solid ${color}`,
                        top: `${(1 + 15 + 25 + 15 + 40 + (time.start * 20))}px`
                    }}>
                        <p id="Available">Available</p>
                        <p id="Available">{times[time.start]} - {fixTime(time.end)}</p>

                    </div>
                )
            })}
        </div>
    )
}