const Constants = require('../constants/index')

interface CallBackConnection {
    (err:any, conn:any): void;
}

const mySQLConnection = (req:any, callback:CallBackConnection) => {
    req.getConnection(callback);
}

const genericUpdate = (conn:any, res:any, FROM:string, WHERE:string, SET:string) => {
    conn.query(`UPDATE ${FROM} SET ${SET} WHERE ${WHERE}`, (err:any, update:any) =>{
        if(err)throw new Error(Constants.SQLConst.ERROR_WITH_UPDATE(FROM, WHERE));
        res.json(update);
    });
}

const insert = (req:any, res:any, FROM:string, WHERE:string, KEYS:string, VALUES:string) => {
    mySQLConnection(req, (err, conn) => {
        if(err)throw new Error(Constants.SQLConst.ERROR_WITH_MY_SQL_CONNECTION);
        conn.query(`SELECT Count(*) FROM ${FROM} WHERE ${WHERE}`, (err:any, query:any) => {
            if(err)console.log(1);
            query = JSON.stringify(query);
            query = JSON.parse(query);
            if(query[0]['Count(*)']===0){
                
            }
        });

    })
}

const select = (req:any, res:any, FROM:string, WHERE:string|null = null, isCount:boolean = false): Object | number | null | void => {
    mySQLConnection(req, (err:any, conn:any) => {
        if(err)throw new Error(Constants.SQLConst.ERROR_WITH_MY_SQL_CONNECTION);
        conn.query(`SELECT ${isCount?'Count(*)':'*'} FROM ${FROM} ${WHERE?`WHERE ${WHERE}`:''}`, (err:any, query:any) =>{
            if(err)throw new Error(Constants.SQLConst.ERROR_WITH_SELECT(FROM));
            query = JSON.stringify(query);
            query = JSON.parse(query);
            if(query[0]['Count(*)']){
                res.json(query[0]['Count(*)']);
            }else{
                res.json(query);
            }
        });
    });
}

const update = (req:any, res:any, FROM:string, WHERE:string, SET:string, isOnlyOne:boolean=true) => {
    mySQLConnection(req, (err:any, conn:any) => {
        if(err)throw new Error(Constants.SQLConst.ERROR_WITH_MY_SQL_CONNECTION);
        conn.query(`SELECT Count(*) FROM ${FROM} WHERE ${WHERE}`, (err:any, query:any) => {
            if(err)throw new Error(Constants.SQLConst.ERROR_WITH_SELECT(FROM))
            query = JSON.stringify(query);
            query = JSON.parse(query);
            if(isOnlyOne){
                if(query[0]['Count(*)']<=1){
                    genericUpdate(conn, res, FROM, WHERE, SET);
                }else{
                    res.json({errorMessage: Constants.SQLConst.ERROR_MORE_THAN_ONE_RESULT(FROM, WHERE)});
                    throw new Error(Constants.SQLConst.ERROR_MORE_THAN_ONE_RESULT(FROM, WHERE));
                }
            }else{
                genericUpdate(conn, res, FROM, WHERE, SET);
            }
        })
    });
}

const remove = (req:any, res:any, FROM:string, WHERE:string) => {
    mySQLConnection(req, (err, conn) => {
        if(err)throw new Error(Constants.SQLConst.ERROR_WITH_MY_SQL_CONNECTION);
        conn.query(`DELETE FROM ${FROM} WHERE ${WHERE}`, (err:any, user:any) =>{    
            if(err)throw new Error(Constants.SQLConst.ERROR_WITH_DELETE(FROM, WHERE));        
            res.json(user);
        });
    })
}

const mySQLOperations = {
    select,
    update,
    remove
}

module.exports = mySQLOperations;