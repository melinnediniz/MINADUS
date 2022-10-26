import React, { useEffect, useState } from "react";
import { MdClose as CloseIcon } from "react-icons/md";
import { RankingService } from "../../services/RankingService";
import { UserService } from "../../services/UserService";
import { Loading } from "../Loading";

import "./styles.css";

const rankingService = new RankingService();

export const Ranking = ({ onClose, visible = false, level = "easy" }) => {
    const [users, setUsers] = useState();

    useEffect(() => {
        async function fetch() {
            const newUsers = await rankingService.fetchUsers(level);
            const sortedUsers = newUsers.sort((a, b) =>
                a.time > b.time ? -1 : 1
            );
            setUsers(sortedUsers);
        }

        fetch();
    }, []);

    function renderUser(user, index) {
        return (
            <li className="user" key={index}>
                <label className="classification">#{index + 1}</label>
                <label className="name">{user.name}</label>
                <label className="time">{user.time} segundos</label>
            </li>
        );
    }
    return (
        <dialog open={visible} className="dialog">
            <header className="header">
                <button onClick={onClose} className="button">
                    <CloseIcon size={24} />
                </button>
                <h1 className="title">TOP 20 PLAYERS</h1>
            </header>
            <Loading suspendWhile={users === undefined}>
                {users !== undefined && users.length !== 0 ? (
                    <ul className="users">{users?.map(renderUser)}</ul>
                ) : (
                    <label className="info">Sem jogadores ranqueados.</label>
                )}
            </Loading>
        </dialog>
    );
};
