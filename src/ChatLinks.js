import React from 'react';
import {SearchHeader} from './SearchHeader'
import {ChatLinksPage} from "./ChatLinksPage";
import './ChatLinks.css'
import {SearchBox} from './SearchBox'

function ChatLinks(){
    return(
        <div className='chat__linkscontainer'>
            <SearchHeader/>
            <SearchBox/>
            <ChatLinksPage/>
        </div>
    )
}

export {ChatLinks}