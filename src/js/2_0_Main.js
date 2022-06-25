import React from 'react'
import '../assets/css/2_0_main.scss'
import Introduction from './2_1_Introduction'
import Guest from './2_2_Guest'
import Withyou from './2_3_Withyou'
import Program from './2_4_Program'
import Event from './2_5_Event'
import Part2 from './2_6_Part2'
import Chair from './2_7_Chair'
import Support1 from './2_8_Support1'
import Support2 from './2_9_Support2'

function Main() {
    return ( 
    <main>
        <div className="item"><div className='item_box'><Introduction></Introduction></div></div>
        <div className="item"><div className='item_box'><Guest ></Guest></div></div>
        <div className="item"><div className='item_box'><Withyou ></Withyou></div></div>
        <div className="item"><div className='item_box'><Program ></Program></div></div>
        <div className="item"><div className='item_box'><Event ></Event></div></div>
        <div className="item"><div className='item_box'><Part2 ></Part2></div></div>
        <div className="item"><div className='item_box'><Chair ></Chair></div></div>
        <div className="item"><div className='item_box'><Support1 ></Support1></div></div>
        <div className="item"><div className='item_box'><Support2 ></Support2></div></div>
    </main> 
    );
}

export default Main;