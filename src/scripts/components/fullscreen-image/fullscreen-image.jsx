import React from 'react';
import Image from './../image/image';

import FullscreenImageStyle from './fullscreen-image.css';

export default function FullscreenImage ({ image, onClick }) {
    return (
        <div className={ FullscreenImageStyle.fullscreenImage } onClick={ onClick }>
            <Image image={ image } width={ 350 } height="auto" />
        </div>
    );
}
