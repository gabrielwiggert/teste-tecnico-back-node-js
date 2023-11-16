<h1>INSTRUCTIONS TO RUN THE PROJECT</h1>
<p>This project is based in Javascript/Typescript languages and in the following technologies: Node.js, Express.js, PostgreSQL database and Jest/Supertest for running tests;</p>
<br/>
<p>Please check the .env files first ('.env' and '.env.test')! Defaults are set as stated below but can be altered if desired;</p>
<br/>
<p>DATABASE_URL=postgres://postgres:postgrespw@localhost:5432/desafio_back_max_cpf_test</p>
<p>PORT=4001</p>
<br/>
<p>Please make sure you have the PostgreSQL database installed on your computer/VM, as well as Node;</p>
<p>'postgrespw' is your PostgreSQL database password;</p>
<p>Before running the project, please run the command "sudo service postgresql start" to start PostgreSQL database on your computer;</p>
<br/>
<p>Commands to be run on the project's root:</p>
<p>(1) "npm i" (to install project's dependencies);</p>
<p>(2) "npm run test" (to first start the database and then run tests on test database)*;</p>
<p>(3) "npm run dev" OR "npm run start" (to start the server).</p>
<br/>
<p>If desired, one can then enter and access the database via terminal using the command 'sudo -u postgres psql';</p>
<p>Then, use the command '\c desafio_back_max_cpf_test' to enter the project's database;</p>
<p>Finally, you can now access the database using SQL language. Don't forget to include a semicolon (;) at the end of your SQL statements!</p>
<br/>
<p>*You can also run "npm run test_original_db" to run tests on the main database - not the test database. For that, just change, in the '.env' file, the name of the main database (as desired)</p>
<br/>
<h1>API DOCUMENTATION</h1>
<p>You can test the API via browser or via ThunderClient/API testing software of your choice.</p>
<br/>
<h2>GET /cpf (Find All CPFs)</h2>
<p>Returns all CPFs registered on the database in the following array format: [ { "cpf": "64852893055", createdAt: "2019-12-
17T22:22:08.547Z"} ];</p>
<p>If there are no CPFs registered in the database, an empty array is returned.</p>
<br/>
<h2>POST /cpf (Add CPF)</h2>
<p>An object in the following format, containing an unique CPF number, must be sent in the body of the request: { "cpf": "64852893055" };</p>
<p>Returns status code 201 if a correctly formatted and unique CPF is added in the database;</p>
<p>Returns 'InvalidCpfException' and status code 422 if the provided CPF is in an invalid format;</p>
<p>Returns 'ExistsCpfException' and status code 409 if the provided CPF already exists on the list.</p>
<br/>
<h2>DELETE /cpf/{cpf} (Remove CPF)</h2>
<p>The CPF the user wishes to delete must be sent as a parameter in the request;</p>
<p>Returns status code 200 if the deletion of the given CPF is successful;</p>
<p>Returns 'NotFoundCpfException' and status code 404 if the provided CPF does not exist on the database;</p>
<p>Returns 'InvalidCpfException' and status code 422 if the provided CPF is in an invalid format.</p>
<br/>
<h2>GET /cpf/{cpf} (Check CPF)</h2>
<p>The CPF the user wishes to check must be sent as a parameter in the request;</p>
<p>Returns an object containing the given CPF number and its timestamp of registry in the database in the following format: { "cpf": "64852893055", createdAt: "2019-12-
17T22:22:08.547Z"};</p>
<p>Returns 'NotFoundCpfException' and status code 404 if the provided CPF does not exist on the database;</p>
<p>Returns 'InvalidCpfException' and status code 422 if the provided CPF is in an invalid format.</p>
<br/>
<h1>PROJECT ARCHITECTURE</h1>
<p>This project uses the layered architecture pattern:</p>
<p>- 'Routes' layer manages the application's routes, stating which actions should be taken by the server once a request arrives. A schema validation middleware is run when appropriate, and the 'controllers' layer is called;</p>
<p>- 'Controllers' layer manages requests (incoming data) and responses (outcoming data), then calls the 'service' layer;</p>
<p>- 'Services' layer is responsible for all logical implementation, then calls the 'repository' layer; </p>
<p>- 'Repositories' layer, finally, accesses the database.</p>
</br>
<h3>Thank you so much for your time and consideration :)</h3>