import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { IconButton } from '@material-ui/core'
import './SearchHeader.css'

function SearchHeader() {
    return (
        <div className='icon__container'>
            <Avatar className='user__avatar'></Avatar>
            <div>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    )
}

export { SearchHeader };