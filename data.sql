-- Creating database if it doesn't exists
-- DROP DATABASE IF EXISTS postgres;
-- CREATE DATABASE postgres;
-- \c postgres;

-- copy csv data into tables (iMac)
\COPY products FROM '/Users/Fer/Desktop/SDC_Data/product.csv' DELIMITER ',' csv header;
\COPY styles FROM '/Users/Fer/Desktop/SDC_Data/styles.csv' DELIMITER ',' csv header;
\COPY related FROM '/Users/Fer/Desktop/SDC_Data/related.csv' DELIMITER ',' csv header;
\COPY features FROM '/Users/Fer/Desktop/SDC_Data/features.csv' DELIMITER ',' csv header;
\COPY photos FROM '/Users/Fer/Desktop/SDC_Data/photos.csv' DELIMITER ',' csv header;
\COPY skus FROM '/Users/Fer/Desktop/SDC_Data/skus.csv' DELIMITER ',' csv header;

-- copy csv data into tables (Laptop)
-- \COPY products FROM '/Users/fer/Desktop/SDC_Data/product.csv' DELIMITER ',' csv header;
-- \COPY styles FROM '/Users/fer/Desktop/SDC_Data/styles.csv' DELIMITER ',' csv header;
-- \COPY related FROM '/Users/fer/Desktop/SDC_Data/related.csv' DELIMITER ',' csv header;
-- \COPY features FROM '/Users/fer/Desktop/SDC_Data/features.csv' DELIMITER ',' csv header;
-- \COPY photos FROM '/Users/fer/Desktop/SDC_Data/photos.csv' DELIMITER ',' csv header;
-- \COPY skus FROM '/Users/fer/Desktop/SDC_Data/skus.csv' DELIMITER ',' csv header;