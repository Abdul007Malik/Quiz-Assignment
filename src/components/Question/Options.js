import React from 'react'
import RadioButtons from '../Options/RadioButtons';

const getOptions = (type, item) => {
    switch (type) {
        case 'radio':
            return <RadioButtons item={item} />
        default:
            break;
    }
}
export default class Options extends React.Component {
    render() {
        const { id, options, onChange } = this.props
        let optionsDom = getOptions(this.props.type, { id, onChange, options });
        return (
            <div className="options">
                {optionsDom}
            </div>
        );
    }
}