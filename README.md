# RTG WIKI

The project contains the documentation for the RestTestGen tool. The documentation was created using Docusaurus, a framework developed by Facebook and based on React for the creation of interactive and structured documentation. 

To run the project locally, Node.js must be installed, after which:

```bash
    cd RestTetGen-Wiki
    npm install
    npm run start
```

If you want to use the Dockerfile:

```bash
    sudo docker build -t rtg-wiki .
    sudo docker run -p 3000:3000 rtg-wiki
```

You will find the project running on ```http://localhost:3000/```