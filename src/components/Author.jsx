import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthor } from "../store/userSlice";

const Author = () => {
    let author = useSelector((state) => state.users.author);
    let { id } = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAuthor(id));
    }, []);

    return (
        <>
            <div>
                <h1>{author.name}</h1>
                <h2>{author.email}</h2>
                <h2>{author.phone}</h2>
                <h2>{author.website}</h2>
                <h2>{author.company.name}</h2>
            </div>
        </>
    );
};

export default Author;
