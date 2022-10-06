-- Conversão para centavos
select * from sakila;

SELECT format(100000 / 100, 2);
select 25035 * 100;

-- arredondar pra cima
select ceil(10.8);
select ceil(7.2);

-- arredondar pra baixo
select floor(10.8);

-- potencia
select pow(4, 2);
select pow(3, 1/3);
select pow(5, 0);

select power(4, 2);

-- raiz quadrada
select sqrt(100);

-- gera nº aleatorios
select rand();

-- contar a quantidade total de registros
select count(film_id) from sakila.film;

-- média dos valores na sakila
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT SUM(replacement_cost) / count(film_id) FROM sakila.film; -- 19.984000 (Média entre todos registros)

-- valores MIN e MAX
SELECT MIN(replacement_cost) FROM sakila.film;

-- soma no valor total do multa de atraso na locação do filme
select format(sum(replacement_cost) / 100, 2) from sakila.film;

-- buscador de nomes de atores existente na base
select distinct first_name from sakila.actor;
select first_name from sakila.actor group by first_name;

-- obter quantidade de transação de cada actor
select first_name from sakila.payment group by first_name;








