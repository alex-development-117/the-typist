import CRUD from '../interfaces/CRUD.interface'
const sqlConnection = require('../MySQLFunctionality/generalFunctions');
const NUMBER = 10;

const user:CRUD = {
    create:null,
    read:null,
    update:null,
    delete:null,
    login:null,
}

user.create = async (req:any, res:any) => {
    const {name, password} = req.body

    req.getConnection(async (err:any, conn:any) => {
        if(err)return err;

        conn.query(`SELECT Count(*) FROM User WHERE name = "${name}" AND password = "${password}"`, (err:any, user:any) =>{
            if(err)return err;
            user = JSON.stringify(user);
            user = JSON.parse(user);
            if(user[0]['Count(*)']===0){
                 conn.query(`INSERT INTO User (name, rol,password) VALUES("${name}", "USER","${password}");`, (err:any, user:any) =>{
                    if(err)return err;
                    res.json({message: 'The user was created successfully'});
                });
            }else{
                return res.json({errorMessage: 'The user already exist'});
            }
        });

    });
}

user.read = (req:any, res:any) => sqlConnection.select(req, res, 'User', null , false)

user.login =(req:any, res:any) => {
    const {name, password} = req.body
    req.getConnection( (err:any, conn:any) => {
        if(err)return err;
        conn.query(`SELECT Count(*) FROM User WHERE name = "${name}" AND password = "${password}"`, (err:any, user:any) =>{
            if(err)return err;
            user = JSON.stringify(user);
            user = JSON.parse(user);
            if(user[0]['Count(*)']===1){
                conn.query(`SELECT * FROM User WHERE name = "${name}" AND password = "${password}"`, (err:any, user:any) =>{
                    if(err)return err;
                    user = JSON.stringify(user);
                    user = JSON.parse(user);
                    res.json({
                        ...user,
                        authenticated: true
                    });
                });
            }else{
                res.json({authenticated:false, errorMessage: 'The password or the username is wrong'});
            }
        });
    });
}

user.update = (req:any, res:any) => {
    const {id, name, rol} = req.body
    sqlConnection.update(req, res, 'User', `id="${id}"`, `name="${name}", rol="${rol}"`);
}

user.delete = (req:any, res:any) => sqlConnection.remove(req, res, 'User', `id=${req.params.id}`);
  
module.exports = user;