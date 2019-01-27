import React from 'react';

import ImageList from './../image-list/image-list';
import ImageItem from './../image-item/image-item';

import Selection from './../selection/selection';
import FullscreenImage from './../fullscreen-image/fullscreen-image';

export default function Gallery ({ images }) {
    return (
        <Selection>
            {
                ({ select, deselect, selected }) => (
                    <div>
                        {
                            selected && (
                                <FullscreenImage image={ selected } onClick={() => deselect()} />
                            )
                        }

                        <ImageList images={ images }>
                            {
                                (image, index) => (
                                    <ImageItem key={ index } image={ image } onClick={() => select(image)} />
                                )
                            }
                        </ImageList>
                    </div>
                )
            }
        </Selection>
    );
}
