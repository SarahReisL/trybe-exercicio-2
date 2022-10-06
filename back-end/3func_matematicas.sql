select rental_duration + rental_rate from sakila.film limit 10;
select rental_duration - rental_rate from sakila.film limit 10;
select rental_duration / rental_rate from sakila.film limit 10;
select rental_duration * rental_rate from sakila.film limit 10;

-- Divisão de inteiros com DIV e como encontrar seus restos com o MOD
-- O DIV retorna o resultado inteiro de uma divisão
SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6
-- o operador MOD retorna o resto de uma divisão como resultado
SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

-- DESAFIOS com DIV e MOD
-- 1. Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. 
-- Chame essa coluna de 'Par ou Ímpar', onde ela pode dizer 'Par' ou 'Ímpar'.
select 	
	if( 15 mod 2 = 0, 'Par', 'Ímpar')
    AS 'Par ou Ímpar';
    
-- 2.Temos uma sala de cinema que comporta 220 pessoas. 
-- Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora? Solução:
select 220 div 12; -- 18 grupos de 12 pessoas

-- 3 Utilizando o resultado anterior, responda à seguinte pergunta: Temos lugares sobrando? Se sim, quantos? Solução:
select if(220 mod 12 = 0, 'NAO', concat('SIM', 220 mod 12));


-- Para fixar
-- 1. Monte uma query que gere um valor entre 15 e 20.
SELECT round(15 + (rand() * 5));
SELECT FLOOR(7 + (RAND() * 6));

-- 2. Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
select round(15.7515971, 5);
-- 3. Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
select floor(39.494);
-- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.234);
