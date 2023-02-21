import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Beauty() {
    useEffect(() => {
        getimage();
    }, []);
    const [news, setNews] = useState([]);
    const getimage = async (data) => {
        await axios.get('https://timenews.co.in/wp-json/wp/v2/posts?categories=14',data).then((res) => {
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
                                    <h2
                                        className="card-title fw-bold"
                                        dangerouslySetInnerHTML={{
                                            __html: items.title.rendered,
                                        }}
                                    ></h2>
                                    <p
                                        className="card-text"
                                        dangerouslySetInnerHTML={{
                                            __html: items.excerpt.rendered,
                                        }}
                                    ></p>
                                    <Link to={`/Data/${items.id}`}>
                                        <button className="btn btn-outline-success">Read more...</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <nav aria-label="Page navigation example">
                <Link className="page-link" to="/entertainment"></Link>
            </nav>
        </div>
    );
}

export default Beauty;
