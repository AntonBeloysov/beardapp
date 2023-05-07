import React from 'react';
import { globalButtonBar, dangerButtonBar } from './buttonsObjects';

export default function burgerBar({ 
    active, 
    unActiveButton
}) {
    return (
        <div className={`scroll-bar ${active} burger_bar`}>
            <div className="header-content_burger">
                <div className="burger-logo">
                    <img className="logo__header" src="/img/logo/logo.png" alt="" />
                    <h1 className="burger_bar-title">Beard</h1>
                </div>
                <button onClick={unActiveButton} className="btn-burger_close"></button>
            </div>
            <h1 className="title-burger_bar">Menu</h1>
            <div className="container-button_burger-bar">
                {globalButtonBar.map(({ label }) => (
                    <button className="btn-global_router">{label}</button>
                ))}
            </div>
            <div className="container__danger-zone">
                <h1 className="title__danger-zone">danger zone</h1>
                <div className="container__button_dander-zone">
                    {dangerButtonBar.map(({ label }) => (
                        <button className="btn-danger_button">{label}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}