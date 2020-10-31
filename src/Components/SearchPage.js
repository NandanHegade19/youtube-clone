import React from 'react';
import '../Styles/SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import SearchChannelRow from './SearchChannelRow';
import SearchVideoRow from './SearchVideoRow';

function SearchPage() {
    return (
        <div className = "searchpage">
            <div className = "searchpage__filter">
                <TuneOutlinedIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>
            <SearchChannelRow
                image = "https://yt3.ggpht.com/a-/AOh14Gh1C396As470t_gfCS89NFeGGbaiONF26N2gQ=s68-c-k-c0x00ffffff-no-rj-mo" 
                channel = "Trout and Coffee"
                verified
                subs = "300k"
                noOfVideos = {22}
                description = "Your channel description"
            />
            <hr/>
            <SearchVideoRow  
                image = "https://i.ytimg.com/an_webp/QdjNQOvW3P4/mqdefault_6s.webp?du=3000&sqp=CMLU9vwF&rs=AOn4CLBRHc2Xh59Fd79bSn7xtJAty-SjCg" 
                title = "Peak Fall Foliage in New England (Experience Autumn" 
                channel = "Trout and Coffee" 
                views = "810k" 
                timestamp = "1 month ago" 
                subs = "300k"
                description = "Video description"
            />
        </div>
    )
}

export default SearchPage
