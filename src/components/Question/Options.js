import React from 'react'
import { RadioButtons, Text } from '../Options';

const getOptions = (type, item) => {
    switch (type) {
        case 'radio':
        case 'multiple':
            return <RadioButtons item={item} />
        case 'fill_in_blank':
            return <Text item={item} />
        default:
            break;
    }
}
export default class Options extends React.Component {
    render() {
        const { id, options, onChange, disabled } = this.props, styles = {}
        let optionsDom = getOptions(this.props.type, { id, onChange, options });
        if (disabled) {
            styles.pointerEvents = 'none'
            styles.opacity = 0.4
        }

        return (
            <div className="options" style={styles}>
                {optionsDom}
            </div>
        );
    }
}