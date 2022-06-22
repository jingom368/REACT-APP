import React from 'react'
import '../assets/css/2_6_part2.scss'

function Part2() {
    return ( 
        <section id="part2" className="part2">
            <div className="table_box">
                <div className="table_title">Part2. The Table & The Chairs</div>
                <div className="table_profile">Dancer Profile</div>

                <div className="flex_wrap">
                    <div className="column_flex">
                        <div className="table_photo_yochan">
                            <img className="artist_yochan_none" alt="" />
                            <img className="artist_yochan_active" alt="" />
                        </div>
                        <div className="table_intro">
                            <div>Director</div>
                            <div>강요찬</div>
                        </div>            
                    </div>
                    <div className="column_flex">
                        <div className="table_photo_hyunjin">
                            <img className="artist_hyunjin_none" alt="" />
                            <img className="artist_hyunjin_active" alt="" />
                        </div>
                        <div className="table_intro">
                            <div>Dancer</div>
                            <div>육현진</div>
                        </div>
                    </div>
                    <div className="column_flex">
                        <div className="table_photo_jonghwan">
                            <img className="artist_jonghwan_none" alt="" />
                            <img className="artist_jonghwan_active" alt="" />
                        </div>
                        <div className="table_intro">
                            <div>Dancer</div>
                            <div>이종환</div>
                        </div>
                    </div>
                    <div className="column_flex">
                        <div className="table_photo_dahyun">
                            <img className="artist_dahyun_none" alt="" />
                            <img className="artist_dahyun_active" alt="" />
                        </div>
                        <div className="table_intro">
                            <div>Dancer</div>
                            <div>김다현</div>
                        </div>
                    </div>
                    <div className="column_flex">
                        <div className="table_photo_yunseo">
                            <img className="artist_yunseo_none" alt="" />
                            <img className="artist_yunseo_active" alt="" />
                        </div>
                        <div className="table_intro">
                            <div>Dancer</div>
                            <div>김윤서</div>
                        </div>
                    </div>
                    <div className="column_flex">
                        <div className="table_photo_youngju">
                            <img className="artist_youngju_none" alt="" />
                            <img className="artist_youngju_active" alt="" />
                        </div>
                        <div className="table_intro">
                            <div>Dancer</div>
                            <div>예영주</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
    
export default Part2;