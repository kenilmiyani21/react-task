import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
    useEffect(() => {
        getimage();
    }, []);
    const [news, setNews] = useState([]);
    const getimage = async () => {
        await axios.get('https://timenews.co.in/wp-json/wp/v2/posts').then((res) => {
            setNews(res.data);
            console.log(res.data[1]);
            // console.log(res.data[1].yoast_head_json.og_image[0].url);
        });
    };

    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div >
            <Slider {...setting}>
                {news.map((value) => (
                    <div>
                        <img src={value.yoast_head_json.og_image[0].url} key={value.id} alt="..." className="image2"></img>
                        <h5 className="textHome1">{value.yoast_head_json.title}</h5>
                        <p className="textHome2">{value.yoast_head_json.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Home;
