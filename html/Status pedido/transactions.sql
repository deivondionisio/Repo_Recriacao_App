CREATE TABLE transactions (
    id serial PRIMARY KEY,
    src text,
    name text,
    alias text,
    num_pedido integer,
    email text,
    status text,
    date timestamp,
    num_req integer
);

