import React from 'react'
import {ChatHeader} from './ChatHeader.js'
import {ChatWindow} from './ChatWindow'
import {ChatFooter} from './ChatFooter'
import './ChatBody.css'

export function ChatBody(){
    return (
        <div className='chatBody__container'>
            <ChatHeader/>
            <ChatWindow/>
            <ChatFooter/>
        </div>
    )
}