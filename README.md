# the-typist
_My PET proyect._

## Instalación

_In the repo are two folders, one for the server and other for the react app, in each one, we need to run the next command:_

```
    npm install
```

_To run each server use:_

```
    npm start
```

_To connect to MySQL create a connection on the port 3306 with user root and password 'password'. On the folder ./server/database we have a file were we have some line codes to insert on mysql to create the database and the tables. After, use the next line to add an administrator user:_

```
INSERT User(name, rol, password) VALUES('admin', 'ADMIN', 'admin');
```