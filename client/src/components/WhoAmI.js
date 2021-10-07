import React from "react";

const WhoAmI = () => {
    return (
        <div className="whoiam">
            <img
                className="whoiam__img"
                src="./img/whoiamimg.jpeg"
                alt="erika"
            ></img>
            <div className="whoiam__text">
                <h1> Erika Brasil </h1>
                <h3> Cadeaux créatifs </h3>
                <p> Un cadeau personnalisé est un véritable câlin emballé </p>
            </div>
        </div>
    );
};

export default WhoAmI;
