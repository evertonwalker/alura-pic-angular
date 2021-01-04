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