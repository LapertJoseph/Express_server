use testdbjoe;

DELIMITER //

CREATE OR REPLACE PROCEDURE get_all_users()
BEGIN
    SELECT * FROM user LIMIT 50;
END //