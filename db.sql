 CREATE TABLE "Fabricante" (
	"id" SERIAL PRIMARY KEY,
  "nome" VARCHAR NOT NULL,
  "createdAt" TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP NOT NULL
);

INSERT INTO "Fabricante"("id", "nome", "createdAt", "updatedAt") VALUES
(1, 'Intel', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'AMD', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Biostar', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

CREATE TABLE "Soquete"(
	"id" SERIAL PRIMARY KEY,
  "nome" VARCHAR NOT NULL,
  "createdAt" TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP NOT NULL
);

INSERT INTO "Soquete"("id", "nome", "createdAt", "updatedAt") VALUES
(1, 'LGA1700', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'AM5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

CREATE TABLE "GraphicCard"(
	"id" SERIAL PRIMARY KEY,
  "nome" VARCHAR NOT NULL,
  "fabricante" INT NOT NULL,
  FOREIGN KEY ("fabricante")
  REFERENCES "Fabricante"("id"),
  "clock" INT NOT NULL,
  "memoria" INT,
  "DDR" VARCHAR,
  "bits" INT,
  "imagem" VARCHAR,
  "integrado" BOOLEAN NOT NULL,
  "createdAt" TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP NOT NULL
);

INSERT INTO "GraphicCard"("id", "nome", "fabricante", "clock", "integrado", "createdAt", "updatedAt") VALUES
(1, 'UHD Graphics 770', 1, 1450, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Vega 7', 2, 1800, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

CREATE TABLE "Processador" (
	"id" SERIAL PRIMARY KEY,
  "nome" VARCHAR NOT NULL,
  "preco" DECIMAL NOT NULL,
  "soquete" INT NOT NULL,
  FOREIGN KEY ("soquete")
  REFERENCES "Soquete"("id"),
  "litografia" VARCHAR NOT NULL,
  "clock" DECIMAL NOT NULL,
  "clockTurbo" DECIMAL NOT NULL,
  "cache" INT NOT NULL,
  "core" INT NOT NULL,
  "thread" INT NOT NULL,
  "video" INT NOT NULL,
  FOREIGN KEY ("video")
  REFERENCES "GraphicCard"("id"),
  "TDP" INT NOT NULL,
  "imagem" VARCHAR NOT NULL,
  "fabricante" INT NOT NULL,
  FOREIGN KEY ("fabricante")
  REFERENCES "Fabricante"("id"),
  "createdAt" TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP NOT NULL
);

INSERT INTO "Processador"("id", "nome", "preco", "soquete", "litografia", "clock", "clockTurbo", "cache", "core", "thread", "video", "TDP", "imagem", "fabricante", "createdAt", "updatedAt") VALUES
(1, 'PROCESSADOR INTEL CORE I9-12900', 2705.87, 1, 'Intel 7', 2.4, 5.1, 30, 16, 24, 1, 202, 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/x/bx80715129001.jpg', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'PROCESSADOR INTEL CORE I5-12600K', 1811.75, 1, 'Intel 7', 3.7, 4.9, 20, 10, 16, 1, 125, 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/x/bx8071512600k2.jpg', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'PROCESSADOR AMD RYZEN 5 5600G', 1082.34, 2, '7 nm', 3.9, 4.4, 19, 6, 12, 2, 65, 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000252box123412.jpg', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000252box123412.jpg