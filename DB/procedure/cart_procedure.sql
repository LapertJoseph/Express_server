use prod;

DELIMITER //

CREATE OR REPLACE PROCEDURE get_all_cart() 
BEGIN
    SELECT * FROM cart;
END //

CREATE OR REPLACE PROCEDURE post_cart(
    IN p_sessionId VARCHAR(100),
    IN p_token VARCHAR(100),
    IN p_status SMALLINT(6),
    IN p_createdAt datetime
)
BEGIN
    INSERT INTO cart (sessionId, token, status, createdAt)
    VALUES (p_sessionId, p_token, p_status, p_createdAt);
END //
