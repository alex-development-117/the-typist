const ERROR_WITH_MY_SQL_CONNECTION = `There is an error with mySQL connection`;
const ERROR_WITH_SELECT = (TABLE:string) => `There is an error searching data from the table ${TABLE}`;
const ERROR_WITH_UPDATE = (TABLE:string, WHERE:string) => `There is an error updating data from the table ${TABLE} where ${WHERE}`
const ERROR_MORE_THAN_ONE_RESULT = (TABLE:string, WHERE:string) => `There is an error updating because there's more than one result that can be modified in ${TABLE} where ${WHERE}`
const ERROR_WITH_DELETE = (TABLE:string, WHERE:string) => `There's an error trying to delete a(n) ${TABLE} where ${WHERE}`;

const SQLConstants = {
    ERROR_WITH_MY_SQL_CONNECTION,
    ERROR_WITH_SELECT,
    ERROR_WITH_UPDATE,
    ERROR_MORE_THAN_ONE_RESULT,
    ERROR_WITH_DELETE
}

module.exports = SQLConstants;