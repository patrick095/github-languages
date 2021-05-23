# Github Languages

## API para pesquisar a porcentagem de cada linguagem que você está usando no github

# Iniciar

### Para iniciar a api na sua máquina basta instalar todos modulos e rodar o comando npm start ou yarn start

# Rotas

## para pesquisar apenas repositórios públicos 

### acessar rota "/user?user=SEU_USUÁRIO"
#### o github permite 60 conexões por hora, mas a api acessa uma vez a cada repositório seu
#### a resposta será no formato json ex:
{
    "JavaScript":"70.42%","CSS":"14.22%","HTML":"15.36%"
}

## para pesquisar todos os seus repositórios

### acessar rota "/authuser?user=SEU_USUÁRIO&token=SEU_TOKEN_DE_ACESSO

Para gerar um token vá na página do github, vá em configurações > configurações do desenvolvedor > tokens de acesso pessoal > 
gerar novo token > digite sua senha (caso o github pedir) > e marque a opção repo >  depois é só copiar o token.

#### a resposta será no formato json ex:
{
    "JavaScript":"70.42%","CSS":"14.22%","HTML":"15.36%"
}
