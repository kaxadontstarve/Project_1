import React, { useState } from 'react'
import cl from "./Footer.module.css";
import FooterColumn from './FooterColumn';
import logo from "./imgs/Frame 24 3.png";
import telegram from "./imgs/Vector (1).svg";
import playMarket from "./imgs/Vector (2).svg";
import appleMarket from "./imgs/Vector (3).svg";
import vk from "./imgs/Vector (4).svg";


const Footer = () => {
    return (
        <div className={cl.footer}>
            <div className={cl.footer__body}>
                <FooterColumn title='Заказчику' items={['Добавить заказ', 'Мастера и бригады', 'Как это работает?']} />
                <FooterColumn title='Исполнителю' items={[' Начать работу', 'Заказы', 'Условия и цены']} />
                <FooterColumn title='Компания' items={[' О проекте', 'Поддержка', 'Сообщество']} />
                <div className={cl.footer__column}>
                    <div className={cl.footer__title}>Мобильные приложения</div>
                    <div className={cl.footer__row}>
                        <div className={cl.footer__items}>
                            <div className={cl.footer__item_text}><a href='#'>Для заказчика</a></div>
                            <div className={cl.footer__row}>
                                <a href='#'><img src={appleMarket} /></a>
                                <a href='#'><img src={playMarket} /></a>
                            </div>
                        </div>
                        <div className={cl.footer__items}>
                            <div className={cl.footer__item_text} > <a href='#'>Для исполнителя</a></div >
                            <div className={cl.footer__row}>
                                <a href='#'><img src={appleMarket} /></a>
                                <a href='#'><img src={playMarket} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.footer__column + ' ' + cl.img_block}>
                    <a href='#'><img src={logo} /></a>
                    <a href='#'><img src={vk} /></a>
                    <a href='#'><img src={telegram} /></a>
                </div>
            </div >
        </div >


    )
}
export default Footer;
