import React from 'react';

import ImageStyle from './image.css';

export default function Image ({ image, width, height }) {
    return (
        <img className={ ImageStyle.image } width={ width } height={ height } src={ image } />
    );
}
