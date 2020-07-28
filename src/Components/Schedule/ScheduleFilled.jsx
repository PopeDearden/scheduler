import React, { useState } from 'react'
import data from '../../data.json'
import '../../App.scss'

export default function ScheduleFilled({ available, color }) {

    return (
        <div className="Available">
            {available.map((time, index) => {
                return (
                    <div style={{
                        position: "relative",
                        width: "150px",
                        height: `${(time.end - time.start) * 20}px`,
                        width: "150px",
                        backgroundColor: `${color}95`,
                        margin: "0px",
                        padding: "0px",
                        bottom: `${(34 - time.start)*20-40}px`
                    }}>
                    </div>
                )
            })}
        </div>
    )
}