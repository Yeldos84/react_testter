import React from "react";
import { BackButton } from "../components/BackButton";
import { RegButton } from "../components/RegButton";
import img from "../assets/illustr1.svg"
import logo from "../assets/react.svg"
import { Flex } from "antd";
import { Button } from "antd/es/radio";
import { motion } from "motion/react"

export const Content = () => {
    return (
        <>
            <Flex align="center" justify="center" gap={100}>

                <div style={{ width: "500px" }}>
                    <h1>Крупнейший ресурс для онлайн-обучения в Казахстане</h1>
                    <p>Подготовка к ЕНТ, ОЗП, МОДО, госаттестации, PISA, TIMSS, Эссе и четвертным срезам. Пройдите пробное тестирование</p>
                    <div><RegButton /></div>
                    <motion.img src={logo} alt="logo"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        style={{ width: 80, height: 80, marginTop: '20px' }}
                    />
                </div>
                <div>
                    <motion.img src={img} alt="img"
                        whileHover={{
                            scale: 1.1,

                        }}
                    />
                </div>
            </Flex>
        </>
    );
};


