import React from 'react'
import '../../assets/css/components/3_program_list.scss'
import polygon from "../../assets/svg/polygon.svg"
// import polygon_1 from "../../assets/svg/polygon_1.svg"

function ProgramList(props) {
    return (
        <div className="program_list_down_1">
        {props.title}
            <img className="program_polygon" src={polygon} alt=""/>
        </div>
        /* <div className="program_list_1">
            <div className="row_flex">
                <div className="program_list_title">바람</div>
                <img className="program_polygon" src={polygon_1} alt=""/>
            </div>
            <div className="program_list_text">바람이 분다.
            <br/>이제야 이 간절한 덫을 놓는다.</div>
        </div> */
    );
}
    
export default ProgramList;