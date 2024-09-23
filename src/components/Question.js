import React from 'react'

const Question = ({ question, handleAnswer }) => {
    return (
        <div>
            <h2>{question.question}</h2>
            <ul>
                {question.options.map((option, index) => (
                    <li key={index}>
                        <button onClick={() => handleAnswer(option)}>{option}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Question;