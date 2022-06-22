import React from 'react'
import '../assets/css/1_header.scss'

function Header() {
    return <header>
        <nav>
            <div className="nav_home">
                <a className="oumtt_link" href="/">Main</a>
                <a className="program_link" href="/program">
                    <div className="nav_active">
                        Program<div className="nav_point"></div>
                    </div>
                </a>
                <a className="nav_home_notion" href="https://jazzy-second-e86.notion.site/We-re-Project-Oumtt-70fd6fa703c045ee940342dedf63b7f1">
                    <div>Oumtt</div>
                </a>
            </div>
            <a href="https://open.kakao.com/o/gXx0f5je">
                <button className="nav_button">관객참여 Talk 가기</button>
            </a>
        </nav>
    </header>
}

export default Header;