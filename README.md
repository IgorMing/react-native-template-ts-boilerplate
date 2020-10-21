# TS Boilerplate

Um projeto baseado inicialmente no template `typescript` que temos para react native, porém, com algumas configurações extra que na grande maioria das vezes fará sentido serem configuradas. Aqui, já teremos tudo pronto.

## Ferramentas configuradas

- [Redux](https://redux.js.org/) - Famoso, e fortemente utilizado para gerenciamento de estado dentro de projetos escaláveis.

  - **Informação importante:** O uso de Redux não é obrigatório! Caso não seja crucial pra você, pode remover esta biblioteca e adaptar a estrutura sugerida.
  - Temos outras formas de gerenciar e compartilhar o estado da aplicação. Como [MobX](https://mobx.js.org/) e outras bibliotecas "redux like". Mas o uso correto da [New Context API](https://pt-br.reactjs.org/docs/context.html) pode tornar o uso de Redux não tão crucial.

- [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Middleware para requisições assíncronas, utilizando `async/await`

  - Ao invés de retornar diretamente um objeto de action, seus action creators podem retornar uma função, conforme snippet abaixo
  
  ```diff
  - return {
  -  type: <type>,
  -  payload: <value>
  - };
  + return async (dispatch: Dispatch, getState: GetState) => {
  +   const response = await http.get('...');
  +   dispatch({ type: <type>, payload: <value> });
  +};
  ```

- [React Navigation](https://reactnavigation.org/) - Navegação. Caso performance seja um detalhe crucial, vale dar uma olhada na biblioteca [react-native-navigation](https://github.com/wix/react-native-navigation).

- [Styled Components](https://www.styled-components.com/) - Framework para estilização.

  - Em minha opinião, a melhor ferramenta para style numa aplicação React/React Native.

- [ESLint](https://eslint.org/) - Inspetor de JavaScript, pré configurados com padrões Airbnb.

  - A configuração já inclui integração com o [Prettier](https://prettier.io/), caso você utilize em seu editor. Caso queira maiores informações de como deixar seu editor preparado para isso, basta clicar [neste artigo](https://medium.com/@IgorMing/configurar-typescript-eslint-e-prettier-num-projeto-react-native-7eddfb820a7b) que fiz, ensinando como e porque fazer tal integração.

- [Babel Root Import](https://www.npmjs.com/package/babel-plugin-root-import) - Disponibilidade de imports absolutos.

  - Partindo da pasta `./src` do projeto. Ao invés de fazer `../../components/MeuComponente`, você acessa-o direto do import absoluto, utilizando `~/components/MeuComponente`. Uma feature incrivelmente útil, principalmente quando o projeto vai crescendo, e começamos à ficar com enormes cadeias de `../../../` por todo o projeto.
  - Seu editor também terá o IntelliSense te sugerindo autocompletes corretamente também. A configuração já inclui isso.

- [Reactotron](https://github.com/infinitered/reactotron) - Ferramenta para debug

  - Lembrando que para utilização deste recurso, é necessária a [instalação da aplicação](https://github.com/infinitered/reactotron/blob/master/docs/installing.md)
  - O redux e o redux-thunk também

## Como instalar

> Considero que você tem o React Native CLI já instalado em sua máquina. Caso não tenha, [clique aqui](https://facebook.github.io/react-native/docs/getting-started.html) para seguir a documentação oficial.

Execute o comando abaixo, substituindo `<nomeDoProjeto>` pelo nome desejado:

```shell
$ npx react-native init <nomeDoProjeto> --template react-native-template-ts-boilerplate
```

Pronto, agora você já pode aproveitar o boilerplate e usufruir de toda a configuração já concluída.

> **Renomear pastas**: Indico seguir os passos da biblioteca [react-native-rename](https://www.npmjs.com/package/react-native-rename) para renomear, de fato, todas as pastas internas com o nome correto. _(assim evitaremos ter pastas com nome `TSBoilerplate` dentro de seu projeto)_

## Estrutura do projeto

```
📦src
 ┣ 📂commons (quando não são componentes, e devem ser reutilizáveis)
 ┣ 📂components (para componentes reutilizáveis)
 ┣ 📂modules (módulos com lógica de negócio/duck files)
 ┣ 📂screens
 ┃ ┣ 📂Authenticated
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┣ 📜index.tsx (arquivo principal, que contém a view)
 ┃ ┃ ┃ ┣ 📜stack-navigator.tsx (caso sua raiz seja um navigator)
 ┃ ┃ ┃ ┣ 📜styles.ts (onde fica todo o style do componente)
 ┃ ┃ ┃ ┗ 📜types.ts (todos os tipos pertencentes à esta tela)
 ┃ ┃ ┗ 📜bottom-tab-navigator.tsx
 ┃ ┗ 📂NotAuthenticated
 ┃ ┃ ┣ 📂Signin
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┣ 📂Signup
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📜stack-navigator.tsx
 ┣ 📜App.tsx (componente principal, onde ficam os providers)
 ┣ 📜reducers.ts (onde ficam os reducers combinados)
 ┣ 📜root-navigator.tsx (rotas raíz do projeto)
 ┗ 📜store.ts (configuração da redux store)
```

## Como utilizar

Agora teremos os comandos básicos versionados em scripts, dentro do `package.json`.

Para inicializar o bundle, execute o comando:

```shell
$ yarn start
```

Agora só fazer o boot para algum device físico, ou um emulador. Na forma mais simples, basta executar:

### Android

```shell
$ npx react-native run-android
```

### iOS

Primeiramente, vamos instalar os pods do projeto

```shell
$ npx pod-install
```

Agora podemos fazer o launch, com o comando:

```shell
$ npx react-native run-ios
```

Divirta-se!
