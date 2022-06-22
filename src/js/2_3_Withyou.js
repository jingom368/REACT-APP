import React from 'react'
import '../assets/css/2_3_withyou.scss'
import ArtistPhoto from './component/3_Artist_photo'

function Withyou() {
    return ( 
        <section id="withyou" className="withyou">

        <div className="withyou_box">
            <div className="withyou_title">Part1. With You</div>
            <div className="withyou_profile">Dancer Profile</div>
            <div className="flex_wrap">
                <ArtistPhoto></ArtistPhoto>
                <div className="column_flex">
                    <div className="withyou_photo_hahyeon">
                        <img className="artist_hahyeon_none" alt=""/>
                        <img className="artist_hahyeon_active" alt=""/>
                    </div>
                    <div className="withyou_intro">
                        <div>Team 2.</div>
                        <div>김하현</div>
                    </div>
                </div>
                <div className="column_flex">
                    <div className="withyou_photo_seoyeon">
                        <img className="artist_seoyeon_none" alt=""/>
                        <img className="artist_seoyeon_active" alt=""/>
                    </div>
                    <div className="withyou_intro">
                        <div>Team 3.</div>
                        <div>인서연</div>
                    </div>
                </div>
                <div className="column_flex">
                    <div className="withyou_photo_minseop">
                        <img className="artist_minseop_none" alt=""/>
                        <img className="artist_minseop_active" alt=""/>
                    </div>
                    <div className="withyou_intro">
                        <div>Team 3.</div>
                        <div>김민섭</div>
                    </div>
                </div>
                <div className="column_flex">
                    <div className="withyou_photo_sohyun">
                        <img className="artist_sohyun_none" alt=""/>
                        <img className="artist_sohyun_active" alt=""/>
                    </div>
                    <div className="withyou_intro">
                        <div>Team 4.</div>
                        <div>배소현</div>
                    </div>
                </div>
                <div className="column_flex">
                    <div className="withyou_photo_sohee">
                        <img className="artist_sohee_none" alt=""/>
                        <img className="artist_sohee_active" alt=""/>
                    </div>
                    <div className="withyou_intro">
                        <div>Team 5.</div>
                        <div>한소희</div>
                    </div>
                </div>
            </div>
        </div>

        </section>
    );
}

export default Withyou;