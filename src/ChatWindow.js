import React from 'react'
import './ChatWindow.css'
import moment from "moment"

export function ChatWindow() {
    return (
        <div className='chatWindow__container'>
            <p id="chat__received">
                <span id='chatter'>Amir</span>
                This is the message.
                <span className='date__time'>{moment().format("DD-MM-YYYY hh:mm:ss")}</span>
            </p>
            <p id="chat__received">
                <span id='chatter'>Amir</span>
                This is the message.
                <span className='date__time'>{moment().format("DD-MM-YYYY hh:mm:ss")}</span>
            </p>
            <p id="chat__sent">
                <span id='chatter'>Amir</span>
                This is the message.
                <span className='date__time'>{moment().format("DD-MM-YYYY hh:mm:ss")}</span>
            </p>
            <p id="chat__received">
                <span id='chatter'>Amir</span>
                This is the message.
                <span className='date__time'>{moment().format("DD-MM-YYYY hh:mm:ss")}</span>
            </p>
            <p id="chat__sent">
                <span id='chatter'>Amir</span>
                This is the message.
                <span className='date__time'>{moment().format("DD-MM-YYYY hh:mm:ss")}</span>
            </p>
        </div>
    )
}