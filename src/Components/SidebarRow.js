import React from 'react';
import '../Styles/SidebarRow.css';
import HomeIcon from '@material-ui/icons/Home';


function SidebarRow({title, Icon, selected}) {
    return (
        <div className = {`sidebarrow  ${selected && "sidebarrow__selected"}`}>
            <Icon className = "sidebarrow__icon"/>
            <h2 className = "sidebarrow__title"> {title} </h2>
        </div>
    )
}

export default SidebarRow;
