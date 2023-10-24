# Iniciando o projeto

Para visualizar o componente de forma isolada, sugiro dar um npm install, depois um npm run dev e acessar http://localhost:3000/carlist

# Minha linha de raciocínio e tomadas de decisão

O componente de listagem de carro foi construido com uma imagem genérica por conta da falta de uma imagem nos arquivos disponíveis na API (imagem se encontra na pasta public).

Primeiro, eu juntei os carros que estão disponíveis nas duas apis e removi as duplicadas, apontei o card apenas o nome e o preço do carro e criei um modal para mostrar mais informações para cada um deles, deixando campos de id e timestamp de fora.

Decidi escolher o fato de mockar os dados vindo da api na pasta utils como arquivos json devido a um problema em relação ao frontend com a API, que teve problema com CORS, ou seja, conseguia fazer chamada por um servidor backend, mas uma chamada no frontend estava sendo impedida. Também cheguei a criar um servidor pra servir como intermediário, mas o problema com CORS persistiu, então decidi mockar os dados para que pudesse continuar o desafio.

Como são duas APIs diferentes, e apenas uma delas tem o campo "brand" em seus arquivos, parti por deixar um campo de select de opções caso o usuário desejasse visualizar todos os carros, ou apenas os carros da Toyota (que correspondem ao valor "brand":1).

Pensei em buscar informações em APIs externas de carro para obter mais informações do veículo a partir de informações obtidas seja pela api da wswork ou pelo nome e afins, mas isso seria insustentável num projeto real e grátis, pois algumas apis possuem respostas muito grandes o que consumiriam muito do servidor, possuem um número muito baixo para chamadas de forma gratuita mensalmente, e algumas delas eram pagas desde o início, então descartei a ideia.

Para a adição de um novo carro, um simples botão que abre um modal com as informações que podem ser preenchidas pelo usuário para introduzir um novo carro, porém a persistência desse novo carro não foi elaborada de forma local por problemas com o fs.readfile e fs.writefile que possuem certos problemas em trabalhar na parte do frontend, e as soluções que encontrei para o problema não funcionaram, e também não pode ser elaborada em nuvem pela falta de uma rota post, afim de atualizar o json que vem da api.

Caso eu decidisse não atualizar a página, evitando simular uma situação real, a persistencia de dados seria facilmente resolvida ao adicionar um carro e disparasse o useEffect de novo, pois o array de cars.json é alterado, que pode ser conferido caso use console.log(carsJson) no formulário de adição de carro.

# Para o programador

## Em Next.js

A página de listagem dos carros está anexada ao endpoint /carlist, para implementar o componente como um todo só é preciso copiar e colar na raiz da pasta app, assim como o conteudo das pastas components e types.

Como fiz o componente de forma local e sem nenhum endpoint para get nem post, é preciso mudar apenas alguns endpoints de chamadas, principalmente nos useEffect, para trocar a chamada dos arquivos json para chamadas para uma API real, a partir de um servidor frontend que possui permissão para receber os dados.

O componente como um todo é bem intuitivo, pra ver mais informações assim como adicionar um novo carro, precisa apenas clicar nos botões que possuem também botões para fechar os modais. O formulário de adição de um novo carro está funcionando corretamente, apenas para onde vai a informação que deve ser alterada, como mencionado o caso dos endpoints anteriormente

A página pode ser acessada ao clicar em "Carros" na navbar.

Grande parte da estilização foi feita com tailwind css.

No geral, o componente pai e seus filhos funcionam de forma bastante coesa, com várias informações sendo passadas por props, onde é apenas necessário se atentar às url de chamada dos componentes a partir da organização que seria utilizada no projeto principal.

## CRA ou Vite

Como dito anteriormente, o projeto em si é bastante coeso, como a organização em Vite diferencia um pouco de Next.js, a distribuição dos componentes e página pode acabar por ser um pouco diferente, mas enquanto mantiver as chamadas dos componentes de forma correta, tudo irá funcionar como pretendido.

Duas diferenças bem expressivas são:

- 1- é necessário adicionar o componente da carlist, página da listagem de veículos, dentro da estrutura do Router do index.tsx ou app.tsx, qualquer que seja o arquivo que está contendo o Router da aplicação como um todo, chamando o componente e colocando o path para '/carlist'.

- 2- as estilizações precisariam passar por uma reformulação de tailwindcss para um styled-components por exemplo, mas além da mudança na forma como escreve, exemplo: tailwindcss = flex || styled-components = display: flex, não será necessário nenhuma mudança expressiva de valores nem nada, apenas sua conversão.

## Observações finais

Agradeço bastante esse desafio, gostaria de receber um feedback do meu desempenho e se possível gostaria de saber mais sobre a elaboração do pdf do desafio, porque a partir da minha experiência durante o desenvolvimento e leitura do que foi pedido, eu senti que ele se tornou bastante confuso pela falta de certos pontos que poderiam ser necessários para a resolução como um todo.

A persistência dos dados do carro seria muito mais real e faria mais sentido se o projeto fosse um projeto fullstack em vez de um projeto React, o qual naturalmente seria induzido que eu, como participante, iria usar um servidor backend, além de poder usar um banco de dados para tratar esses dados da forma mais real possível de um mercado de trabalho.

A API possue problema de CORS que foi enfrentado por mim sem solução, mesmo usando diversas máquinas e diversos setups de projeto, pois testei usando CRA, Vite e Next.js pelo vscode de forma local, assim como IDEs online. Essa é a primeira vez que enfrento um problema desse tipo com alguma api que me impede de todo jeito trabalhar com ela no frontend.
