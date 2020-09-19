import React from 'react'
import './ChatFooter.css'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { IconButton } from '@material-ui/core';

export function ChatFooter() {
    return (
        <div className='chatFooter__container'>
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <input placeholder='Type a message' type='text' />
                <IconButton>
                    <MicIcon />
                </IconButton>
        </div>
    )
}