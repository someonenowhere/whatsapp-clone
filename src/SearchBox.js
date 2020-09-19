import React from 'react'
import './SearchBox.css'
import SearchIcon from '@material-ui/icons/Search'

export function SearchBox() {
    return (
        <div className='searchBox__container'>
            <div className='search__items'>
                <SearchIcon className='search__icon'></SearchIcon>
                <input placeholder='Search or start a new chat' type='text' ></input>
            </div>
        </div>
    )
} 