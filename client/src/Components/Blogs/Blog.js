import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { _id,name, title, description, address, img } = blog;

    const navigate = useNavigate();

    const handelBlogs = (id) => {
        navigate(`/blogdetails/${_id}`)

    }

    return (
        <div className='cursor-pointer' onClick={() => handelBlogs(_id)}>
            <div className="card w-11/12 mx-auto mb-10 lg:w-96 bg-base-100 border border-neutral hover:bg-[#0B3456] hover:text-white transform transition duration-500 hover:scale-105">
                <figure> <img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description} </p>
                 
                </div>
            </div>
        </div>
    );
};

export default Blog;