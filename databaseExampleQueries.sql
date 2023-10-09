-- This file is only my notes, changing
-- this file doesn't change anything in
-- the database

-- Create products table
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  type varchar(30) NOT NULL,
  weight varchar(30) NOT NULL,
  price integer NOT NULL,
  currency varchar(30) NOT NULL,
  slug varchar(30)
);

-- Insert some products (C in CRUD - Create)
INSERT INTO products
 (type, weight, price, currency, slug)
VALUES
  ('izumi',  '30g', 22, 'Euro', 'Matcha Izumi'),
  ('akashi',  '30g', 32, 'Euro', 'Matcha Akashi'),
  ('horai',  '30g', 42, 'Euro','Matcha Horai'),
  ('tsuki',  '50g', 13, 'Euro', 'Matcha Tsuki');


-- Read some products (R in CRUD - Read)
SELECT * FROM products;
