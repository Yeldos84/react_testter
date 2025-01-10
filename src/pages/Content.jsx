import React from "react";
import { BackButton } from "../components/BackButton";
import { RegButton } from "../components/RegButton";
import img from "../assets/illustr1.svg"
import { Flex } from "antd";
import { Button } from "antd/es/radio";

export const Content = () => {
    return (
        <>  
            <Flex align="center" justify="center" gap={100}>
                
            <div style={{width:"500px"}}>
                <h1>Крупнейший ресурс для онлайн-обучения в Казахстане</h1>
                <p>Подготовка к ЕНТ, ОЗП, МОДО, госаттестации, PISA, TIMSS, Эссе и четвертным срезам. Пройдите пробное тестирование</p>
                <RegButton/>
            </div>
            <div>
                <img src={img} alt="img" />
            </div>
            </Flex>
        </>
    );
};


