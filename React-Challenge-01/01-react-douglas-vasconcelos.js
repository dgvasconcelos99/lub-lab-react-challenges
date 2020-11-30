/*
## Seu arquivo ou diretório deve ser no formato 01-react-seu-nome.js

01 - Explique com suas palavras as perguntas abaixo.

O que é o reactjs?
R: É um framework de Javascript feito pelo facebook para o Frontend,
onde é possível criar várias páginas usando apenas um arquivo html
que é atualizado de acordo com o componente exibido.

Qual benefício o reactjs trouxe para o mundo de desenvolvimento front end?
R: A possibilidade de manter dados com o uso do state de forma mais efetiva,
carregar o conteúdo dos componentes ao entrar na página sem precisar redirecionar
para outro link.

Qual o maior problema de performance que ocorria em aplicações front-end feitas com javascript puro
e html que o reactjs resolve? E como ele faz isso?
R: Um problema do js é a manipulação direta do dom, que prejudica o desempenho 
dependendo do tamanho do projeto; Com o React o DOM não é manipulado diretamente,
ele cria um objeto referente ao DOM e o manipula apenas quando necessário.

O que é o conceito de HOC (Higher-Order Components) ?
R: HOC é uma função que vai receber um componente e vai retornar um novo componente
isolando a lógica desse componente para ser reutilizado por outros componentes.

O que são props?
R: props são parâmetros que podem ser passados para um componente filho, como uma função ou state.

O que é state?
R: state são declarações feitas no componente pai, onde são armazenadas propriedades que pertencem ao componente.

Qual a diferença entre props e state?
R: state é declarado no componente pai, para passar esse state ao componente filho é necessário o uso de props.

Como seria um state para gerenciar a exibição de um popup (ou modal) apenas para abrir e fechar?
R: Pode ser um boolean, onde ao clicar no botão iria chamar uma função para exibir ou ocultar o modal.

Como seria um método para realizar a exibição de um popup (ou modal) apenas para abrir e fechar?
R: O modal seria um componente filho, onde a sua exibição seria controlado por um state boolean
Ex.:

state = {
  showModal: false
}

handleModal = () => {
  this.setState({showModal: !showModal})
}

*/
