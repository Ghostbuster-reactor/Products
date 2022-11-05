-- Creating database if it doesn't exists
-- DROP DATABASE IF EXISTS postgres;
-- CREATE DATABASE postgres;
-- \c postgres;

-- copy csv data into tables
\COPY products FROM '/Users/Fer/Desktop/HR_SDC_FILES/product.csv' DELIMITER ',' csv header;
\COPY styles FROM '/Users/Fer/Desktop/HR_SDC_FILES/styles.csv' DELIMITER ',' csv header;
\COPY related FROM '/Users/Fer/Desktop/HR_SDC_FILES/related.csv' DELIMITER ',' csv header;
\COPY features FROM '/Users/Fer/Desktop/HR_SDC_FILES/features.csv' DELIMITER ',' csv header;
\COPY photos FROM '/Users/Fer/Desktop/HR_SDC_FILES/photos.csv' DELIMITER ',' csv header;
\COPY skus FROM '/Users/Fer/Desktop/HR_SDC_FILES/skus.csv' DELIMITER ',' csv header;