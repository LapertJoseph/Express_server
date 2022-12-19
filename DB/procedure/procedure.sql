use testdbjoe;

DELIMITER //

CREATE OR REPLACE PROCEDURE get_all_users()
BEGIN
    SELECT * FROM user LIMIT 50;
END //

CREATE OR REPLACE PROCEDURE post_user(
    IN p_firstName VARCHAR(50),
    IN p_lastName VARCHAR(50),
    IN p_mobile VARCHAR(15),
    IN p_passwordHash VARCHAR(32),
    IN p_admin  TINYINT(1),
    IN p_vendor TINYINT(1),
    IN p_registeredAt datetime
)
BEGIN
    INSERT INTO user (firstName, lastName, mobile,  passwordHash, `admin`, vendor, registeredAt) 
    VALUES (p_firstName, p_lastName, p_mobile, p_passwordHash, p_admin, p_vendor, p_registeredAt);
END //




