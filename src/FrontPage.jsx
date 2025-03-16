import React, { useEffect, useState } from 'react'
import "./frontPage.css"
export default function FrontPage() {
    const [nowTime, setNowTime] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => setNowTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])
    return (
        <div className='clock-container'>
            {nowTime.toLocaleTimeString()}
        </div>
    )
}
