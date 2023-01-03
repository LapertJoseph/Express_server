use testdbjoe;

DELIMITER //

CREATE OR REPLACE PROCEDURE get_all_cart() 
BEGIN
    SELECT * FROM cart;
END //