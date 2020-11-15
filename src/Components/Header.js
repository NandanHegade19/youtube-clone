import React from 'react';
import '../Styles/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Header() {

    const [searchText, setSearchText] = useState('');
    console.log("Serach", searchText)
    return (
        <div className = "header">
            <div className = "header__left">
                <MenuIcon/>
                <Link to = "/">
                    <img src = "https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c" alt = "Youtube-logo"
                    className = "header__logo"/>
                </Link>
            </div>
            <div className = "header__center">
                <input type = "text" value = {searchText} onChange = {e => setSearchText(e.target.value)} placeholder = "Search" ></input>
                <Link to = {`search/${searchText}`}>
                    <SearchIcon className = "header__searchButton"/>
                </Link>
            </div>
            <div className = "header__right">
                <VideoCallIcon className = "header__right__icons"/>
                <AppsIcon className = "header__right__icons"/>
                <NotificationsIcon className = "header__right__icons"/>
                <Avatar className = "header__right____icons"/>
            </div>
        </div>
    )
}

export default Header;
