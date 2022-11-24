# Vehicle Dealership

<details>
 <summary>:brazil: Versão em Português</summary>
  
## Descrição
  
  Uma api feita em Typescript e MongoDB (Mongoose) para gerenciar o banco de dados de uma concessionária de veículos. Ela consegue realizar o CRUD de carros e motos, mas pode ser expandida para outros veículos. A arquitetura é do tipo REST, em camadas MSC e o código foi escrito sob o conceito de Programação Orientada a Objetos (POO) e princípios de SOLID. Ela também conta com testes unitários para cobrir o código (100% de cobertura).
  
## Desafios
 - Escrever o código aplicando Programação Orientada a Objetos e SOLID.
 - Criar níveis de abstração intensos no código para que sua estrutura e lógica pudesse ser aplicada em diferentes cenários.
 - Desenvolver um tratamento de erros sólido em POO e que utilizasse elementos do Zod
    
## Executando a aplicação
 Realize o clone do projeto através do seguinte comando
```
git clone git@github.com:kelderpassos/vehicle-dealership.git
```
 Acesse a pasta e rode o docker compose com o comando
```
docker-compose up -d
```
 Após isso é só iniciar a aplicação com 
 ```
npm run dev
 ```

## Rotas
### Carros

|     Método    |       Função     | URL |
| ------------- | ------------------- |---- |
|POST | Cadastra um carro        | http://localhost:3009/cars |     
| GET | Retorna a lista de carros        | http://localhost:3009/cars | 
|GET | Retorna o carro pelo id       | http://localhost:3009/cars/:id | 
| PUT | Atualiza o carro pelo id        | http://localhost:3009/cars/:id | 
|DELETE | Exclui o carro pelo id       | http://localhost:3009/cars:/id | 

### Motocicletas

|     Método    |       Utilidade     | URL |
| ------------- | ------------------- |---- 
|POST | Cadastra uma motocicleta        | http://localhost:3009/motorcycles |     
| GET | Retorna a lista de motocicletas        | http://localhost:3009/motorcycles | 
|GET | Retorna a motocicleta pelo id       | http://localhost:3009/motorcycles/:id | 
| PUT | Atualiza a motocicleta pelo id        | http://localhost:3009/motorcycles/:id | 
|DELETE | Exclui a motocicleta pelo id       | http://localhost:3009/motorcycles/:id | 


<br />

</details>
<details open> 
<summary>:us: English Version</summary>


  
 ## Description
  An api made in Typescript and MongoDB (Mongoose) to manage the database of a vehicle dealership. It does the CRUD of cars and motorcycles, but can be expanded to other vehicles. The kind of architecture is REST, built in three layers and written under the OOP concept and SOLID principles. It also has unit tests to cover the code (100% of coverage).
  
## Challenges
 - Write the code applying OOP and SOLID.
 - Create big levels of abstraction, so its structure and logic can be used in different scenarios.
 - Develop a solid error treatment in OOP that involved Zod elements
  
## Executing the application
 Clone the project with the command
```
git clone git@github.com:kelderpassos/vehicle-dealership.git
```
 Enter the folder and run the docker compose
```
docker-compose up -d
```
 After that, just start the application 
 ```
npm run dev
 ```

## Endpoints
### Cars

|     Method    |       Function     | URL |
| ------------- | ------------------- |---- |
|POST | Register a new car        | http://localhost:3009/cars |     
| GET | Bring all cars        | http://localhost:3009/cars | 
|GET | Bring a car by id       | http://localhost:3009/cars/:id | 
| PUT | Updates a car by id        | http://localhost:3009/cars/:id | 
|DELETE | Exclude a car by id       | http://localhost:3009/cars:/id | 

### Motorcycles

|     Method    |       Function     | URL |
| ------------- | ------------------- |---- 
|POST | Register a new motorcycle       | http://localhost:3009/motorcycles |     
| GET | Bring all motorcycles        | http://localhost:3009/motorcycles | 
|GET | Bring a motorcycle by id      | http://localhost:3009/motorcycles/:id | 
| PUT | Updates a motorcycle by id        | http://localhost:3009/motorcycles/:id | 
|DELETE | Exclude a motorcycle by id       | http://localhost:3009/motorcycles/:id | 

</details>

  
