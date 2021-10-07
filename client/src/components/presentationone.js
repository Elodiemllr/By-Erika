import React from "react";
const PresentationOne = () => {
    return (
        <div className="presentationOne">
            <div className="presentationOne__left">
                <div className="presentationOne__left__div" id="one">
                    <img
                        src="./img/erikaone.jpg"
                        alt="erika"
                        className="presentationOne__left__one"
                    ></img>
                </div>
                <div className="presentationOne__left__div" id="two">
                    <img
                        src="./img/erikatwo.jpg"
                        alt="erika"
                        className="presentationOne__left__two"
                    ></img>
                </div>
                <div className="presentationOne__left__div" id="three">
                    <img
                        src="./img/erikathree.jpg"
                        alt="erika"
                        className="presentationOne__left__three"
                    ></img>
                </div>
            </div>

            <div className="presentationOne__right">
                <div className="presentationOne__right__text">
                    <h3> Moi c'est Erika Brasil .. </h3>
                    <p>
                        Brésilienne, résident au Luxembourg depuis 2009. En 2019
                        me survint l’idée de travailler à la réalisation de
                        cadeaux personnalisés et je peux dire que ce fut une des
                        meilleures décisions de toute ma vie . Je vois mon
                        travail comme une mission! Je touche le cœur des gens de
                        façon simple et spécial. Je me sens privilégiée de
                        pouvoir montrer de façon tangible, tout l’amour, le
                        bonheur, le respect, et la gratitude de mes clients
                        envers ceux qui reçoivent les cadeaux personnalisés.
                    </p>
                </div>
                <div className="presentationOne__right__button">
                    <button> En savoir +</button>
                </div>
            </div>
        </div>
    );
};

export default PresentationOne;
