-- exibir 10 titúlos da tabela de filmes em uperCase do BD sakila:
SELECT ucase(title) from sakila.film limit 10; 
-- exibir 10 titúlos da tabela de filmes em lowerCase do BD sakila:
select lcase(title) from sakila.film limit 10;
-- substitua  'ACADEMY' por 'FOO' do título vindo BD sakila da table film onde o id seja 1: 
select replace(title, 'ACADEMY', 'FOO') from sakila.film where film_id = 1; 
-- exiba os primeiros 7 caracteres ou os 7 caracteres a esquerda do título vindo BD sakila da table film onde o id seja 1
select left(title, 7) from sakila.film where film_id = 1;
-- exiba os últimos 8 caracteres ou os 8 caracteres a direita do título vindo BD sakila da table film onde o id seja 1
select right(title, 7) from sakila.film where film_id = 1;
-- exiba a quantidade de caracteres do título vindo BD sakila da table film onde o id seja 1: 
select char_length(title) from sakila.film where film_id = 1;
-- exiba 2 carac. apartir do quinto carac. do título vindo BD sakila da table film onde o id seja 1: 
select substring(title, 5, 2) from sakila.film where film_id = 1;
-- -- exiba o título apartir do quinto carac. do título vindo BD sakila da table film onde o id seja 1: 
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

-- Para fixar:
-- Agora, vamos fixar os aprendizados com alguns desafios:
-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
select ucase('tybe');
-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
select replace('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google?');
-- Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
select char_length('Uma frase qualquer');
-- Extraia e retorne apenas a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.
select char_length('JavaScript');
select substring('A linguagem JavaScript está entre as mais usadas', 12, 11);
-- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
select lcase( 'RUA NORTE 1500, SÃO PAULO, BRASIL');




