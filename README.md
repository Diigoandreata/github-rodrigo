# Buscador de usuários no Github

### Ferramentas utilizadas:
- React / Typescript
- Estilos com styled-components
- Integração com API e side-effects: Axios / react-query
- Controle de formulários: react-hook-forms / Yup

### Casos de Uso:
- O usuário é capaz de pesquisar por usuários do Github através do campo de busca;
    - O campo não aceita valores vazios;
    - Caso o usuário não seja encontrado, uma mensagem de erro é exibida;
    - O usuário que já foi buscado fica em cache e o botão de buscar é desabilitado para que a requisição não ocorra novamente (o que pode ser mudado de acordo com a regra de negócio);
    - Caso tudo de certo, o usuário encontrado é exibido.
- A listagem exibe todos os campos requisitados e a opção de mostrar mais detalhes em um modal.
- O modal exibe todos os campos requisitados.

### Informações adicionais:
- Nesse projeto eu exibo apenas a mesma mensagem de erro, porém não seria dificil tratar as mensagens com o react-query.
- Não criei testes e2e pois não possuo experiência configurando ele em um projeto do zero, porém consigo me virar quando ajustes são necessários.
- Eu optei por controlar o estado do modal com prop-drilling, porém não seria difícil ajustar para que ele fosse controlado por um gerenciador de estado global, por exemplo.
