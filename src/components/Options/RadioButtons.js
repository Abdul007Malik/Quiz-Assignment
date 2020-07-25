import React from 'react';
import { FormCheck } from 'react-bootstrap'
export default (props) => {
    const {
        id,
        // label,
        options,
        // defaultValue,
        onChange = () => console.trace("undefined onchange function")
    } = props.item;
    let optionId = null;
    return (
        <div className="form-group">
            {options.map(option => {
                optionId = typeof option === "string" ? option : option.id;
                return <FormCheck key={optionId} type="radio"
                    label={typeof option === "string" ? option : option.label}
                    value={optionId} name={id} onChange={(e) => onChange(e.target.value)} />
            })}
        </div>
    );
}