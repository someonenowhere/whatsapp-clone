import React from 'react'
import './ChatLinksPage.css'
import { Avatar } from '@material-ui/core'

function ChatLinksPage() {
    return (
        <div className="chatLink__container">
            <div className="chat__body">
                <Avatar className='avatar'></Avatar>
                <div className='chat__name'>
                    <h3>MERN()</h3>
                    <p>Last message</p>
                </div>
            </div>
            <div className="chat__body">
                <Avatar className='avatar'></Avatar>
                <div className='chat__name'>
                    <h3>MERN()</h3>
                    <p>Last message</p>
                </div>
            </div>
            <div className="chat__body">
                <Avatar className='avatar'></Avatar>
                <div className='chat__name'>
                    <h3>MERN()</h3>
                    <p>Last message</p>
                </div>
            </div>
        </div>

    )
}

export { ChatLinksPage };