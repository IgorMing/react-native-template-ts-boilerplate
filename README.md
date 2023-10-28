# TS Boilerplate

Um projeto baseado inicialmente no template `typescript` que temos para react native, porém, com algumas configurações extra que na grande maioria das vezes fará sentido serem configuradas. Aqui, já teremos tudo pronto.

## Bibliotecas configuradas

- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - Não tão famosa quanto Redux _(igual era configurado nas versões anteriores do boilerplate)_, porém, extremamente simples! Acredito que você vá curtir utilizar.

  - **Informação importante:** O uso do **Zustand** não é obrigatório! Caso não seja crucial pra você, pode remover esta biblioteca e adaptar a estrutura sugerida.
  - Temos outras formas de gerenciar e compartilhar o estado da aplicação. Segue abaixo uma lista com sugestões de libs que você pode configurar e usar para este princípio.
    - [Recoil](https://recoiljs.org/) Gerenciador de estado atômico. Quase foi minha opção para o boilerplate, devido sua simplicidade. Pode ser uma boa!
    - [Redux Toolkit](https://redux-toolkit.js.org/) Para amantes da arquitetura Redux, esta lib inclui todas as boas práticas dentro desse pattern, e ajuda muito na hora de criar os fluxos.
    - [MobX](https://mobx.js.org/) Gerenciador de estado reativo/mutativo, muito famoso, mas que eu particularmente usei muito pouco...

- [React Navigation](https://reactnavigation.org/) - Navegação. Caso performance seja um detalhe crucial, vale dar uma olhada na biblioteca [react-native-navigation](https://github.com/wix/react-native-navigation).

- [Styled Components](https://www.styled-components.com/) - Framework para estilização.

  - Em minha opinião, a melhor ferramenta para style numa aplicação React/React Native.

- [ESLint](https://eslint.org/) - Inspetor de JavaScript, pré configurados os fortes e consistentes padrões que já vem com o React Native + plugin de absolut import.

  - A configuração já inclui integração com o [Prettier](https://prettier.io/), caso você utilize em seu editor. Caso queira maiores informações de como deixar seu editor preparado para isso, basta clicar [neste artigo](https://medium.com/@IgorMing/configurar-typescript-eslint-e-prettier-num-projeto-react-native-7eddfb820a7b) que fiz, ensinando como e porque fazer tal integração.

- [Babel Plugin Module Resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) - Disponibilidade de imports absolutos.

  - Partindo da pasta `./src` do projeto. Ao invés de fazer `../../components/MeuComponente`, você acessa-o direto do import absoluto, utilizando `@src/components/MeuComponente`. Uma feature incrivelmente útil, principalmente quando o projeto vai crescendo, e começamos à ficar com enormes cadeias de `../../../` por todo o projeto.
  - Seu editor também terá o IntelliSense te sugerindo autocompletes corretamente também. A configuração já inclui isso.
  - Para adicionar novas rotas absolutas, basta alterar o arquivo `babel.config.json`, e também o `tsconfig.json` _(este, para tornar visíveis as rotas absolutas via intellisense (autocomplete))_

## Como instalar

> Inicialmente, certifique-se que passou por todo o processo de configuração de ambiente, da [documentação oficial do React Native](https://reactnative.dev/docs/environment-setup).

Execute o comando abaixo, substituindo `<nomeDoProjeto>` pelo nome desejado:

```shell
$ npx react-native init <nomeDoProjeto> --template react-native-template-ts-boilerplate
```

Pronto, agora você já pode aproveitar o boilerplate e usufruir de toda a configuração já concluída.

> **OBS:** Case dê algum erro de Cocoapods na instalação do template, não se preocupe, pois as dependências ainda não foram instaladas. Pode seguir adiante.

## Renomear projeto, pastas e arquivos

Indico seguir os passos da biblioteca [react-native-rename](https://www.npmjs.com/package/react-native-rename) para renomear, de fato, todas as pastas internas com o nome correto. _(assim evitaremos ter pastas com nome `TSBoilerplate` dentro de seu projeto)_.

> Para rodar este comando, você terá de ter seu projeto com o `.git` iniciado, e com os arquivos commitados.

```shell
$ npx react-native-rename@latest "nomeDoProjeto" -b "com.user.nomeDoProjeto"
```

> Este `-b` no script é para a alteração também do bundle ID

## Estrutura sugerida

Considerando que o desenvolvimento React (ou React Native) não é devidamente convencionado, fica aberto para cada um fazer de seu jeito. Por este motivo, segue abaixo uma estruturação sugerida.
Nem preciso dizer que é tudo estritamente opcional. Independente do caminho, só tente evitar bagunça.

```
📦src
 ┣ 📂commons (quando não são componentes, e devem ser reutilizáveis)
 ┣ 📂components (para componentes reutilizáveis)
 ┣ 📂stores (módulos contendo stores do zustand)
 ┣ 📂screens
 ┃ ┣ 📂Authenticated
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┣ 📜index.tsx (arquivo principal, que contém a View/UI)
 ┃ ┃ ┃ ┣ 📜StackNavigator.tsx (caso sua raiz seja um stack navigator)
 ┃ ┃ ┃ ┣ 📜styles.ts (componentes já estilizados pelo styled-components)
 ┃ ┃ ┃ ┗ 📜types.ts (tipos pertencentes apenas à esta estrutura)
 ┃ ┃ ┗ 📜BottomTabNavigator.tsx
 ┃ ┗ 📂NotAuthenticated
 ┃ ┃ ┣ 📂Signin
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┣ 📂Signup
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📜StackNavigator.tsx
 ┣ 📜App.tsx (componente principal, onde ficam os providers)
 ┗ 📜RootNavigator.tsx (rotas raíz do projeto, caso deseje adicionar)
```

## Como utilizar

Primeiramente, indico fortemente o uso do [pnpm](https://pnpm.io/). Ganha muito em performance e em uso de disco. Mas fique à vontade para rodar tudo em `npm` diretamente. (pode usar `yarn` também, mas eu parei de utilizar já há algum tempo...)

Caso queira utilizar o `pnpm`, lembre-se de alterar o arquivo `_npmrc` para `.npmrc` na raíz do projeto.
Se for utilizar `yarn` ou `npm`, pode apagar o arquivo `_npmrc` sem problemas.

> Isso é feito para o pnpm instalar as dependências de forma flat, ou seja, pastas individuais, ao invés de agrupadas (igual seria, sem este arquivo presente). Tive problemas de configuração com algumas dependências, devido à esta alteração na estrutura do `node_modules`. Portanto, esta me pareceu a saída mais fácil e direta. _(Fique à vontade para sugerir melhorias...)_

Instale o pnpm via brew

```shell
$ brew install pnpm
```

E as dependências do projeto

```shell
$ pnpm i # ou npm i
```

> Caso use `yarn` ou `npm` para instalação de dependências, este arquivo `.npmrc` não é necessário.

> Aqui, podemos utilizar o comando do npm diretamente

### iOS

Primeiramente, precisamos instalar os `Pods` no projeto.

```shell
$ pnpx pod-install # ou npx pod-install
```

Agora basta dar start, e, depois de carregar, apertar a tecla `i`, que um emulador iOS será aberto.

```shell
$ npm start
```

### Android

Para Android, faça o start diretamente

```shell
$ npm start
```

Agora basta pressionar `a`, que o script dará launch num emulador Android configurado.

Agora, pressione `i`, que o script dará launch num emulador Android configurado.

Divirta-se!
