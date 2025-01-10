import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import AnswersList from '../components/AnswersList';
import { fetchTest, fetchQuestions, fetchAnswers } from '../components/Api';
import { BackButton } from "../components/BackButton"
import { Button } from 'antd';
// const fetchTest = async (testId) => {
//     const res = await fetch(`http://127.0.0.1:8081/api/tests/${testId}`);
//     if (!res.ok) throw new Error('Ошибка при загрузке данных теста');
//     return res.json();
// };

// const fetchQuestions = async (testId) => {
//     const res = await fetch(`http://127.0.0.1:8081/api/questions/?test=${testId}`);
//     if (!res.ok) throw new Error('Ошибка при загрузке вопросов');
//     return res.json();
// };

const TestPage = () => {
    const { testId } = useParams();

    const { data: test, isLoading: testLoading, isError: testError } = useQuery({
        queryKey: ['test', testId],
        queryFn: () => fetchTest(testId),
    });

    const { data: questions, isLoading: questionsLoading, isError: questionsError } = useQuery({
        queryKey: ['questions', testId],
        queryFn: () => fetchQuestions(testId),
    });

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [correctCount, setCorrectCount] = useState(null);
    const [error, setError] = useState(null);
    const [testResult, setTestResult] = useState(null);

    
    const handleAnswerChange = (questionId, answerText) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerText,
        }));
    };

   
    const handleSubmitAll = async () => {
        setError(null); 
        let correctAnswers = 0;

       
        for (const question of questions) {
            if (!selectedAnswers[question.id]) {
                setError('Пожалуйста, ответьте на все вопросы перед отправкой!');
                return;
            }
        }

       
        for (const question of questions) {
            const answers = await fetchAnswers(question.id);
            const selectedAnswer = selectedAnswers[question.id];
            const isCorrect = answers.find((answer) => answer.text === selectedAnswer)?.is_correct;

            if (isCorrect) {
                correctAnswers++;
            }
        }

        setCorrectCount(correctAnswers);

        
        const isPassed = correctAnswers / questions.length >= 0.5;
        setTestResult(isPassed ? <p style={{color: 'green'}}>Вы прошли тест!</p>  : <p style={{color: 'red'}}>Вы не прошли тест.</p>);

        
        setSelectedAnswers({});
    };

    if (testLoading || questionsLoading) return <div>Загрузка...</div>;
    if (testError) return <div>Ошибка при загрузке теста</div>;
    if (questionsError) return <div>Ошибка при загрузке вопросов</div>;

    return (
        <>
            <div>
                <h1>{test?.title}</h1>
                <ol>
                    {questions.map((question) => (
                        <li key={question.id}>
                            <h3>{question.text}</h3>
                            <ul style={{listStyleType: 'upper-alpha'}}>
                                <AnswersList
                                    questionId={question.id}
                                    selectedAnswer={selectedAnswers[question.id]} 
                                    onChange={(answerText) => handleAnswerChange(question.id, answerText)}
                                />
                            </ul>
                        </li>
                    ))}
                </ol>
                <Button type="primary" onClick={handleSubmitAll}>Ответить</Button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {correctCount !== null && (
                    <div>
                        <h2>Результат:</h2>
                        <p>{testResult}</p>
                        <p>
                            Вы ответили правильно на {correctCount} из {questions.length} вопросов.
                        </p>
                    </div>
                )}
            </div>
            <BackButton/>
        </>
    );
};

export default TestPage;
