# the structure of log data.

mysql> create table log ( id int auto_increment primary key, ts timestamp default current_timestamp, phrase varchar(128) not null, ip varchar(16) not null, browser_setring varchar(256) not null, results varchar(64) not null);
Query OK, 0 rows affected (0.02 sec)

mysql> describe log;

