import React from 'react'
import '../assets/css/2_4_program.scss'
import ProgramList from './component/3_Program_list'


function Program() {
    const title = ['바람', '보라연기', '내적댄스', '생명력에 춤을', '서로의 존재 그리고 위로']
    const programlist = []
    for(let i=0; i<title.length; i++) {
        programlist.push(<ProgramList title={title[i]}></ProgramList>)
    }
    return ( 
        <div className="program_box">
            <div className="program_title">Program List</div>
            <div className="program_notice">*작품 주제 및 내용은 1장 진행순서와 무관합니다. </div>
            <div className="program_list_grid">
                {programlist}
            </div>
        </div> 
    );
}
    
export default Program;