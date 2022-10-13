BEGIN;
DROP TABLE IF EXISTS "admin", "machine_and_exo", "exercice", "training";

CREATE TABLE "admin" (
    "admin_id" SERIAL PRIMARY KEY,
    "admin_firstname" VARCHAR(7) NOT NULL DEFAULT '',
    "admin_lastname" VARCHAR(7) NOT NULL DEFAULT '',
    "admin_email" VARCHAR(50) NOT NULL DEFAULT '',
    "admin_password" VARCHAR(50) NOT NULL DEFAULT '',
    "admin_created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "admin_updated_at" TIMESTAMPTZ
);

CREATE TABLE "machine_and_exo" (
    "machine_and_exo_id" SERIAL PRIMARY KEY,
    "machine_name" VARCHAR(50) NULL,
    "exo_img" VARCHAR(15) NULL,
    "machine_created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "machine_updated_at" TIMESTAMPTZ
);


CREATE TABLE "training" (
    "training_id" SERIAL PRIMARY KEY,
    "training_img" VARCHAR(50) NOT NULL DEFAULT '',
    "training_repetition" INT NOT NULL DEFAULT 0,
    "training_serie" INT NOT NULL DEFAULT 0,
    "training_user_id" INTEGER NOT NULL REFERENCES admin("admin_id") ON DELETE CASCADE,
    "training_created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "training_updated_at" TIMESTAMPTZ
);

INSERT INTO "admin" ("admin_id","admin_firstname","admin_lastname", "admin_email", "admin_password") VALUES 
(1, 'Brandon', 'salvati', 'brandon.salvati@gmail.com', '12345'),
(6, 'Jessica', 'cortona', 'cortona.jessica@gmail.com', '123456');

INSERT INTO "machine_and_exo" ("machine_and_exo_id","machine_name", "exo_img") VALUES 
(1, 'developpé couché', 'developpe_1.gif'),
(2, 'developpé couché', 'developpe_2.gif'),
(3, 'Machine guidée', 'guide_1.gif');


INSERT INTO "training" ("training_id","training_img", "training_repetition", "training_serie", "training_user_id") VALUES 
(1, 'developpe_1.gif', 12, 4, 1 ),
(2, 'guide_1.gif', 8, 4, 1 );




COMMIT;