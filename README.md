# Canva API Proof of Concept (PoC)

This project demonstrates how to use the Canva Apps SDK and REST API to create a design via an API request. The backend is built using **Node.js** and **Express**.

## Features
- Creates a Canva design via API
- Adds a text element (fixed font, size, and color)
- Inserts an image via `asset_id`
- Returns the design URL

## Prerequisites
1. **Canva Developer Account**: Register at [Canva Developers](https://www.canva.com/developers/).
2. **Canva API Access Token**: Obtain from your Canva app settings.
3. **Node.js & npm**: Install from [Node.js official website](https://nodejs.org/).

## Installation

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/canva-api-poc.git
cd canva-api-poc
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Create a `.env` File
Create a `.env` file in the project root and add the following:
```ini
CANVA_ACCESS_TOKEN=your_canva_access_token
PORT=3000
```

### 4. Run the Server
```sh
node server.js
```

## API Usage
### Endpoint: Create Design
**POST** `/create-design`

#### Example Request (JSON Body)
```json
{
  "text": "Hello Canva!",
  "assetId": "your_asset_id"
}
```

#### Example Response
```json
{
  "success": true,
  "designId": "123456789",
  "designUrl": "https://api.canva.com/v1/designs/123456789"
}
```

## Deployment
You can deploy this project on platforms like **Vercel**, **Heroku**, or **AWS**.

Example for Heroku:
```sh
git init
git add .
git commit -m "Initial commit"
heroku create
heroku config:set CANVA_ACCESS_TOKEN=your_canva_access_token
heroku push heroku main
```

## License
This project is licensed under the MIT License.

---

For contributions or issues, feel free to open a pull request or issue on GitHub!

