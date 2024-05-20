# Maildiver - Using Fastify with TypeScript

## Prerequisites

1. [Add and verify your domain](https://app.maildiver.com/domains)
2. [Create an API key](https://app.maildiver.com/api-keys)

## Installation

```bash
npm install
```

## Configuration

1. Add your Maildiver API key to the `.env` file.

```bash
MAILDIVER_API_KEY=your-api-key
```

2. Go to the `index.ts` and update the `from` and `to` email addresses.

## Running the app

```bash
npm run dev
```

It will start the server on `http://localhost:8080`. You can now send a POST request to `http://localhost:8080/send-email`.

## License

MIT License
