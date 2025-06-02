
# 📎 tinyURL_service

A simple backend service to shorten long URLs using Node.js, Express, TypeScript, and NanoID.


## 1. Initialize the Project

```bash
  npm init -y

```
* Creates a package.json file.

## 2. Install Dependencies

```bash
  npm install express nanoid

```

* express: to create the server and routes

* nanoid: to generate short unique IDs


## 3. Dev Dependencies (TypeScript + Types):

```bash
  npm install --save-dev typescript @types/node @types/express

```

* Install Typescript and types for Node and Express


## 4. Initialize TypeScript:

```bash
  npx tsc --init

```

* Generates a tsconfig.json file.


## 5. Update tsconfig.json:

```json
  {
    "target": "ES6", 
    "module": "commonjs",                                
    "rootDir": "./src",
    "moduleResolution": "node", 
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true 
  }

```

## 6. Install dotenv:
```bash
  npm install dotenv

```
