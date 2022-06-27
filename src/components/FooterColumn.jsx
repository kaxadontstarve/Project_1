import React from 'react'
import cl from "./Footer.module.css";


const FooterColumn = ({ title, items }) => {

    return (
        <div className={cl.footer__column}>
            <div href='#' className={cl.footer__title}>
                {title}
            </div>
            {items.map((item) =>
                <a href='#' className={cl.footer__text}>
                    {item}
                </a>
            )}
        </div>
    )
}
export default FooterColumn;
