import React, { useState } from 'react'
import data from '../../data.json'
import '../../App.scss'

export default function ScheduleFilled({ available, color }) {

    return (
        <div className="Available">
            {available.map((time, index) => {
                return (
                    <div style={{
                        position: "absolute",
                        width: "150px",
                        height: `${(time.end - time.start) * 20}px`,
                        width: "150px",
                        backgroundColor: `${color}98`,
                        margin: "0px",
                        padding: "0px",
                        borderRadius:"10px",
                        top: `${(50+15+40+(time.start*20))}px`
                        
                    }}>
                        <p id="Available">Available</p>
                    </div>
                )
            })}
        </div>
    )
}