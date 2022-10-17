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


COMMIT;