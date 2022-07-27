-- 2022-07-19, data de atual
select current_date(); 
-- 2022-07-19 16:07:57, exato momento
select now(); 
-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');
-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual

-- Para fixar
-- Para fixar, responda como seria possível encontrar as seguintes informações:
-- 1. Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT DATEDIFF('2030-01-20', now());
-- OU
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());

-- 2. Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
SELECT TIMEDIFF('10:25:45', '11:00:00');

