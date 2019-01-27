import React from 'react';

export default class Selection extends React.Component {
    constructor (...args) {
        super(...args);

        this.state = {
            selected: null
        };
    }

    render () {
        const selected = this.state.selected;

        const select = selected => {
            this.setState({
                selected: selected,
            });
        };

        const deselect = () => {
            this.setState({
                selected: null,
            });
        };

        return this.props.children({
            select,
            deselect,

            selected,
        });
    }
}
