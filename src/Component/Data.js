import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Data = () => {
    const params = useParams();
    const { id } = params;
    const [count, setCount] = useState({});
    useEffect(() => {
        getDatabyId();
    });
    const getDatabyId = async (data) => {
        await axios
            .get('https://timenews.co.in/wp-json/wp/v2/posts/' + id, data)
            .then((res) => {
                // console.log(res.data)
                setCount(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <h3 className="mt-3 mb-3 fw-bold" dangerouslySetInnerHTML={{ __html: count?.title?.rendered }}></h3>
            <p className="text-center text-break" dangerouslySetInnerHTML={{ __html: count?.content?.rendered }}></p>
        </>
    );
     
};
//content.rendered
export default Data;
