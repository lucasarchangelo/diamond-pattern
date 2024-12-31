# Diamond Pattern Example with Hardhat and Ignition

This repository provides a practical example of using the Diamond Pattern in Solidity, leveraging Hardhat and Ignition for deployment and testing.

## Features
- **Diamond Pattern Implementation**: Demonstrates how to structure a contract using the Diamond Pattern.
- **Facets and Shared Storage**: Includes two facets, `Facet1` and `Facet2`, that use a shared `AppStorage`. *(Work in progress)*
- **Deployment and Testing**: Simplified deployment and testing setup using npm scripts.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lucasarchangelo/diamond-pattern.git
   cd diamond-pattern
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Deployment
To configure and deploy the example contracts, run:
```bash
npm run deploy
```

### Testing
A test file, `DiamondFacets.t`, is included to validate the functionality of the Diamond Pattern implementation. Execute the tests using:
```bash
npm run test
```

## Directory Structure
- **`contracts/`**: Contains Solidity contracts, including the facets, Diamond structure and shared `AppStorage`.
- **`test/`**: Includes the `DiamondFacets.t` test file.

## Work in Progress
- Enhancing the shared `AppStorage` for better compatibility and extensibility.
- Additional facets and features to demonstrate advanced use cases.

## Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.