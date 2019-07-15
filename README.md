# TS Boilerplate

Um projeto baseado inicialmente no template `typescript` que temos para react native, porém, com algumas configurações extra que na grande maioria das vezes fará sentido serem configuradas. Aqui, já teremos tudo pronto.

## Ferramentas configuradas

- [React Navigation](https://reactnavigation.org/) - Biblioteca responsável pela navegação do projeto.

- [Styled Components](https://www.styled-components.com/) - Responsável pela estilização do projeto.

  - Em minha opinião, a melhor ferramenta para style numa aplicação React/React Native.

- [ESLint](https://eslint.org/) -Inspetor de JavaScript, pré configurados com padrões Airbnb.

  - A configuração já inclui integração com o [Prettier](https://prettier.io/), caso você utilize em seu editor. Caso queira maiores informações de como deixar seu editor preparado para isso, basta clicar [neste artigo](https://medium.com/@IgorMing/configurar-typescript-eslint-e-prettier-num-projeto-react-native-7eddfb820a7b) que fiz, ensinando como e porque fazer tal integração.

- [Babel Root Import](https://www.npmjs.com/package/babel-plugin-root-import) - Disponibilidade de imports absolutos.

  - Partindo da pasta `./src` do projeto. Ao invés de fazer `../../components/MeuComponente`, você acessa-o direto do import absoluto, utilizando `~/components/MeuComponente`. Uma feature incrivelmente útil, principalmente quando o projeto vai crescendo, e começamos à ficar com enormes cadeias de `../../../` por todo o projeto.
  - Seu editor também terá o Intellisense te sugerindo autocompletes corretamente também. A configuração já inclui isso.

- [EditorConfig](https://editorconfig.org/) - Padronização de indentação para diferentes editores. Basta seu editor ter a extensão do EditorConfig instalada.

- [Reactotron](https://github.com/infinitered/reactotron) - Consistente debugger para React Native, que trás informações pertinentes durante o desenvolvimento. Para instruções de instalação do app desktop, basta acessar [aqui](https://github.com/infinitered/reactotron/blob/master/docs/installing.md).

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
- `.eslintrc.js` (já estamos usando o `.eslintrc.json`, idealmente por ser uma extensão onde temos autocomplete funcionando para o editor, diferentemente do `.js`)

Apague manualmente, ou apenas rode o comando, na pasta raiz do projeto:

```
rm -r __tests__ App.js .flowconfig .eslintrc.js
```

> Lembrando que, só estou sugerindo a deleção da pasta `__tests__`, pois como pode ser visualizado abaixo, a estrutura de arquivos de testes seguem uma convenção diferente. Basicamente para facilitar a importação dos arquivos necessários, e uso dos mesmos.

Pronto, agora você já pode aproveitar o boilerplate e usufruir de toda a configuração já concluída.

## Estrutura do projeto

```
-> src
  -> components (para componentes reutilizáveis)
    -> Componente1
      - index.tsx (arquivo principal)
      - index.test.tsx (testes que referenciam este arquivo em questão)
      - style.ts (onde fica concentrado todo o style, seja um StyleSheet ou um componente styled-components)
  -> screens
    -> Screen1
      - index.tsx
      - index.test.tsx
      - style.ts
  -> routes (concentrar as rotas do projeto nesta pasta)
    - index.ts
    - screen1Stack.ts
    - screen2Stack.ts
configFiles
```

## Como utilizar

Agora teremos os comandos básicos versionados em scripts, dentro do `package.json`.

Para rodar os testes básicos feitos, execute o comando:

```
yarn test
# ou npm run test
```

Para inicializar o bundle, execute o comando:

```
yarn start
# ou npm run start
```

Agora só fazer o boot para algum device físico, ou um emulador. Na forma mais simples, basta executar:

```
react-native run-android
# ou react-native run-ios, caso use Mac
```

**Possível erro de execução:** Caso note algum erro na biblioteca `react-native-gesture-handler`, faça os simples passos à seguir.

- Abra o Android Studio com a raiz apontando para a pasta `/android`, dentro de seu projeto
- Selecione a pasta do projeto `react-native-gesture-handler`, e clique com o botão direito do mouse
- Vá na opção Refactor > Migrate to AndroidX
- Confirme as mudanças

Pronto, agora você já consegue executar seu projeto normalmente.

Divirta-se!
