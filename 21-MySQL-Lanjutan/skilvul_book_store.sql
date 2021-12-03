-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE skilvulbookstore ;

-- Create Tabel penerbit --
CREATE TABLE penerbit (
    id int(10) bot null auto_increment primary key,
    nama varchar(50) null,
    kota varchar(50) null
    );

-- Create Tabel penulis --
CREATE TABLE penulis (
    id int(10) bot null auto_increment primary key,
    nama varchar(50) null,
    kota varchar(50) null
    );

-- Create Table Buku --
CREATE TABLE buku (
    id int(10) not null auto_increment primary key,
    ISBN varchar(50) null,
    judul varchar(50) null,
    penulis varchar(50) null,
    penerbit int(10) null,
    harga int(10) null,
    stock int(10) null,
    constraint fk_buku_penulis_id foreign key(id) references penulis(id),
    constraint fk_buku_penerbit_penerbit foreign key(penerbit) references penerbit(id)
    );
-- Select Inner Join --
SELECT * FROM buku INNER JOIN penerbit ON buku.penerbit = penerbit.id;

-- Select Left Join --
SELECT * FROM buku LEFT JOIN penerbit ON buku.penerbit = penerbit.id;

-- Select Right Join --
SELECT * FROM buku RIGHT JOIN penerbit ON buku.penerbit = penerbit.id;

-- Select MAX --
SELECT MAX(harga) FROM buku WHERE stock < 10;

-- Select MIN --
SELECT MIN(harga) FROM buku;

-- Select Count --
SELECT count(id) FROM buku WHERE harga < 100000;

