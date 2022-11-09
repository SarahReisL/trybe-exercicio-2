🚀 No Docker Hub, utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.
🚀 Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um contêiner para isso.
    --docker pull debian

🚀 Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.
    -- docker pull debian:unstable-slim

🚀 Após baixar a imagem para seu computador local, crie e execute um contêiner no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.
    -- docker container run -it debian:stable-slim

🚀 No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do contêiner.
    --Dentro da distribuição Linuxdebian
    -- root@aafcf132209b:/# cat /etc/*-release

🚀 Encerre o terminal.
    -- no terminal digite exit

🚀 Verifique na sua lista de contêiners qual contêiner se refere ao exercício que acabou de praticar.
    -- docker ps -l 

🚀 Inicie o mesmo contêiner novamente, sem criar outro. Valide se ele está ativo na lista de contêiners.
    -- docker start <nome-do-container> || NAMES 
    -- docker start aafcf132209b || NAMES 

🚀 Retome o contêiner que foi criado anteriormente neste exercício.
    -- docker attach aafcf132209b

🚀 Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do contêiner.
    -- root@aafcf132209b:/# cat /etc/debian_version

🚀 Encerre o terminal.
    -- no terminal digite exit

🚀 Remova somente o contêiner criado para esse exercício.
    -- docker container rm <nome-do-container>  
    -- docker container rm aafcf132209b  

[BÔNUS] Crie e rode de modo interativo em modo ‘Cleanup’, a imagem andrius/ascii-patrol.
    -- docker pull andrius/ascii-patrol  

    -- docker container run -it andrius/ascii-patrol 

[BÔNUS] **Encerre o contêiner utilizando os botões [ctrl] + [c].