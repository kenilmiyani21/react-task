import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Food2() {
    useEffect(() => {
        getimage();
    }, []);
    const [news, setNews] = useState([]);
    const getimage = async () => {
        await axios.get('https://timenews.co.in/wp-json/wp/v2/posts?categories=15&page=2').then((res) => {
            setNews(res.data);
            console.log(res.data[1]);
            // console.log(res.data[1].yoast_head_json.og_image[0].url);
        });
    };

    return (
        <div>
            {news.map((items) => (
                <div>
                    <div className=" mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={items.yoast_head_json.og_image[0].url} alt="random" className="image1" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title fw-bold">{items.title.rendered}</h2>
                                    <p className="card-text">{items.excerpt.rendered}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="container">
                        <div className="image-wrapper">
                            <img src={items.yoast_head_json.og_image[0].url} alt="random" className="image1" />
                        </div>
                        <div className="text-wrapper">
                            <h2> {items.title.rendered} </h2>
                            <h6> {items.excerpt.rendered} </h6>
                        </div>
                    </div> */}
                </div>
            ))}
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <Link className="page-link" to="/food">
                            1
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="/food2">
                            2
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="/food3">
                            3
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="/food2">
                            next
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Food2;
