import React from 'react';
import { FormControl } from 'react-bootstrap'
export default (props) => {
    const {
        id,
        // defaultValue,
        onChange = () => console.trace("undefined onchange function")
    } = props.item;

    return (
        <div className="form-group">
            <FormControl placeholder="Enter Your answer" type="text"
                name={id} onChange={(e) => onChange(e.target.value ? e.target.value.toLowerCase() : '')} />
        </div>
    );
}