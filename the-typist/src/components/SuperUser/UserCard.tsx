import React from 'react'
import './UserCard.scss';

const UserCard = (props: any) => {
    console.log(props);

    return (
        <div className="user-card">
            <div className="id-container">
                <div className="header center text-s">Id</div>
                <div className="content center">{props.user.id}</div>
            </div>
            <div className="name-container">
                <div className="header center text-s">Name</div>
                <div className="content center">{props.user.name}</div>
            </div>
            <div className="rol-container">
                <div className="header center text-s">Rol</div>
                <div className="content center">{props.user.rol}</div>
            </div>
            <div className="buttons-container flex-1">
                <button className="button delete">Eliminar</button>
                <button className="button edit">Editar</button>
            </div>
        </div>
    );
}

export default UserCard;