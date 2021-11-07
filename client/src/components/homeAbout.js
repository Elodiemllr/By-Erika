import React from "react";

const HomeAbout = () => {
    return (
        <div className="homeAbout" id="homeAbout__div1">
            <img
                className="homeAbout__img"
                src="./img/background.jpg"
                alt="backgroud img"
            />
            <div className="homeAbout__div" id="homeAbout__div2">
                <div className="homeAbout__divtext" id="homeAbout__div3">
                    <h1 className="homeAbout__text" id="homeAbout__h1">
                        {" "}
                        ABOUT BY ERIKA{" "}
                    </h1>
                    <h2 className="homeAbout__text" id="homeAbout__h2">
                        Un cadeau personnalisé est un véritable câlin emballé
                    </h2>
                    <p className="homeAbout__text" id="homeAbout__p">
                        {" "}
                        By Erika vous permets d’offrir plus qu’un simple cadeau.
                        Une box 100% personnalisée pour correspondre à la
                        personnalité du receveur. Un anniversaire ? Envie de
                        dire merci ? Une demande en mariage ? Alors la box est
                        votre meilleur allié.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
