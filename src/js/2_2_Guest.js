import React from 'react'
import '../assets/css/2_2_guest.scss'
import ArtistPhoto from './component/2_Artist_photo'

function Guest() {
    const artist_info =  
    [ 
        {team:"Celebratory Recital", name:"조아란", image:"aran"},
        {team:"Celebratory Dance", name:"김하현", image:"hyekyung"},
    ]
    const photo_box = []
    for(let i=0; i<artist_info.length; i++) {
        photo_box.push(<ArtistPhoto artist_info={artist_info[i]} artist_group="guest" artist_class="guest"></ArtistPhoto>)
    }
    return ( 
    
        <div className="guest_box">
            <div className="guset_title">Guest. Celebration</div>
            <div className="guest_photo_grid">
                {photo_box}
            </div>
        </div>

    );
}

export default Guest;