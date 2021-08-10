export default interface CRUD {
    create:Function | null;
    read:Function | null;
    update:Function | null;
    delete:Function | null;
    login?:Function | null;
    sqlConnection?:any;
}