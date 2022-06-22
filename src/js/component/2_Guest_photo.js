import React from 'react'
import '../../assets/css/components/2_guest_photo.scss'

// const dancer_photo = {
//     "dancer_image": [
//       "yochan", "hyunjin", "jonghwan", "dahyun", "yunseo", "youngju",
//     ],
//     "dancer_role": [
//       "Director", "Dancer", "Dancer", "Dancer", "Dancer", "Dancer",
//     ],
//     "dancer_name": [
//       "강요찬", "육현진", "이종환", "김다현", "김윤서", "예영주",
//     ],
// }

// const oumtt_photo = {
//     "oumtt_image": [
//       "hasom", "hahyeon", "seoyeon", "minseop", "sohyun", "sohee",
//     ],
//     "oumtt_team": [
//       "Team1", "Team2", "Team3", "Team3", "Team4", "Team5",
//     ],
//     "oumtt_name": [
//       "오하솜", "김하현", "인서연", "김민섭", "배소현", "한소희",
//     ],
//   }

// const dancer_image = dancer_photo.dancer_image.map((img, index) =>
//   {
//     return <img key={index} className="artist_none" alt="~" src={require('../../assets/img/guest/' + img + '.png').default} />
//   }  
// )

// const oumtt_image = oumtt_photo.oumtt_image.map((img, index) =>
//   {
//     return <img key={index} className="artist_none" alt="~" src={require('../../assets/img/oumtt/' + img + '.png').default} />
//   }  
// )

// function Photo(props) {
//   let Image = () => {
//     return (
//       <div>
//         {dancer_image}
//       </div>
//     )
//   };

//   return <div>
//     {Image()}
//   </div>
// } 

// function Oumtt(props) {
//   let Image = () => {
//     return (
//       <div>
//         {oumtt_image}
//       </div>
//     )
//   };

//   return <div>
//     {Image()}
//   </div>
// } 

function GuestPhoto() {    
    return (
        <div className="guest_photo_box">
            <div className="guest_photo_aran">
                <img className="artist_aran_none" alt=""/>
                <img className="artist_aran_active" alt=""/>
            </div>
            <div className="guest_intro row_flex">
                <div>Celebratory Recital</div>
                <div>조아란</div>
            </div>
        </div>
    );
}
    
export default GuestPhoto;