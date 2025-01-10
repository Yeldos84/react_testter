import React from "react";
import { BackButton } from "../components/BackButton";
import { useQuery } from '@tanstack/react-query';
import { fetchTests, fetchQuestions, fetchAnswers, fetchUsers } from '../components/Api';
import AppHeader from "../components/Header";


const DataSection = ({ title, isLoading, isError, data, itemKey, itemText }) => (
    <div>
        <h2>{title}</h2>
        {isLoading && <p>Загрузка...</p>}
        {isError && <p>Ошибка при загрузке {title.toLowerCase()}</p>}
        {data && (
            <ol>
                {data.map((item) => (
                    <li key={item[itemKey]}>
                        <p>{item[itemText]}</p>
                    </li>
                ))}
            </ol>
        )}
    </div>
);

export const ApiPage = () => {
    const { data: tests, isLoading: testsLoading, isError: testsError } = useQuery({
        queryKey: ['tests'],
        queryFn: fetchTests,
    });

    const { data: questions, isLoading: questionsLoading, isError: questionsError } = useQuery({
        queryKey: ['questions'],
        queryFn: fetchQuestions,
    });

    const { data: answers, isLoading: answersLoading, isError: answersError } = useQuery({
        queryKey: ['answers'],
        queryFn: fetchAnswers,
    });

    const { data: users, isLoading: usersLoading, isError: usersError } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    return (
        <>  <AppHeader />
            <DataSection
                title="Тесты"
                isLoading={testsLoading}
                isError={testsError}
                data={tests}
                itemKey="id"
                itemText="title"
            />
            <DataSection
                title="Вопросы"
                isLoading={questionsLoading}
                isError={questionsError}
                data={questions}
                itemKey="id"
                itemText="text"
            />
            <DataSection
                title="Ответы"
                isLoading={answersLoading}
                isError={answersError}
                data={answers}
                itemKey="id"
                itemText="text"
            />
            <DataSection
                title="Пользователи"
                isLoading={usersLoading}
                isError={usersError}
                data={users}
                itemKey="id"
                itemText="username"
            />
            <BackButton />
        </>
    );
};
