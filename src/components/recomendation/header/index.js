import React from 'react';
import BurgerBar from '../burgerBar';

export default function Header({ money }) {
    const [activeBurger, setBurger] = React.useState(false)

    return (
        <section className="section__header">
               <header>
                    <div className="content fixed__content__header">
                        <div className="logo-div">
                            <img className="logo__header" src="/img/logo/logo.png" alt="" />
                            <button onClick={() => setBurger(true)} className="burger__header" />
                        </div>
                        <BurgerBar
                            active={
                                activeBurger ? 
                                'display-burger_bar-active' : 
                                'display-burger_bar-unactive'
                            } 
                            unActiveButton={() => setBurger(false)}
                        />
                        <div className="text__header">
                            <h1 className="title-text__header">recomendation</h1>
                        </div>
                        <div className="coin__header-div">
                            <img className="ico__coin-header" src="/img/coin/coin.png" alt="" />
                            <h1 className="count__coin__header">{money}</h1>
                        </div>
                    </div>
               </header>
        </section>
    );
}