# 🚀 Easy NodeJS Project 

Easy NodeJS project with ExpressJS and AvaJS for unit testing and code coverage.

---

## 📄 Description 
This project is a simple NodeJS application using ExpressJS for building the server and AvaJS for unit testing and code coverage. It also demonstrates code coverage reporting and software composition analysis (SCA) integration with SonarQube/SonarCloud.

## 🗂️ Project Structure
```
├── src/
│   ├── start.js                # Entry point
│   └── app/
│       ├── index.js            # Express app setup
│       └── routes/
│           ├── index.js        # Main router
│           └── customers/      # Customer CRUD endpoints
│               └── ...         # Each endpoint has controller, validator, tests
├── risky_code/                 # Example files with risky code patterns
├── scripts/                    # Utility scripts (SCA, SARIF cleaning)
├── package.json                # Project metadata and scripts
├── sonar-project.properties    # SonarQube/SonarCloud config
├── LICENSE
└── README.MD
```

## ✨ Features
- RESTful API for managing customers
- Input validation with Joi
- Modular route/controller/validator structure
- Unit tests with AvaJS
- Code coverage with c8
- Software Composition Analysis (OWASP Dependency-Check)
- SonarQube/SonarCloud integration

## 📦 Installation 
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

## 🛠️ Environment Variables
- `BACKEND_API_SERVER_APP_PORT` (default: 9020)
- `NODE_ENV` (default: production)

## 📚 API Endpoints
- `GET    /api/customers`                - Get all customers
- `GET    /api/customers/:customer_id`   - Get one customer
- `POST   /api/customers`                - Create a customer
- `PUT    /api/customers/:customer_id`   - Update a customer
- `DELETE /api/customers/:customer_id`   - Delete a customer
- `GET    /health`                       - Health check

## 🧪 Running Tests & Code Coverage
To run the tests and generate code coverage:
```sh
npm test
```
Coverage reports are generated in the `coverage/` directory.

## 📝 Scripts
- `npm start`         - Start the server
- `npm test`          - Run tests with coverage
- `npm run cleansarif`- Clean SARIF report for SonarQube

## 🔒 Software Composition Analysis (SCA)
To run SCA analysis using OWASP Dependency-Check:
```sh
sh ./scripts/sca_scan.sh
node ./scripts/clean_sarif_report.js
```

## 📊 SonarQube/SonarCloud Integration
Make sure `sonar-project.properties` is configured. Then run:

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

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
MIT License