import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Shark", "Giraffe"],
        answer: "Blue Whale",
    },
]

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestionIndex].answer) {
            setScore(score + 1)
        }
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex)
        } else {
            setShowResult(true)
        }
    }
    return (
        <div>
            {showResult ? (
                <Result score={score} totalQuestions={questions.length} />
            ) : (
                <Question
                    question={questions[currentQuestionIndex]}
                    handleAnswer={handleAnswer}
                />
            )}
        </div>
    )
}

export default Quiz;