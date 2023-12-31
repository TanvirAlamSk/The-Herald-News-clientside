import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftComponent = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/news-category')
            .then((responce) => responce.json())
            .then((data) => setCategories(data))
    }, [])

    return (
        <div>
            <h3>All Category</h3>
            {
                categories.map((category) => <p key={category.id}>
                    <Link to={`/news-category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftComponent;