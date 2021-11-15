const HomeImage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 homeImage">
                    <img
                        src="./img/box1.jpg"
                        alt="box "
                        className="homeImage__box img-fluid card-img-top"
                    ></img>
                </div>
                <div className="col-md-4 homeImage">
                    <img
                        src="./img/box2.jpg"
                        alt="box"
                        className="homeImage__box img-fluid card-img-top"
                    ></img>
                </div>
                <div className="col-md-4 homeImage ">
                    <img
                        src="./img/box3.jpg"
                        alt="box"
                        className="homeImage__box img-fluid card-img-top"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default HomeImage;
