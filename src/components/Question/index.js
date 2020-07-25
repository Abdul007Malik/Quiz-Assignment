/**
 * @author Abdul Malik
 * @email abdul007malik@hotmail.com
 * @create date 2020-07-25 12:32
 * @modify date 2020-07-25 12:32
 * @desc [description]
 */
import React from 'react'
import PropTypes from 'prop-types'
import Options from './Options'

class Question extends React.Component {
    static propTypes = {
        question: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    }

    state = {
        answer: null
    }
    onSubmit = () => {
        this.props.onSubmit({ answer: this.state.answer, id: this.props.id });
    }

    onChange = (answer) => {
        this.setState({ answer })
    }
    render() {
        const { id, question, options, type } = this.props;//, { answer } = this.state
        return (<div className={"quiz"}>
            <p>{`Question ${id}) ${question}`} </p>
            <Options id={id} type={type} options={options} onChange={this.onChange} />
            <input type={"submit"} value={"Submit"} onClick={this.onSubmit} />
        </div>)
    }
}

export default Question