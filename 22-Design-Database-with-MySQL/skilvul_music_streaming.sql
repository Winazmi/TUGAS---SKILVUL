-- CREATE DATABASE --
CREATE DATABASE skilvul_music;

-- USE DATABASE --
USE skilvul_music;

-- CREATE TABLE User--
CREATE TABLE `User` (
  `user_id` int,
  `name` varchar,
  `email` varchar,
  `password` varchar
);

-- CREATE TABLE Singer --
CREATE TABLE `Singer` (
  `singer_id` int,
  `name` varchar
);

-- CREATE TABLE Track--
CREATE TABLE `Track ` (
  `track_id` int,
  `title` varchar,
  `singer_id` int,
  `album_id` int,
  FOREIGN KEY (`album_id`) REFERENCES `Album`(`album_id`)
);

-- CREATE TABLE Album--
CREATE TABLE `Album` (
  `album_id` int,
  `name` varchar,
  `singer_id` int,
  FOREIGN KEY (`singer_id`) REFERENCES `Singer`(`singer_id`)
);

-- CREATE TABLE Playlist--
CREATE TABLE `Playlist` (
  `playlist_id` int,
  `user_id` int,
  `tracks` int,
  FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`)
);

-- CREATE TABLE Playlist_Track--
CREATE TABLE `Playlist_Track` (
  `playlist_id` int,
  `track_id` int,
  FOREIGN KEY (`track_id`) REFERENCES `Track `(`track_id`),
  FOREIGN KEY (`playlist_id`) REFERENCES `Playlist`(`playlist_id`)
);

