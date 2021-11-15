import React from "react";

const homeBox = () => {
    return (
        <div className="homeBox">
            <div className="homeBox__title">
                {" "}
                <h2>Car au final ce qui compte, c’est</h2>
                <h3>la quantité d’amour mit à l’interieur du cadeau</h3>
            </div>
            <div className="homeBox__bas">
                <div className="homeBox__text">
                    <div>
                        <p>
                            Que ce soit pour un cadeau d’anniversaire, pour des
                            remerciements ou simplement pour dire « Je t’aime »…
                            Découvrez nos cadeaux personnalisables. Un
                            savoir-faire unique qui a déjà séduit le Luxembourg.
                            Aussi séduisant à personnaliser qu’à recevoir,
                            choisissez, , personnalisé et composez votre cadeau{" "}
                        </p>
                        <div className="homeBox__text__button">
                            <button>Découvrir les box</button>
                        </div>
                    </div>
                </div>
                <div className="homeBox__img">
                    <img src="./img/box4.png" alt="box"></img>
                </div>
            </div>
        </div>
    );
};

export default homeBox;
