import React from 'react';
import List from './../list/list';

import ImageListStyle from './image-list.css';

export default function ImageList ({ children, images }) {
    return (
        <ul className={ ImageListStyle.imageList }>
            <List list={ images }>
                { children }
            </List>
        </ul>
    );
}
