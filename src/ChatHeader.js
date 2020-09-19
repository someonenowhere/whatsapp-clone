import { Avatar } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import './ChatHeader.css'

export function ChatHeader() {
    return (
        <div className='chatHeader__container'>
            <div id='chat__info'>
                <Avatar className='avatar__icon'/>
                <div>
                    <h4>MERN()</h4>
                    <p>Last seen at...</p>
                </div>
            </div>
            <div className='icon__buttons'>
                <SearchIcon />
                <AttachFileIcon />
                <MoreVertIcon />
            </div>
        </div>
    )
}