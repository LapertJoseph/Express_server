use testdbjoe;

DELIMITER //

CREATE OR REPLACE PROCEDURE insert_user (
    IN p_name varchar(255),
    IN p_phone varchar(255),
    IN p_email varchar(255),
    IN p_address varchar(255),
    IN p_postalZip varchar(10),
    IN p_region varchar(255),
    IN p_country varchar(100),
    IN p_list varchar(255),
    IN p_alphanumeric varchar(255),
    IN p_currency varchar(100),
    IN p_numberrange mediumint(9),
    IN p_text text
)
BEGIN
    INSERT INTO mytable (name, phone, email, address, postalZip, region, country, list, alphanumeric, currency, numberrange, text)
    VALUES (p_name, p_phone, p_email, p_address, p_postalZip, p_region, p_country, p_list, p_alphanumeric, p_currency, p_numberrange, p_text);
END //

CREATE OR REPLACE PROCEDURE select_all_utilisateur()
BEGIN
    SELECT * FROM mytable limit 10;
END //