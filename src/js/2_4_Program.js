import React from 'react'
import '../assets/css/2_4_program.scss'
import polygon from "../assets/svg/polygon.svg"
import polygon_1 from "../assets/svg/polygon_1.svg"

function Program() {
    return ( 
        <section id="program" className="program">
            
            <div className="program_box">
                <div className="program_title">Program List</div>
                <div className="program_notice">*작품 주제 및 내용은 1장 진행순서와 무관합니다. </div>
                <div className="program_list_down_1">
                    바람
                    <img className="program_polygon" src={polygon} alt=""/>
                </div>
                <div className="program_list_1">
                    <div className="row_flex">
                        <div className="program_list_title">바람</div>
                        <img className="program_polygon" src={polygon_1} alt=""/>
                    </div>
                    <div className="program_list_text">바람이 분다.
                    <br/>이제야 이 간절한 덫을 놓는다.</div>
                </div>
                <div className="program_list_down_2">
                    보라연기
                    <img className="program_polygon" src={polygon} alt=""/>
                </div>
                <div className="program_list_2">
                    <div className="row_flex">
                        <div className="program_list_title">보라연기</div>
                        <img className="program_polygon" src={polygon_1} alt=""/>
                    </div>
                    <div className="program_list_text">
                    </div>
                </div>
                <div className="program_list_down_3">
                    내적댄스
                    <img className="program_polygon" src={polygon} alt=""/>
                </div>
                <div className="program_list_3">
                    <div className="row_flex">
                        <div className="program_list_title">내적댄스</div>
                        <img className="program_polygon" src={polygon_1} alt=""/>
                    </div>
                    <div className="program_list_text">음악과 자연에 몸을 맡겨 춤을 추고 싶은 사람들을
                    <br/>위해 제가 같이 춰드릴게요! 둠칫둠칫 🕺🏾</div>
                </div>
                <div className="program_list_down_4">
                    생명력에 춤을
                    <img className="program_polygon" src={polygon} alt=""/>
                </div>
                <div className="program_list_4">
                    <div className="row_flex">
                        <div className="program_list_title">생명력에 춤을</div>
                        <img className="program_polygon" src={polygon_1} alt=""/>
                    </div>
                    <div className="program_list_text">서서히 드리워지는 그늘에
                    <br/>바람과 냄새가 짙어진다.
                    <br/> 
                    <br/>때론 나비가 되고
                    <br/>때론 사슴벌레가 되고
                    <br/>때론 이파리가 되어
                    <br/>춤을 추자
                    <br/>
                    <br/>그저 바람과 함께 춤을 추자</div>
                </div>
                <div className="program_list_down_5">
                    서로의 존재 그리고 위로
                    <img className="program_polygon" src={polygon} alt=""/>
                </div>
                <div className="program_list_5">
                    <div className="row_flex">
                        <div className="program_list_title">서로의 존재 그리고 위로</div>
                        <img className="program_polygon" src={polygon_1} alt=""/>
                    </div>
                    <div className="program_list_text">지나간 엄마의 시간,
                    <br/>지났던, 그리고 흐르지 않는 할머니의 시간.
                    <br/>
                    <br/>이제서야 흘러가는 나에게,
                    <br/>자연스럽게 지나갈 내 모든시간에게,
                    <br/>치열한 지금의 나에게 존재만으로도
                    <br/>가장 자연하고 아름답다고,
                    <br/>지나갔던 이유만으로 위로가 되는
                    <br/>
                    <br/>내게 가장 자연스러운 존재.</div>
                </div>
            </div>

        </section>    
    );
}
    
export default Program;