import React from 'react'
import '../../assets/css/components/2_artist_photo.scss'

function ArtistPhoto(props) {
    const artist_info = props.artist_info;
    const artist_group = props.artist_group;
    const artist_class = props.artist_class;
    const artist_image = []
    const artist_text = []
    artist_image.push(
        <picture>
            <source media="(max-width:1023px)" srcSet={require('../../assets/img/' + artist_group + '/' + artist_info.image + '.png')} />
            <source media="(min-width:1024px)" srcSet={require('../../assets/img/' + artist_group + '/' + artist_info.image + '_2.png')} />
            <img key={artist_info.name} className={artist_class + "_image_none"} alt="" src={require('../../assets/img/' + artist_group + '/' + artist_info.image + '.png')}/>
        </picture>
    );
    artist_image.push(
        <picture>
            <source media="(max-width:1023px)" srcSet={require('../../assets/img/' + artist_group + '/' + artist_info.image + '_active.png')} />
            <source media="(min-width:1024px)" srcSet={require('../../assets/img/' + artist_group + '/' + artist_info.image + '_active_2.png')} />
            <img key={artist_info.name} className={artist_class + "_image_active"} alt="" src={require('../../assets/img/' + artist_group + '/' + artist_info.image + '_active.png')}/>
        </picture>
    );
    artist_text.push(<div>{artist_info.team}</div>);
    artist_text.push(<div>{artist_info.name}</div>);
    return (
        <div className={artist_class + "_photo_box"}>
            {artist_image}
            <div className={artist_class + "_intro row_flex"}>
                {artist_text}
            </div>
        </div>
    );
}
    
export default ArtistPhoto;