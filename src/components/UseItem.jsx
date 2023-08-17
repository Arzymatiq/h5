import React from "react";
import { getAuthor } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const UseItem = ({ user }) => {
    let navigate = useNavigate();
    return (
        <div className="card_block">
            <h1>{user.title}</h1>
            <h3>{user.body}</h3>
            <button onClick={() => navigate(`/author/${user.userId}`)}>
                about author
            </button>
        </div>
    );
};
export default UseItem;
