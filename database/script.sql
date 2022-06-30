-- Create here your sql script
create database biblioteca ;
create table autor (
id int,
nombre varchar (255)

);
INSERT INTO autor(id,nombre) VALUES (1,"Jorge Luis Borges");
INSERT INTO autor(id,nombre) VALUES (2,"Gerson");
INSERT INTO autor(id,nombre) VALUES (3,"David");
INSERT INTO autor(id,nombre) VALUES (4,"Joaquin");
INSERT INTO autor(id,nombre) VALUES (5,"Julio Cortázar");


create table libro (
id int,
titulo varchar(255),
autorid int
)
INSERT INTO libro(id,titulo,autorid) VALUES(1,"jorge el curioso",1);
INSERT INTO libro(id,titulo,autorid) VALUES(2,"jorge el mentiroso",2);
INSERT INTO libro(id,titulo,autorid) VALUES(3,"jorge el tramposo",3);
INSERT INTO libro(id,titulo,autorid) VALUES(4,"El aleph",4);
INSERT INTO libro(id,titulo,autorid) VALUES (5,"Rayuela",5);
INSERT INTO libro(id,titulo,autorid) VALUES (5,"Bestiario",5);