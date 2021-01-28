# Decorators e metainformação

O Decorator é uma sintaxe especdial do angular, do Typescript, que é possível incluir uma metainformação sobre uma determinada classe:

exemplo: @Component

Já metainformação, ao criarmos uma instância de classe, criamos objetos. Estamos incluindo mais informações desta classe que diz a respeito do framework,
por exemplo a classe AppComponent é um component porque está anotada com @component, nele existe o selector: 'app-root' que é como podemos chamar esse componente
em outro template.

# Como tudo é montado pelo angular? 

Internamente o angular utiliza um webpack, o module bundle, um empacotador de módulo famoso, também utilizado pelo ReactApp, VUeCli e outros frameworks de SPA.

# Data Binding (Associação de dados)

É quando nós deixamos uma lacuna na nossa view ( HTML / Template ) e está lacuna é preenchinda por um valor que está sendo colocado no component, exemplo:

view: {{ title }}
componente: title = 'Teste';

O valor apresentado na view será teste que é justamente a associação referente ao valor, isso em javascript padrão, nós teriamos que selecionar o elemento no Dom,
acessar o atributo dele e manipular o valor com textContent, a ideia do angular com data binding é justamente simplificar esse trabalho.

# One way data binding ("data binding unidirecional")

É quando temos dado do componente e ele é lido pelo template dessa forma: 

view: <img [src]="url">
component: url = 'www.google.com/fotos/123';

O dado que será exibido pelo template é o lido pelo componente, é interessante frisar que nunca o dado é lido do template para o componente dessa forma, apenas ao contrario.

# Curiosidades sobre modulos

É interessante frizar que, para um novo componente ser enxergado ele precisa fazer parte de algum módulo da aplicação e esse módulo precisa ser carregado pelo módulo principal ( root / raíz),
os módulos servem para agrupar componentes e coisas afins de forma que quem precise utilizar aqueles recursos só precise importa. Além de que para um componente ser enxergue em outros módulos é preciso colocar no array de exports: [],
fazendo uma analogia a OO é como se tudo que estivesse em declarations: [], fosse privado ao módulo e tudo exports: [], público aos outros.

# Vscode -> aspas simples única

para colocar aspas simples no projeto você precisa ir na no settings.json do vs code e colocar os seguintes valores:

"javascript.preferences.quoteStyle":"single",
"typescript.preferences.quoteStyle": "single"

a partir disso a importação já vai funcionar para o javascript e typescript

# Curiosidades sobre BrowserModule e CommomModule

Jamais importe BrowserModule em módulos filhos, pois esse módulo vem com uma serie de recursos que deixaria o projeto bastante pesado se fosse importado várias vezes, para evitar isso
podemos importar o CommomModule que além de pegar as diretivas que o Browser iria nós dar, ele evita essa reutilização do módulo.

# ngOnChange

É interessante sempre usar o onChange quando temos um componente que recebe uma propriedade, pois se for pra exibir um dado assyncrono a gente pode pedi que ele refaça alguma lógica, 
porque inicialmente por exemplo um array poderia estar sem valor, e depois que os dados chegarem da api não serem exibidos na tela, usando o onChanges com o SimplesChange a gente garante que
mesmo depois do componente ser carregado, ao passar um novo valor,  a lógica será refeita e os dados exibidos.

Outro ponto interessante no ngOnChange é o fato de que esse método só é chamado, quando a variável que esta recebendo uma nova atribuição, então se for um array e você der apenas um push, não
passará pelo changes, apenas se você atribuir um novo valor a esse array.

# Pipes

São "tubos/ canalizadores" de dados para receber um valor e transformar eles baseado em alguma lógica, podemos usar para filtros e conversões de datas seja qual for a necessidade da aplicação
é interessante saber que sempre o transform precisa receber um valor na qual ele irá trabalhar e retornar para o componente, podemos usar o pipe em todas as tags do html, inclusive componentes feitos.

# RxJs Subjects

É interessante que ao usarmos os subjects para alocar memória com o subscribe, sempre lembrarmos de  ao sair do component implementar o onDestroy para cancelar a inscrição, pois isso ocosionaria em memory leak.

# ng-content

Você pode deixar uma lacuna dentro de um component, e injetar dados nele para serem exibidos através das tags, então : <app-test> <span> opa </span> </app-test> -> Dentro do app teste é necessário
ter um <ng-content> para receber todo conteúdo html que foi injetado no template dele.

# Diretivas

Podemos criar diretivas e usar elas como atributos no template, e também passar valores através de databinding semelhante ao componente.