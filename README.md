## Getting Started

Para rodar o projeto:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Next 13 + Tailwind + Context API + Axios

Utilizei essas tecnologias, pois são as que tenho estudado recentemente e gostei da ideia de aplicar meus conhecimentos com elas.

## Sign In

Desenvolvi uma página de login para que você possa fazer o login. Basta clicar em "Sign In" e você será redirecionado para a página inicial.

Observação: Tentei simular a experiência de um aplicativo em produção, portanto, depois de fazer o login, você permanecerá conectado e será redirecionado para a página inicial nas visitas subsequentes. Uma chave chamada "uolEdTech" com um valor "true" está sendo armazenada no armazenamento local e, quando um registro é feito, ela é definida como "false".

## Página Inicial

Na página inicial, há uma tabela exibindo os usuários. No entanto, precisei adicionar alguns domínios de imagens no arquivo `next.config.js`, porque o Next 13 requer que os domínios sejam configurados para que as imagens funcionem. Aqui está um exemplo:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "github.githubassets.com",
      "vignette.wikia.nocookie.net",
      "static.nationalgeographicbrasil.com",
      "res.cloudinary.com",
      "comparaplano.com.br",
    ],
  },
};

module.exports = nextConfig;
```

No final da tabela que exibe todos os usuários, existem dois ícones: um para exclusão e outro para edição. Ao clicar no ícone de edição, você será redirecionado para a mesma página de criação, mas com o ID do usuário na URL. Isso me permite usar o ID para solicitações futuras, como adicionar comentários.

## Usuário

Na página do usuário, há uma foto à esquerda, alguns campos de informações no meio e uma seção de histórico à direita. Usei o contexto para salvar os dados da tabela e recuperá-los caso haja um ID na página do usuário. Dessa forma, posso exibir os campos com os dados preenchidos do usuário quando um usuário é clicado.

## Histórico

Implementei a seção de histórico dentro do layout para que possa ser exibida em todas as páginas e compartilhar informações com todas as páginas por meio da API de contexto.

## Requisições

Utilizei o Axios para fazer requisições devido à sua facilidade de uso.

## Gerenciamento de Estado

API de Contexto

## Testes

Jest + React Testing Library

## Melhorias que gostaria de fazer com mais tempo

- Melhorar o acoplamento dos componentes e aprimorar a componentização.
- Adicionar mais testes.
- Aperfeiçoar o layout.
- Estruturar melhor as requisições.
- Melhorar o gerenciamento de estado.
- Aperfeiçoar as definições de tipo no aplicativo.
