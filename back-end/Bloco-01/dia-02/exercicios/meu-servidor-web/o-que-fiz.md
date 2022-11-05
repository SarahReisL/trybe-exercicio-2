1-Criei a pasta principal o arquivo HTML e Dockerfile, coloquei as info passadas pelo course.

2-Rodei: docker build -t meu-servidor-web .
para buildar a imagem.

3-Executei o comando: docker run --rm -d -p 1234:80 --name meu-container meu-servidor-web
para gerar um novo container com a imagem gerada, na porta 1234.

4-Agora acessamos o endereço http://localhost:1234

--OK--