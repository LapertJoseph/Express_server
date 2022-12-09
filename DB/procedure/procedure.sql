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

CREATE OR REPLACE PROCEDURE select_all_user()
BEGIN
    SELECT * FROM mytable limit 10;
END //

CREATE OR REPLACE PROCEDURE delete_user (
    IN p_email VARCHAR(255)
)
BEGIN
    DELETE FROM mytable 
    WHERE
    email = p_email;
END //

CREATE OR REPLACE PROCEDURE update_user(
    IN p_id INT(100),
    IN p_name varchar(255),
    IN p_phone varchar(255),
    IN p_email varchar(255),
    IN p_address varchar(255),
    IN p_postalZip varchar(255),
    IN p_region varchar(255),
    IN p_country varchar(100),
    IN p_list varchar(255),
    IN p_alphanumeric varchar(255),
    IN p_currency varchar(100),
    IN p_numberrange mediumint(9),
    IN p_text text
)
BEGIN
    UPDATE mytable
    SET 
        name = p_name,
        phone = p_phone,
        email = p_email,
        address = p_address,
        postalZip = p_postalZip,
        region = p_region,
        country = p_country,
        list = p_list,
        alphanumeric = p_alphanumeric,
        currency = p_currency,
        numberrange = p_numberrange,
        text = p_text
    WHERE id = p_id;
END //