import React from 'react'
import '../assets/css/3_footer.scss'
import notion from "../assets/img/Notion.png"
import instagram from "../assets/img/Instagram.png"
import youtube from "../assets/img/YouTube.png"

function Footer() {
    return ( 
        <footer>
            <div className="footer_info">
                <div className="footer_info-left">
                    <div className="footer_info-contact">
                        Follow Us
                    </div>
                    <div className="footer_info-link">
                        <a className="footer_notion" href="https://jazzy-second-e86.notion.site/We-re-Project-Oumtt-70fd6fa703c045ee940342dedf63b7f1">
                        <img className="footer_info-link_image" src={notion} alt="" />
                        <div className="footer_info-link_text">Notion</div>
                        </a>
                        <a className="footer_instagram" href="https://www.instagram.com/project_oumtt/">
                        <img className="footer_info-link_image" src={instagram} alt="" />
                        <div className="footer_info-link_text">Instagram</div>
                        </a>
                        <a className="footer_youtube" href="https://www.youtube.com/channel/UCjaqvJXS6w5W7EtdPT-w4aQ">
                        <img className="footer_info-link_image" src={youtube} alt="" />
                        <div className="footer_info-link_text">Youtube</div>
                        </a>
                    </div>
                </div>
                <div className="footer_info-right">
                    <div className="footer_info-contact">
                        Contact Us
                    </div>
                    <form action="/program" method="post" className="footer_info-click">
                        <input type="contact" className="footer_input_box" name="contact" autoComplete="off" placeholder="이름 / 연락처 또는 메일" />
                        <div className="footer_input_notice_1">*움트의 소식을 받거나, 아티스트 참여를 원하시면 연락처를 남겨주세요 </div>
                        <button name="footer-submit-button2" className="footer-submit-button">연락하기</button>
                    </form>
                    <div className="footer_input_notice_2">*움트의 소식을 받거나, 아티스트 참여를 원하시면 연락처를 남겨주세요 </div>
                </div>
            </div>
            <div className="footer_info-line">
                <div className="footer_info-copyright">
                    Copyrightⓒ 2022. Oumtt. All right reserved.
                </div>
            </div>
        </footer>
    );
}
    
export default Footer;