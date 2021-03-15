# Getting Started

## Initial local set up
1. install git and make sure you have an account on github.
2. install VS Code. (or other IDE you like)
3. in windows command prompt or mac linux shell, go to the folder you want to locate the project.
4. run "gh repo clone andriychung/foodclever"
4. git checkout --track origin/<code>&lt;Name&gt;</code> , <code>&lt;Name&gt;</code> is your name(Vera, Joyce, Olivia, Ali) (sorry Ali to be the last one as ladies first).
5. You can start working on your question - see instructions below.

## If you use VS code.
Below extensions are useful:

Name: ESLint
Id: dbaeumer.vscode-eslint
Description: Integrates ESLint JavaScript into VS Code.
Version: 2.1.17
Publisher: Dirk Baeumer
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Name: Java Extension Pack
Id: vscjava.vscode-java-pack
Description: Popular extensions for Java development and more.
Version: 0.13.0
Publisher: Microsoft
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack

Name: Java Code Generators
Id: sohibe.java-generate-setters-getters
Description: Java Setter Getter toString Constructor hashCode equals fluent code snippets generator
Version: 7.0.2
Publisher: Sohibe
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=sohibe.java-generate-setters-getters

## For 10 Questions.
1. create a folder qx under src/main/java/neu/db/project/foodclever, where x is the question number.
2. create file Qx.java in qx folder, where x is the question number.
3. create file QxController.java in qx folder, where x is the question number.
4. complete the 2 classes Qx and QxController created in previous 2 steps.
You can refer to Q10 and Q10Controller as an example.
5. create file qx.js under src/main/js.
6. complete qx.js. You can refer to q10.js as an example.
7. modify app.js in src/main/js. search q10 and Q10 and modify similarly. 
8. create file qx.sql under src/main/resources.
9. put the sql of the question in the qx.sql.

## Steps to compile and run
1. in project folder, i.e. foodclever, run "./mvnw clean install" to clean up and compile
2. run "./mvnw sprint-boot:run" to start the application
3. view the website in browser with "http://localhost:8080"
4. if you modified java classes, you need to press ctrl-c to stop the server, then step 1 to recompile, and finally step 2 to restart the application
5. if you modified the js files, you can just refresh the website to view the effect of modification

## Steps for commit and push to github
1. in project folder, i.e. foodclever, run "git status" to  view your added and modified files, make sure your branch is your name, i.e. you should see "On branch <code>Your name</code>"
2. run "git add xxx" to add the files you want to commit, if you want to commit all files, run "git add ." (including the full stop at the end).
3. run "git commit -m '<code>Your note</code>'" to commit locally.
4. run "git push" to push to the remote repository.



### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.4.3/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.4.3/maven-plugin/reference/html/#build-image)
* [Rest Repositories](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#howto-use-exposing-spring-data-repositories-rest-endpoint)
* [Thymeleaf](https://docs.spring.io/spring-boot/docs/2.4.3/reference/htmlsingle/#boot-features-spring-mvc-template-engines)
* [Spring Data JDBC](https://docs.spring.io/spring-data/jdbc/docs/current/reference/html/)

### Guides
The following guides illustrate how to use some features concretely:

* [Accessing JPA Data with REST](https://spring.io/guides/gs/accessing-data-rest/)
* [Accessing Neo4j Data with REST](https://spring.io/guides/gs/accessing-neo4j-data-rest/)
* [Accessing MongoDB Data with REST](https://spring.io/guides/gs/accessing-mongodb-data-rest/)
* [Handling Form Submission](https://spring.io/guides/gs/handling-form-submission/)
* [Accessing data with MySQL](https://spring.io/guides/gs/accessing-data-mysql/)
* [Using Spring Data JDBC](https://github.com/spring-projects/spring-data-examples/tree/master/jdbc/basics)

