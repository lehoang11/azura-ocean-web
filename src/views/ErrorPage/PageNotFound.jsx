import React from "react";
import { Link } from 'react-router-dom';
import "../../assets/css/404.css"
import img404 from "../../assets/img/404/404.svg"
import imgRocket from "../../assets/img/404/rocket.svg"
import imgEarth from "../../assets/img/404/earth.svg"
import imgMoon from "../../assets/img/404/moon.svg"
import imgAstronaut from "../../assets/img/404/astronaut.svg"

class PageNotFound extends React.Component {

    render () {
        return (
            <div>
                <div id="bg-purple-404">
                <div className="stars"> 
                    <div className ="" style={{textAlign : "center", padding :"50px"}}>
                    <h3 style = {{color : '#FFF',fontSize :'30px', fontWeight:600 }}>AZURA</h3>
                    </div>

                    <div className="central-body">
                        <img className="image-404" src={img404} width="300px" />
                        <Link to="/" className="btn-go-home">GO BACK HOME</Link>
                    </div>
                    <div className="objects">
                        <img className="object_rocket" src={imgRocket} width="40px" />
                        <div className="earth-moon">
                            <img className="object_earth" src={imgEarth} width="100px" />
                            <img className="object_moon" src={imgMoon} width="80px" />
                        </div>
                        <div className="box_astronaut">
                            <img className="object_astronaut" src={imgAstronaut} width="140px" />
                        </div>
                    </div>
                    <div className="glowing_stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>

                    </div>

                </div>

            </div>
            </div>
        );
    }
}

export default PageNotFound;