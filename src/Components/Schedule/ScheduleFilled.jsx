import React, { useState } from 'react'
import data from '../../data.json'
import '../../App.scss'

export default function ScheduleFilled({ available, color, times  }) {

function fixTime(fix) {
    if(+fix === 32){
        return "5:00 PM"
    }
    else{
        return times[fix]
    }
}

    return (
        <div className="Available">
            {available.map((time, index) => {
                return (
                    <div class="Bubble" style={{
                        position: "absolute",
                        height: `${(time.end - time.start) * 20 -8}px`,
                        width: "144px",
                        backgroundColor: `${color}78`,
                        margin: "0px",
                        padding: "0px",
                        borderRadius:"10px",
                        border: `3px solid ${color}`,
                        top: `${(1+15+25+15+40+(time.start*20))}px`
                        
                    }}>
                        <p id="Available">Available</p>
                        <p id="Available">{times[time.start]}-{fixTime(time.end)}</p>
                    </div>
                )
            })}
        </div>
    )
}