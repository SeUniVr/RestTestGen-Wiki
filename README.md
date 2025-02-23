# RestTestGen Wiki

This repository contains the documentation for [RestTestGen framework](https://github.com/SeUniVr/RestTestGen). RestTestGen is a robust tool and framework designed for automated black-box testing of RESTful web APIs.

The Wiki is publicly available [here](#).

This repository includes both the documentation content in markdown files and the source code needed to deploy a documentation website powered by [Docusaurus](https://docusaurus.io/).

## Deployment
The Docusaurus-powered website can be deployed using the following methods:
- Docker Compose (recommended)
- Docker
- Local machine

Please follow the instructions for your preferred method below.

In all cases, the website will be reachable on localhost at port 3000: [http://localhost:3000](http://localhost:3000).

### Docker Compose

```bash
docker compose up -d
```

### Docker

```bash
sudo docker build -t rtg-wiki .
sudo docker run -p 3000:3000 rtg-wiki
```

### Local

> Requires Node.js to be installed on the local machine.

```bash
npm install
npm run start
```
