-- DROP DATABASE IF EXISTS sdc_project;
-- CREATE DATABASE sdc_project;

CREATE TABLE restaurants (
  id bigserial PRIMARY KEY,
  name varchar(255) NOT NULL,
  address varchar(255) NOT NULL,
  number varchar(255) NOT NULL,
  picture varchar(255) NOT NULL,
  stars int NOT NULL,
  quality int NOT NULL,
  delivery int NOT NULL,
  accuracy int NOT NULL
);
