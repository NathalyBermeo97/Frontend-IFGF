import React from "react";


const Carousel = () => {


    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{margin:'60px'}}>
            <div className="carousel-inner" >
                <div className="carousel-item active" >
                    <img src="https://scontent.fuio1-1.fna.fbcdn.net/v/t1.6435-9/120089115_3922227411140362_8621422112295952311_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=0Cb_TEzfZwEAX-wGvis&_nc_ht=scontent.fuio1-1.fna&oh=00_AT8XD9cTCc7ObzG0fJEVSNsR-TkAQaIXeo_V71QkZ0bAkg&oe=61E2932F"  className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/121634208_3996793663683736_706786937003803578_n.png?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=SUEsKrvU2mEAX-x037I&_nc_ht=scontent.fuio1-2.fna&oh=00_AT-v566GoGpzc0kaDCCuDU9CewDKcUVl6CN7OVdL2jez5g&oe=61E2128C" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/133714402_4221521751210925_371313037717639245_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=pptFNXBvpgIAX-daEQE&_nc_ht=scontent.fuio1-2.fna&oh=00_AT9d-WKlztvJe8Q_4SKVCJRqAYo7FHlhlq3iGM1kDR6n3Q&oe=61E11C24" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carousel;