-- Sintaxe:
-- SELECT IF(condicao, valor_se_verdadeiro, valor_se_falso); 
-- -- Exemplo utilizando o banco sakila:
select first_name, if(active, 'Cliente Ativo', 'Cliente Inativo') AS status
from sakila.customer
limit 20;
-- Situações com mais de uma condição, é preferível utilizar o CASE.
-- Sintaxe:
-- SELECT CASE
--   WHEN condicao THEN valor
--   ELSE valor padrao
-- END;
select first_name, email,
	case
		when email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
	end as valor
from sakila.customer
limit 10;

-- Para fixar
-- 1.Usando o IF na tabela sakila.film, exiba o id do filme, o título e uma coluna extra chamada 'conheço o filme?', 
-- em que deve-se avaliar se o nome do filme é 'ACE GOLDFINGER'. Caso seja, exiba "Já assisti a esse filme".
--  Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.
select film_id, title, 
	case
		when title = 'ACE GOLDFINGER' then 'Já assisti a esse filme'
        else 'Não conheço o filme'
end AS 'conheço o filme?'
from sakila.film;

select  film_id, title, if('ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'conheço o filme?'
from sakila.film;

-- 2. Usando o CASE na tabela sakila.film, exiba o título, a classificação indicativa (rating) e uma coluna extra que vamos 
-- chamar de 'público-alvo' em que colocaremos a classificação do filme de acordo com as seguintes siglas:
-- G: "Livre para todos";
-- PG: "Não recomendado para menores de 10 anos";
-- PG-13: "Não recomendado para menores de 13 anos";
-- R: "Não recomendado para menores de 17 anos";
-- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".
select title, rating,
  case
	when rating = 'G' then 'Livre para todos'
    when rating = 'PG' then 'Não recomendado para menores de 10 anos'
    when rating = 'PG-13' then 'Não recomendado para menores de 13 anos'
    when rating = 'R' then 'Não recomendado para menores de 17 anos'
else 'Proibido para menores de idade'
	end as 'público-alvo'
from sakila.film;