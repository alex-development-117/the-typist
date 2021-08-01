import CRUD from '../interfaces/CRUD.interface'

const user:CRUD = {
    create:null,
    read:null,
    update:null,
    delete:null,
    login:null
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

user.read = (req:any, res:any) => {

    req.getConnection( (err:any, conn:any) => {
        conn.query('SELECT * FROM User', (err:any, users:any) =>{
            res.json(users);
        });
    });

}

user.login =(req:any, res:any) => {
    const {name, password} = req.body
    console.log(req);
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
    console.log(req.body);
    
    req.getConnection(async (err:any, conn:any) => {
        if(err)return err;
        conn.query(`SELECT Count(*) FROM User WHERE name="${name}"`, (err:any, count:any) =>{
            if(err)res.json(err);
            count = JSON.stringify(count);
            count = JSON.parse(count);
            if(count[0]['Count(*)']===0){
                conn.query(`UPDATE User SET name='${name}', rol='${rol}' WHERE id=${id}`, (err:any, user:any) =>{
                    if(err)res.json(err);
                    res.json(user);
                });
            }else{
                res.json({errorMessage: `The username ${name}, already exists`});
            }
        });
        

    });
}

user.delete = (req:any, res:any) => {
    const {id} = req.params
    console.log(id);
    req.getConnection( (err:any, conn:any) => {
        conn.query(`DELETE FROM User WHERE id=${id}`, (err:any, user:any) =>{
            console.log(user);
            
            res.json(user);
        });
    });
}

module.exports = user;