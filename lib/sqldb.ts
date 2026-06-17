import alasql from "alasql";

let prete = false;

export function getDb() {
  if (!prete) {
    alasql("CREATE TABLE IF NOT EXISTS users    (id INT, email STRING, password STRING, role STRING)");
    alasql("CREATE TABLE IF NOT EXISTS orders   (id INT, userId INT, produit STRING, montant INT)");
    alasql("CREATE TABLE IF NOT EXISTS produits (id INT, nom STRING, prix INT)");

    alasql("DELETE FROM users");
    alasql("DELETE FROM orders");
    alasql("DELETE FROM produits");

    alasql("INSERT INTO users VALUES (1,'alice@vulnshop.test','$2b$10$jcqhyAhD1OcehE/i8UKR2OH9XuMtDr9aUO9SPrZ6cXq2Qpgxj1FN.','user')");
    alasql("INSERT INTO users VALUES (2,'bob@vulnshop.test','$2b$10$NZLYNBxKKdPnA8iIYPQd8.PASb7tJt1adxN/TXFsFGnorfyUHBRO6','user')");
    alasql("INSERT INTO users VALUES (3,'admin@vulnshop.test','$2b$10$5VgLSp6FQ8S0viQgktVRcuyfFn4bqiS8IvGJh2ukM/LilwGDh0XqC','admin')");

    alasql("INSERT INTO orders VALUES (1,1,'Clavier mécanique',89)");
    alasql("INSERT INTO orders VALUES (2,2,'Casque audio',149)");
    alasql("INSERT INTO orders VALUES (3,3,'Licence PRO (compte admin)',499)");

    alasql("INSERT INTO produits VALUES (1,'Clavier mécanique',89)");
    alasql("INSERT INTO produits VALUES (2,'Casque audio',149)");
    alasql("INSERT INTO produits VALUES (3,'Souris ergonomique',39)");

    prete = true;
  }
  return alasql;
}
