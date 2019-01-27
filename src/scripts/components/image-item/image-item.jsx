import React from 'react';
import Image from './../image/image';

import ImageItemStyle from './image-item.css';

export default function ImageItem ({ image, onClick }) {
    return (
        <li className={ ImageItemStyle.imageItem } onClick={ onClick }>
            <Image width={ 150 } height={ 150 } image={ image } />
        </li>
    );
}
