
import React from 'react';
import '../App.css'


function Question (props) {

    const {question,selectedOption, onSubmit, onOptionChange} = props;

    return (
        <div>
            <h3>Question {question.id}</h3>
            <h5>{question.question}</h5>
            <form onSubmit={onSubmit} className="mt-2 mb-2">
            <div className='options'>
                {question.options.map((option, index) => {
                    return (
                <div className="form-check" key={index}>
                    <input type="radio" name="option" 
                    value={option}
                    checked={selectedOption === option}
                    onChange = {onOptionChange} 
                    className="form-check-input" />
                    <label className="form-check-label">{option}</label>
                </div> 
                    );
                })}    
            </div>
            <button type="submit" className="btn btn-primary mt-2">
                SUBMIT
            </button>
            </form>
        </div>
    );

}

export default Question;