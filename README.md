# TS Boilerplate

Um projeto baseado inicialmente no template `typescript` que temos para react native, porém, com algumas configurações extra que na grande maioria das vezes fará sentido serem configuradas. Aqui, já teremos tudo pronto.

## Ferramentas configuradas

- [Redux]() - Famoso, e fortemente utilizado para gerenciamento de estado dentro de projetos escaláveis.

  - **Informação importante:** O uso de Redux não é obrigatório! Caso não seja crucial pra você, pode remover esta biblioteca e adaptar a estrutura sugerida.
  - Temos outras formas de gerenciar e compartilhar o estado da aplicação. Como [MobX](https://mobx.js.org/) e outras bibliotecas "redux like". Mas o uso correto da [New Context API](https://pt-br.reactjs.org/docs/context.html) pode tornar o uso de Redux não tão crucial.

- [React Navigation](https://reactnavigation.org/) - Navegação. Caso performance seja um detalhe crucial, vale dar uma olhada na biblioteca [react-native-navigation](https://github.com/wix/react-native-navigation).

- [Styled Components](https://www.styled-components.com/) - Framework para estilização.

  - Em minha opinião, a melhor ferramenta para style numa aplicação React/React Native.

- [ESLint](https://eslint.org/) -Inspetor de JavaScript, pré configurados com padrões Airbnb.

  - A configuração já inclui integração com o [Prettier](https://prettier.io/), caso você utilize em seu editor. Caso queira maiores informações de como deixar seu editor preparado para isso, basta clicar [neste artigo](https://medium.com/@IgorMing/configurar-typescript-eslint-e-prettier-num-projeto-react-native-7eddfb820a7b) que fiz, ensinando como e porque fazer tal integração.

- [Babel Root Import](https://www.npmjs.com/package/babel-plugin-root-import) - Disponibilidade de imports absolutos.

  - Partindo da pasta `./src` do projeto. Ao invés de fazer `../../components/MeuComponente`, você acessa-o direto do import absoluto, utilizando `~/components/MeuComponente`. Uma feature incrivelmente útil, principalmente quando o projeto vai crescendo, e começamos à ficar com enormes cadeias de `../../../` por todo o projeto.
  - Seu editor também terá o Intellisense te sugerindo autocompletes corretamente também. A configuração já inclui isso.

## Como instalar

> Considero que você tem o React Native CLI já instalado em sua máquina. Caso não tenha, [clique aqui](https://facebook.github.io/react-native/docs/getting-started.html) para seguir a documentação oficial.

Execute o comando abaixo:

```
react-native init <nomeDoProjeto> --template ts-boilerplate
# troque "<nomeDoProjeto>" pelo nome que deseja nomear seu projeto, de fato
```

**IMPORTANTE:** Após concluirem todos os processos de inicialização, temos que apagar alguns arquivos que nosso boilerplate não utiliza, e o boilerplate generator do Facebook os cria, mesmo assim. (Infelizmente, pelo menos por enquanto, não achei uma forma de evitar a criação destes arquivos). Seguem abaixo os arquivos que devem ser deletados.

- `.flowconfig` (já utilizamos Typescript, portanto, o flow nunca será necessário)
- `./__tests__` (toda a pasta)
- `./App.js` (este arquivo está como `App.jsx`, dentro do diretório `src`)

> **.eslintrc.js(json)** - Para ter melhores resultados do intellisense do editor no arquivo `.eslintrc.js`, você tem a opção de mudar sua estrutura para um arquivo `.json`. Dica boa, caso isso seja importante para você.

Apague manualmente, ou apenas rode o comando, na pasta raiz do projeto:

```
rm -r __tests__ App.js .flowconfig
```

> Lembrando que, só estou sugerindo a deleção da pasta `__tests__`, pois como pode ser visualizado abaixo, a estrutura de arquivos de testes seguem uma convenção diferente (mais conhecida como [duck](https://github.com/erikras/ducks-modular-redux) proposal/pattern). Basicamente para facilitar a importação dos arquivos necessários, e uso dos mesmos.

Pronto, agora você já pode aproveitar o boilerplate e usufruir de toda a configuração já concluída.

## Estrutura do projeto

```
-> src
  -> commons (quando não são componentes, e devem ser reutilizáveis)
  -> components (para componentes reutilizáveis)
    -> Componente1
      - index.tsx (arquivo principal)
      - index.test.tsx (testes que referenciam este arquivo em questão)
      - styles.ts (onde fica concentrado todo o style, seja um StyleSheet ou um componente styled-components)
  -> screens
    -> Authenticated
      -> Screen1 (e.g.: Home screen)
        - index.tsx
        - index.test.tsx
        - styles.ts
        - <navigator_type>-navigator.tsx
    -> Not Authenticated
      -> Screen2 (e.g.: Signin screen)
        - index.tsx
        - index.test.tsx
        - styles.ts
        - <navigator_type>-navigator.tsx
  - App.tsx (Componente raíz)
  - reducers.ts
  - root-navigator.tsx (para as rotas raíz/iniciais)
  - store.ts
configFiles
```

## Como utilizar

Agora teremos os comandos básicos versionados em scripts, dentro do `package.json`.

Para inicializar o bundle, execute o comando:

```
yarn start
# ou npm run start
```

Agora só fazer o boot para algum device físico, ou um emulador. Na forma mais simples, basta executar:

```
npx react-native run-android
# ou npx react-native run-ios, caso use Mac
```

Divirta-se!
