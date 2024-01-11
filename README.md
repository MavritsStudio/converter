# Converter

Converter from JSON to TypeScript DTO.

The lates service version is [here](https://converter.mavritss.ru/).

-----

## Table of contents

- [Description](#description)
- [Technical specification](#technical-specification)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Authors](#authors)
- [License](#license)

## Description

The application was developed for converting JSON to TypeScript DTO by order of the [Alfa-Bank](https://alfabank.ru/). The service appearance must comply with the organization's design code requirements.

Type conversion occurs using the [quicktype-core](https://github.com/glideapps/quicktype/) library.

## Technical specification

The technical specification of the customer.

- Converting JSON to TypeScript DTO
- Error handling
- Converting customization
  - UNION or ENUM for objects
  - TYPE or INTERFACE
  - Summarize similar classes
  - Replace JSON.key with CamelCase

## Usage

- Clone this repository

    ```console
    git clone https://github.com/MavritsStudio/converter.git
    ```

- Install the requirements

    ```console
    npm install
    ```

- Run the application

    ```console
    npm run dev
    ```

## Support

Send your feedback or bug report to the our [email](mailto:studio@mavritss.ru).

## Roadmap

- [ ] add the use of a code editor, instead of a simple textarea field.
- [ ] working on the appearance of the service.

## Authors

- [K0ch3rga](https://github.com/K0ch3rga)
- [ArtyomYaprintsev](https://github.com/ArtyomYaprintsev)
- [mavritss](https://github.com/mavritss)
- [smileman0001](https://github.com/smileman0001)

## License

`Converter` is distributed under the terms of the [MIT](https://spdx.org/licenses/MIT.html) license.
