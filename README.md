# fashionette-automation-testcase

![alt text](https://i.ibb.co/bzQ7kMr/Screenshot-2021-12-12-at-6-29-46-PM.png)

## Requirements : 

- Node >= v12
- Cypress >= v9


## Application structure

```
└── cypress
    ├── integration
    │   ├── login.spec.js
    │   ├── scenario_01.spec.js   
    │   ├── scenario_02.spec.js   
    │   ├── scenario_03.spec.js   
    ├── support
    │   ├── home_commands.js
    │   ├── login_commands.js  
    │   ├── product_commands.js  
    │   ├── index.js  
    |── data.json
└── |── cypress.json
    |── package.json
```

## Usage

```bash
# Install dependencies
yarn install

# Run automation test cases
yarn run start


```
#### Note: Chrome will open, then click on right side **Run 4 integration specs**
