# Guia da Equipe — Como Rodar o Projeto

Esse guia é pra quem vai clonar o projeto pela primeira vez e não tem tanta familiaridade com Expo/React Native.

## Pré-requisitos (instalar antes de tudo)

Antes de clonar o projeto, você precisa ter duas ferramentas instaladas no computador:

### Node.js

É o que roda o JavaScript fora do navegador — necessário pra instalar as dependências e rodar o projeto.

1. Acesse [nodejs.org](https://nodejs.org/)
2. Baixe a versão **LTS** (a recomendada, mais estável)
3. Instale normalmente, seguindo o instalador (pode ir clicando em "Next" com as opções padrão)
4. Pra confirmar que instalou certo, abra o terminal (Prompt de Comando, no Windows) e rode:
   ```
   node -v
   ```
   Se aparecer um número de versão (ex: `v22.x.x`), deu certo.

### Git

É a ferramenta que permite clonar o repositório e subir/baixar alterações do GitHub.

1. Acesse [git-scm.com](https://git-scm.com/downloads)
2. Baixe a versão pro seu sistema operacional (Windows, Mac ou Linux)
3. Instale seguindo o instalador (as opções padrão funcionam bem, pode ir em "Next")
4. Pra confirmar, rode no terminal:
   ```
   git -v
   ```
   Se aparecer um número de versão, deu certo.

## Passo a passo

### 0. Clone o repositório

```
git clone <URL do repositório>
```

Depois entre na pasta que foi criada:

```
cd tccinseguranca
```

### 1. Instale as dependências

Isso baixa todas as bibliotecas que o projeto usa (o que já está escrito no `package.json`).

```
npm install
```

### 2. Inicie o app

```
npx expo start
```

Ao rodar esse comando, vai aparecer um QR Code no terminal e algumas opções pra abrir o app:

- **Development build**: uma versão personalizada do app, feita especificamente pra esse projeto
- **Emulador Android**: simula um celular Android no computador
- **Simulador iOS**: simula um iPhone (só funciona em Mac)
- **Expo Go**: um app que dá pra baixar na Play Store/App Store — é o jeito mais rápido e fácil pra testar, só escaneando o QR Code com o celular

Vocês podem começar a desenvolver editando os arquivos dentro da pasta `app`. Esse projeto usa **roteamento baseado em arquivos** (cada arquivo dentro de `app` já vira uma tela/rota automaticamente, sem precisar configurar rota manualmente).

## Como subir suas alterações pro GitHub

Depois de mexer no código e testar que está tudo funcionando, siga esses passos pra enviar suas mudanças pro repositório:

### 1. Veja o que foi alterado (opcional, mas ajuda a conferir)

```
git status
```

### 2. Adicione os arquivos alterados

```
git add .
```

Isso seleciona todos os arquivos modificados pra serem enviados. Se quiser adicionar só um arquivo específico, use `git add nome-do-arquivo`.

### 3. Faça o commit

```
git commit -m "Descreva rapidamente o que você mudou aqui"
```

Cada commit precisa de uma mensagem curta explicando o que foi feito (ex: "Adiciona tela de login", "Corrige bug no formulário").

### 4. Envie pro GitHub

```
git push
```

### Antes de começar a mexer no código

Sempre que for começar a trabalhar, é bom puxar as últimas atualizações que os outros já subiram, pra evitar conflitos:

```
git pull
```

## Para "zerar" o projeto

Se um dia quiserem apagar o código de exemplo e começar do zero, rodem:

```
npm run reset-project
```

Isso move o código inicial (de exemplo) pra uma pasta chamada `app-example` e cria uma pasta `app` vazia pra vocês começarem a codar.

## Outras configurações (opcionais)

- Pra configurar o ESLint (ferramenta que aponta erros e problemas de estilo no código): `npx expo lint`
- Pra configurar testes automatizados: seguir o guia de testes com Jest da documentação do Expo
- Pra aprender mais sobre TypeScript nesse template: também tem guia na documentação

## Pra aprender mais

- [Documentação do Expo](https://docs.expo.dev/): conceitos fundamentais e guias mais avançados
- [Tutorial "Learn Expo"](https://docs.expo.dev/tutorial/introduction/): tutorial passo a passo criando um projeto que roda em Android, iOS e web

## Comunidade

- [Expo no GitHub](https://github.com/expo/expo)
- [Discord da Expo](https://chat.expo.dev/)
