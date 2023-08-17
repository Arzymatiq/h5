import React from "react";
import { getUser } from "../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import UseItem from "./UseItem";

const UserList = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    }, []);
    let { users, loading, error } = useSelector((state) => state.users);

    console.log(users);

    return (
        <div>
            {error ? (
                <h1>Error:{error}</h1>
            ) : (
                <div className="main_card_block">
                    {users.map((user) => (
                        <UseItem key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserList;
