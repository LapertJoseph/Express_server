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

CREATE OR REPLACE PROCEDURE update_cart(
    IN p_id bigint(20),
    IN p_sessionId VARCHAR(100),
    IN p_token VARCHAR(100),
    IN p_status SMALLINT(6),
    IN p_createdAt datetime
)
BEGIN
    UPDATE cart 
    SET sessionId = p_sessionId, token = p_token, status = p_status, createdAt = p_createdAt
    WHERE id = p_id;
END //