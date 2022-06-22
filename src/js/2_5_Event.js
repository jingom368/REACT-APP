import React from 'react'
import '../assets/css/2_5_event.scss'

function Event() {
    return ( 
        <section id="event" className="event">
            
            <div className="event_box">
                <div className="event_title">Quiz Event</div>
                <div className="event_text">Part1 무용수의 움직임을 관람하신 후,
                <br/>작품명과 내용을 맞추어 제출해주세요.</div>
                <div className="event_notice">*추첨을 통해, 정답을 맞추신 분들께 기프티콘을 보내드려요.</div>
                <form action="/program" method="post" name="event_action">
                    <div className="event_list_1 row_flex">
                        <div className="event_list_number">Team 1.</div>
                        <select id="team1" className="event_list_choice" name="select_1" required>
                            <option className="event_list_choice_0" value="" hidden>작품명을 선택해 주세요</option>
                            <option className="event_list_choice_1" value="바람">바람</option>
                            <option className="event_list_choice_1" value="보라연기">보라연기</option>
                            <option className="event_list_choice_1" value="내적댄스">내적댄스</option>
                            <option className="event_list_choice_1" value="생명력에 춤을">생명력에 춤을</option>
                            <option className="event_list_choice_1" value="서로의 존재 그리고 위로">서로의 존재 그리고 위로</option>
                        </select>
                    </div>
                    <div className="event_list_1 row_flex">
                        <div className="event_list_number">Team 2.</div>
                        <select id="team2" className="event_list_choice" name="select_2" required>
                            <option className="event_list_choice_0" value="" hidden>작품명을 선택해 주세요</option>
                            <option className="event_list_choice_1" value="바람">바람</option>
                            <option className="event_list_choice_1" value="보라연기">보라연기</option>
                            <option className="event_list_choice_1" value="내적댄스">내적댄스</option>
                            <option className="event_list_choice_1" value="생명력에 춤을">생명력에 춤을</option>
                            <option className="event_list_choice_1" value="서로의 존재 그리고 위로">서로의 존재 그리고 위로</option>
                        </select>
                    </div>
                    <div className="event_list_1 row_flex">
                        <div className="event_list_number">Team 3.</div>
                        <select id="team3" className="event_list_choice" name="select_3" required>
                            <option className="event_list_choice_0" value="" hidden>작품명을 선택해 주세요</option>
                            <option className="event_list_choice_1" value="바람">바람</option>
                            <option className="event_list_choice_1" value="보라연기">보라연기</option>
                            <option className="event_list_choice_1" value="내적댄스">내적댄스</option>
                            <option className="event_list_choice_1" value="생명력에 춤을">생명력에 춤을</option>
                            <option className="event_list_choice_1" value="서로의 존재 그리고 위로">서로의 존재 그리고 위로</option>
                        </select>
                    </div>
                    <div className="event_list_1 row_flex">
                        <div className="event_list_number">Team 4.</div>
                        <select id="team4" className="event_list_choice" name="select_4" required>
                            <option className="event_list_choice_0" value="" hidden>작품명을 선택해 주세요</option>
                            <option className="event_list_choice_1" value="바람">바람</option>
                            <option className="event_list_choice_1" value="보라연기">보라연기</option>
                            <option className="event_list_choice_1" value="내적댄스">내적댄스</option>
                            <option className="event_list_choice_1" value="생명력에 춤을">생명력에 춤을</option>
                            <option className="event_list_choice_1" value="서로의 존재 그리고 위로">서로의 존재 그리고 위로</option>
                        </select>
                    </div>
                    <div className="event_list_1 row_flex">
                        <div className="event_list_number">Team 5.</div>
                        <select id="team5" className="event_list_choice" name="select_5" required>
                            <option className="event_list_choice_0" value="" hidden>작품명을 선택해 주세요</option>
                            <option className="event_list_choice_1" value="바람">바람</option>
                            <option className="event_list_choice_1" value="보라연기">보라연기</option>
                            <option className="event_list_choice_1" value="내적댄스">내적댄스</option>
                            <option className="event_list_choice_1" value="생명력에 춤을">생명력에 춤을</option>
                            <option className="event_list_choice_1" value="서로의 존재 그리고 위로">서로의 존재 그리고 위로</option>
                        </select>
                    </div>
                    <div className="event_list_name">
                        이름
                    </div>
                    <input type="name" className="event_name" name="event_name" autoComplete="off" maxLength="4" required />
                    <div className="event_list_phonenumber">
                        전화번호
                    </div>
                    <input type="phonenumber" className="event_phonenumber" name="event_phonenumber" autoComplete="off" maxLength="13" pattern="^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$" required />
                    <div className="event_list_notice_2">
                        입력하신 번호로 기프티콘이 발송되오니 정확히 입력해 주세요
                    </div>
                    <button name="event_list_button" className="event_list_button" onClick="button();">정답 제출하기</button>
                    <div className="event_list_agree">
                        <div className="event_list_text">
                            기프티콘 수령을 위한 <a href="https://www.notion.so/bfa7747d14b1495f9923ac8dab8ea43d">개인정보활용</a>에 동의합니다.
                        </div>
                        <div className="event_list_check">
                            <input type="checkbox" id="check" name="event_answer[]" value="1" required />
                            <label className="label" htmlFor="check"></label>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    );
}
    
export default Event;