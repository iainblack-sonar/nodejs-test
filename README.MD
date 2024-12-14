# 🚀 Easy NodeJS Project 

Easy NodeJS project with ExpressJS and AvaJS for unit testing and code coverage.

## 📄 Description 

This project is a simple NodeJS application using ExpressJS for building the server and AvaJS for unit testing and code coverage.

## 💻 Installation 

1. Clone the repository:
    ```sh
    git clone https://github.com/SonarSource-Demos/easy-nodejs-app-with-code-coverage.git
    ```
2. Navigate to the project directory:
    ```sh
    cd easy-nodejs-app-with-code-coverage
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## ⚙️ Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running at `http://localhost:9020`.

## 🧪 Running Tests 

To run the tests and generate code coverage, use the following command:
```sh
npm test
```

## Software Composition Analysis (SCA)
In order to run the SCA analysis using the OWASP Dependency-Check tool, run the following commands:
```sh
sh ./scripts/sca_scan.sh
node ./scripts/clean_sarif_report.js
```

The script being run in `sca_scan.sh` essentially is a copy of the one found here https://hub.docker.com/r/owasp/dependency-check in the official OWASP Dependency-Check Docker image Readme, just that I had tweaked it a bit to make it work with whatever project you run it in via multiple `$(pwd)` commands.

After that, it runs a custom JS script to clean out some illegal characters in the generated JSON report that will cause sonarscanner to throw errors. 

Next, you will have to make sure that `sonar-project.properties` has the `sonar.sarifReportPaths` set. I have already set it for you in this repository.

Finally you can run Sonarscanner to do a full scan and also ingest the OWASP Dependency-Check report.

For SonarCloud:
```sh
sonar-scanner \
  -Dsonar.organization=sonarcloud-demos \
  -Dsonar.projectKey=SonarCloud-Demos_easy-nodejs-app-with-code-coverage \
  -Dsonar.host.url=https://sonarcloud.io \
  -Dsonar.token=Please_Change_This_To_A_Secure_Token \
  -Dsonar.branch.name=main \
  -Dsonar.javaOpts=-Xmx8192m \
  -Dsonar.scanner.debug=true \
  -X
```

For SonarQube Self Hosted:
```sh
sonar-scanner \
  -Dsonar.projectKey=easy-nodejs-project \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.token=Please_Change_This_To_A_Secure_Token \
  -Dsonar.branch.name=main \
  -Dsonar.javaOpts=-Xmx8192m \
  -Dsonar.scanner.debug=true \
  -X
```


## 📝 License
MIT License