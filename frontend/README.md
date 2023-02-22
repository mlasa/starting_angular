# Estudando Angular

- Framework Javascript da Google
- Aplicações Web SPA baseado em componentes
    - HTML gerado a partir do Javascript
- Códigos desenvolvidos em Typescript

### Versões do Angular
- **AngularJS** foi a primeira versão, e é totalmente diferente a partir de sua segunda versão, inclusive é comum falarem das suas versões como se fossem completamente separadas.
- Então ouve a migração para o **Angular** (novo Angular, baseado em componentes), muitos projetos inclusive que usavam AngularJS precisaram ser completamente refatorados por causa das diferenças entre os dois.

**É importante de dizer, que apesar de 2 ser consideravelmente distante de 9, a base do framework da versão 2 à 9 permanece a mesma.** 

### CLI Angular
- É comum usar linha de comando para lidar com Angular
- Instalando cli globalmente
    `npm i -g @angular/cli`
- Criar um novo projeto
    `ng new minha-app`

### Conteúdo HTML surge do Javascript
Todo conteúdo HTML que é gerado no browser é gerado via manipulação da DOM via Javascript, os elementos são criados dinâmicamente a partir do framwork (esse processo ocorre por baixo dos panos).

## Estrutura de um projeto

### Inicialização
1. main.ts
    Primeiro arquivo que será chamado
2. AppModule
    Chama o módulo da aplicação.
    O app é organizado em componentes, esses componentes ficam dentro de módulos. Ou seja, a aplicação é modularizada.
    Esses módulos nos dão algumas vantagens: por exemplo, criar componente que fica visível apenas dentro de determinado módulo. (Maior componentização)
    Aqui também encontramos a propriedade **bootstrap**(inicializar), que aponta para o componente AppComponent.
3. AppComponent que é o componente criado por padrão, e a partir dele toda a árvore de componentes é chamada.

### Anatomia do módulo
- Declarations: é onde declaramos todos os componentes que fazem parte do módulo, diretivas e também os pipes;
    - Mesmo que um componente tenha sido declarado dentro do meu módulo, não significa que ele seja visível *fora* desse módulo. Para isso eu precisaria fazer um export dele.
- Exports: colocamos só oque queremos exportar, não necessariamente tudo que está em *declarations* precisa ser exportado;
- Imports: aqui podemos fazer importações de outros módulos que sejam necessários, tanto os da própria aplicação, quanto módulos de bibliotecas externas;
- Providers: aqui fiam os *services*;
- Bootstrap: ele define o componente que será carregado naquele módulo. O uso **serve apenas para o módulo inicial** da aplicação, porque ele faz com que o componente principal esteja disponível.


### Comandos
- Criando novo componente e registrando no AppModule `ng generate component <caminho_para_componente>` ou `ng g c components/template/header`;
- Rodar uma aplicação, depois de entrar na pasta do projeto: `npm start`;
- Criando uma diretiva `ng g d [caminhoDaDiretiva]`