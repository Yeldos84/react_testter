import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTest, fetchQuestions, fetchAnswers } from '../components/Api';
// const fetchAnswers = async (questionId) => {
//     const res = await fetch(`http://127.0.0.1:8081/api/answers/?question=${questionId}`);
//     if (!res.ok) throw new Error('Ошибка при загрузке ответов');
//     return res.json();
// };

const AnswersList = ({ questionId, selectedAnswer, onChange }) => {
    const { data: answers, isLoading, isError } = useQuery({
        queryKey: ['answers', questionId],
        queryFn: () => fetchAnswers(questionId),
    });

    if (isLoading) return <div>Загрузка ответов...</div>;
    if (isError) return <div>Ошибка при загрузке ответов</div>;

    return (
        <>
            {answers.map((answer) => (
                <li key={answer.text}>
                    <label>
                        <input
                            type="radio"
                            name={`question-${questionId}`}
                            value={answer.text}
                            checked={selectedAnswer === answer.text} 
                            onChange={() => onChange(answer.text)}
                        />
                        {answer.text}
                    </label>
                </li>
            ))}
        </>
    );
};

export default AnswersList;
