import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTests } from '../components/Api';
import { NavLink } from "react-router-dom";
import { List, Card, Button } from 'antd';
import { BackButton } from '../components/BackButton';


export const Tests = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['tests'],
        queryFn: fetchTests,
    });
    console.log(data);


    if (isLoading) return <p>Загрузка тестов...</p>;
    if (isError) return <p>Ошибка загрузки тестов</p>;

    return (
        <>
        <h1>Тесты</h1>
        <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={data}
            renderItem={(test) => (
                <List.Item>
                    <Card title={test.title}>
                        <Button type="primary" href={`/tests/${test.id}`}>
                            Начать тест
                        </Button>
                    </Card>
                </List.Item>
            )}
        />
        <BackButton/>
        </>
        
    );
};


