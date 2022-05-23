# DomeUI

Bem vindo a biblioteca de componentes _open source_ **DomeUI**.

---

### Como usar

Baixe as dependencias:

```sh
yarn add domeui-components

# ou

npm install domeui-components
```

Use o componente:

```js
import { Button } from "domeui-components";
```

Personalize o seu componente:

```js
<Button
  IconRight="ArrowRight"
  backgroundColor="#F6BE27"
  border="small"
  buttonSize="medium"
  color="#242424"
  label="Press me"
/>
```

## Explore os componentes no Storybook:

[Storybook](https://webdev-components.vercel.app/?path=/story/bem-vindo--page)

## Componentes:

- [x] Colors
- [x] Typograph
- [x] Button
- [ ] Text
- [ ] Input + Label
- [ ] Card

---

# Quer contribuir com o projeto? 

Pensou em algum componente que ainda não exista? e quer se arriscar a criar um? segue o passo a passo.

### 0. Fork
Crie um fork do projeto em seu perfil particular do Github, com isso ele irá criar um repositório identico automaticamente sem seus repositórios particulares.

### 1. Git clone
Entre no repositório e o projeto
```sh
https://github.com/Dome-UI/dome-ui.git
```

Entre na pasta e baixe as dependencias

```sh
cd dome-ui

# Depois

yarn
```

### 2. Branch
Crie uma branch, lugar para desenvolver seu componente tranquilamente.
```sh
yarn checkout -b feat/nomeComponente-component
```

### 3. Pasta
Crie uma pasta com o nome do componente dentro de `./lib/components`.

### 4. Arquivos
Dentro de `./lib/components/nomeComponente`:

  - `index.tsx`, nesse arquivo irá conter o seu componente desenvolvido em React.

  - `index.stories.js`, para renderizar seu componente no Storybook, exemplo:

  ```js
  // Importe o seu componente 
  import { nomeComponente } from '@lib/components/nomeComponente';

  // Nome do menu lateral (Categoria) 
  export default { 
    title: "Components/nomeComponente",
    component: nomeComponente,
  }

  const Template = args => <nomeComponente {...args} />

  // Variações dentro de "nomeComponente" (Cria um novo sub-menu lateral). 
  export const Default = Template.bind({})

  // Propriedades de cada variação
  Default.args = {
    label: "Exemplo de label padrão",
  }
  ```

  - `styles.ts`, estilização do seu componente que está em `index.tsx`.

  - `theme.ts`, conterá algumas propriedades padrão que seu componente irá ter, o resultado disso é um _Select_ no Storybook, exemplo:
  ```js
  export const border = {
    none: "0",
    small: "4px",
    medium: "10px",
    full: "10000px",
  };
  ```

  - `types.ts`, tipagem que irá ser usado dentro do componente `index.tsx` e da estilização `styles.ts`.

### 5. Pull Request

Após o desenvolvimento lindo e belo do componente, abra um **Pull request** e aguarde a validação.