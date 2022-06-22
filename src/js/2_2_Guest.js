import React from 'react'
import '../assets/css/2_2_guest.scss'
import GuestPhoto from './component/2_Guest_photo'

function Guest() {
    return ( 
        <section id="guest" className="guest">
                    
        <div className="guest_box">
            <div className="guset_title">Guest. Celebration</div>
            
            <div className="guest_photo_wrap">
                <GuestPhoto></GuestPhoto>
                <GuestPhoto></GuestPhoto>
            </div>
        </div>

        </section>
    );
}

export default Guest;