use prod;

DELIMITER //

CREATE OR REPLACE PROCEDURE login_user(
    IN p_email VARCHAR(50),
    IN p_passwordHash VARCHAR(32)
)
BEGIN
    SELECT id, p_email
    FROM user
    WHERE user.email = p_email AND user.passwordHash = SHA2(p_passwordHash, 512);
END //

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
    VALUES (p_firstName, p_lastName, p_mobile, SHA2(p_passwordHash,512), p_admin, p_vendor, p_registeredAt);
END //

CREATE OR REPLACE PROCEDURE update_user (
    IN p_id BIGINT(20),
    IN p_firstName VARCHAR(50),
    IN p_lastName VARCHAR(50),
    IN p_passwordHash VARCHAR(32),
    IN p_admin  TINYINT(1),
    IN p_vendor TINYINT(1),
    IN p_registeredAt datetime
)
BEGIN
    UPDATE user 
    SET firstName = p_firstName, lastName = p_lastName, passwordHash = p_passwordHash, `admin` = p_admin, vendor = p_vendor, registeredAt = p_registeredAt
    WHERE id = p_id;
END //

CREATE OR REPLACE PROCEDURE delete_user (
    IN p_id INT
)
BEGIN
    DELETE FROM user WHERE id = p_id;
END //