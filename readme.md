# Github Languages
<img src="https://img.shields.io/static/v1?label=Express&message=4.17.1&color=00BFFF&style=plastic"/>  <img src="https://img.shields.io/static/v1?label=Axios&message=0.21.1&color=00BFFF&style=plastic"/>  <img src="https://img.shields.io/static/v1?label=NodeJs&message=14.17.0&color=00BFFF&style=plastic"/>

## API para calcular a porcentagem de cada linguagem que está sendo usada nos repositórios do github.

<!--ts-->
* [Sobre](#Sobre)
* [Instalação](#Instalacao)
* [Iniciar](#Iniciar)
* [Pré-requesitos](#Pre-requesitos)
* [Rotas](#Rotas)
* [Tecnologias](#🛠Tecnologias)
<!--te-->

# Sobre

### 🚧  Em desenvolvimento...  🚧
- API voltada para quem busca saber em pouco tempo o quanto está usando de cada linguagem em seus repositórios e/ou busca atualizar seu portifólio de forma prática.

# Instalação

- Basta clonar o repositório em qualquer lugar e instalar os módulos através do comando ***npm i*** ou ***yarn i***.

# Iniciar

- Para iniciar a api na sua máquina basta rodar o comando **npm start** ou **yarn start**.

# Pré-requesitos

- Ter o NodeJs instalado na sua máquina.

# Rotas

## Para calcular usando apenas repositórios públicos 

### Acessar rota "/user?user=SEU_USUÁRIO"
- O github permite 60 conexões por hora, mas a api acessa uma vez a cada repositório seu
- A resposta será no formato json ex:
 ```json
 {
    "JavaScript":"70.42%",
    "CSS":"14.22%",
    "HTML":"15.36%"
 } 
```

## Para calcular usando todos os seus repositórios (incluindo privados)

### Acessar rota "/authuser?user=SEU_USUÁRIO&token=SEU_TOKEN_DE_ACESSO

- Para gerar um token vá na página do github, vá em configurações > configurações do desenvolvedor > tokens de acesso pessoal > 
gerar novo token > digite sua senha (caso o github pedir) > e marque a opção repo >  depois é só copiar o token.

#### A resposta será no formato json ex:
 ```json
 {
    "JavaScript":"70.42%",
    "CSS":"14.22%",
    "HTML":"15.36%"
 } 
```
# 🛠Tecnologias
### As seguintes tecnologias foram usadas no desenvolvimento desse projeto:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://github.com/axios/axios)
