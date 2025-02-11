import React, { useState } from 'react';
import '../styles/styles.css';

interface Answer {
    text: string;
    isCorrect: boolean;
}

interface Question {
    question: string;
    answers: Answer[];
}

interface QuizProps {
    questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState<number>(0);
    const [progress, setProgress] = useState<boolean[]>(Array(questions.length).fill(false));
    const [showResults, setShowResults] = useState<boolean>(false);

    const handleAnswerClick = (index: number, isCorrect: boolean) => {
        setSelectedAnswerIndex(index);
        if (isCorrect) {
            setCorrectCount((prev) => prev + 1);
            const updatedProgress = [...progress];
            updatedProgress[currentQuestionIndex] = true;
            setProgress(updatedProgress);
        }
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswerIndex(null)
        }
    };

    const calculateScore = () => {
        setShowResults(true);
    };

    return (
        <div className='container'>
            <h2 className='questionHeader'>
                Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
            <hr />
            <h3 className='questionText'>{questions[currentQuestionIndex].question}</h3>
            <ul className='answerList'>
                {questions[currentQuestionIndex].answers.map((answer, index) => {
                    const isSelected = selectedAnswerIndex === index;
                    const isCorrect = answer.isCorrect;

                    return (
                        <li key={index} className='answerItem'>
                            <button
                                onClick={() => handleAnswerClick(index, isCorrect)}
                                className='answerButton'
                                style={{
                                    backgroundColor: isSelected 
                                        ? (isCorrect ? 'green' : 'red') 
                                        : 'lightgrey',
                                    color: isSelected ? 'white' : 'black',
                                }}
                                disabled={selectedAnswerIndex !== null}
                            >
                                {answer.text}
                            </button>
                        </li>
                    );
                })}
            </ul>
            {currentQuestionIndex < questions.length - 1 ? (
                <button className='nextButton' onClick={nextQuestion} disabled={selectedAnswerIndex === null}>
                    Next
                </button>
            ) : (
                <button className='nextButton' onClick={calculateScore}>
                    Show Results
                </button>
            )}

            <div className='progressContainer'>
                {progress.map((isCorrect, index) => (
                    <div
                        key={index}
                        className={`progressCircle ${isCorrect ? 'greenCircle' : ''}`}
                    >
                        {isCorrect ? '✓' : ''}
                    </div>
                ))}
            </div>
            
            { showResults && (
                    <h4 className='resultText'>
                        You got {correctCount} out of {questions.length} correct!
                    </h4>
            )}
        </div>
    );
};

export default Quiz;
