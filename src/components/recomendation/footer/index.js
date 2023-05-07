import React from 'react'; 

export default function FooterRec({ 
    name,
    version
 }) {
    return (
        <section className="footer">
            <div className="footer__container">
                <div className="row__footer">
                    <div className="personal__footer">
                        <img className="img__logo__footer" src="/img/icon people/ico.jpg" alt="" />
                        <h1 className="title__name__footer">{name}</h1>
                    </div>
                    <div>
                    </div>
                    <div className="oper__footer">
                        <h1 className="title__version-footer">v. {version}</h1>
                        <button className="settings__footer"></button>
                    </div>
                </div>
            </div>
        </section>
    );
}