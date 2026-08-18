# Guia da Equipe — Como Rodar o Projeto

Esse guia é pra quem vai clonar o projeto pela primeira vez e não tem tanta familiaridade com Expo/React Native.

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
