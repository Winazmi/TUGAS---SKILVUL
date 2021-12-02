-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE bookstore;

-- Use Database --
USE bookstore;

-- Show Table --
SHOW TABLES;

-- Create Table --
create table books ( id int auto_increment primary key, 
author1 varchar(100) not null, 
author2 varchar(100), 
author3 varchar(100), 
title varchar(100), 
description varchar(100), 
place_sell varchar(3), 
stock int default 0, 
creation_date datetime  default  current_timestamp  on update current_timestamp );

-- Update Table books--
AlTER TABLE books 
ADD price INT DEFAULT 0,
STATUS enum('available','out of stock','limited');

-- Delete Table --
AlTER TABLE books DROP place_sell;

-- Insert Data --
INSERT INTO  books(author1, author2, author3, title, description, stock, creation_date, price, status)
    VALUES
    ('Aku','Kamu','Kita','Keluarga Cemara ','Buku yang menceritakan keluarga bahagia',30,'2021/03/12 10:10:10',99000,'limited'),
    ('chef tia','chef juna','chef farah','Dapur mama','Buku yang berisi resep masak',50,'2021/01/13 08:16:22',88000,'available'),
    ('Motulah','Hasman','Darwis','Melukis cahaya','Buku ini berisikan tutorial photografy',50,'2021/03/21 14:22:11',77000,'limited');

-- Select Table books--
SELECT * FROM books;

-- Alias books--
SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3
FROM books;

-- Select Where id --
SELECT * FROM books WHERE ID = 1;

-- Operator AND id --
SELECT * FROM books WHERE ID = 1 AND author1 = 'Aku' ;

-- Operator OR id --
SELECT * FROM books WHERE ID = 1 OR author2 = 'Kamu' ;

-- Operator NOT id --
SELECT * FROM books WHERE NOT ID = 1; 

--- Order By id ---
SELECT * FROM books ORDER BY id ASC;

--- Limit ---
SELECT * FROM books
    LIMIT 2;

--- Update ---
UPDATE books
SET author1 = 'Win', price =20000
WHERE id = 1;

--- Delete Row ---
DELETE FROM books WHERE id = 2;