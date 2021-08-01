import React, {useState, useEffect} from 'react'
import API from '../../api/request';
import './UserCard.scss';
import { User } from '../../interfaces/user.interface';
import { toast } from 'react-toastify';

const UserCard = (props: any) => {

    const [isEditting, setIsEditting] =  useState(false);
    const [editUser, setEditUser] = useState(props.user);

    useEffect(() => {
        
    }, []);

    useEffect(() => {
        if(!isEditting){
            if(editUser.name !== props.user.name || editUser.rol !== props.user.rol){
                API.patch(API.host, '/user/patch/', editUser).then((res) => {
                    const message = res as any;
                    if(message.errorMessage){
                        toast.error(message.errorMessage);
                    }else{
                        toast.success("The user was actualized successfully");
                        API.get(API.host, '/user/get').then((res) => {    
                            toast.success("Users actualized successfully");
                            props.actualize(res as unknown as User[])
                        });
                    }
                    
                }).catch( () => toast.error("The user could not be updated"));
            }
        }
    }, [isEditting]);

    const handleOnClickEdit = () => {
        setIsEditting(!isEditting);
    }

    const handleOnClickDelete = () => {
        API.remove(API.host, '/user/delete/', props.user.id).then((res) => {
            toast.success("User deleted successfully");
            API.get(API.host, '/user/get').then((res) => {            
                props.actualize(res as unknown as User[]);
                toast.success("Users actualized successfully");
            });
        }); 
    }

    const handleOnChange = (event:any, value:string) => {
        Object.keys(editUser).find((key) => {
            if(editUser[key]===value){
                setEditUser({
                    ...editUser,
                    [key]: event.target.value
                })
                console.log(editUser);
            }
            return undefined;
        })
    }

    const renderIsEditting = () => {
        if(isEditting){
            return(
                <div className="user-card">
                    <div className="section id">
                        <div className="header center text-s">Id</div>
                        <div className="content center">{props.user.id}</div>
                    </div>
                    <div className="section name">
                        <div className="header center text-s">Name</div>
                        <div className="content center">
                            <input className="edit-input" value={editUser.name} onChange={(e) => {handleOnChange(e, editUser.name)}} type="text" />
                        </div>
                    </div>
                    <div className="section rol">
                        <div className="header center text-s">Rol</div>
                        <div className="content center">
                            <input className="edit-input" value={editUser.rol} onChange={(e) => {handleOnChange(e, editUser.rol)}} type="text" />
                        </div>
                    </div>
                    <div className="section buttons flex-1">
                        <div className="header center text-s">Actions</div>
                        {renderIsAdmin()}
                    </div>
                </div>
            );
        }
        return (
            <div className="user-card">
                <div className="section id">
                    <div className="header center text-s">Id</div>
                    <div className="content center">{props.user.id}</div>
                </div>
                <div className="section name">
                    <div className="header center text-s">Name</div>
                    <div className="content center">{props.user.name}</div>
                </div>
                <div className="section rol">
                    <div className="header center text-s">Rol</div>
                    <div className="content center">{props.user.rol}</div>
                </div>
                <div className="section buttons flex-1">
                    <div className="header center text-s">Actions</div>
                    {renderIsAdmin()}
                </div>
            </div>
        );
    }

    const renderIsAdmin = () => {
        if(props.user.rol==='ADMIN'){
            return (
                <div className="content center flex-1">
                    <div style={{textAlign: 'center'}}>The admin can't be deleted</div>
                </div>
            ); 
        }
        return (
            <div className="content center flex-1">
                <button onClick={handleOnClickDelete} className="button delete">Delete</button>
                <button onClick={handleOnClickEdit} className="button edit">{isEditting?'Save':'Edit'}</button>
            </div>
        );
    }

    return (
        <React.Fragment>
            {renderIsEditting()}
        </React.Fragment>        
    );
}

export default UserCard;