# ExpenseIN - The Expense Tracker App

This is a web app for keeping track of your expenses. It is created using the MERN stack.

## The app has not been deployed yet but can be run locally using the following steps:

#### Step 1: Clone the repository to your machine

`git clone https://github.com/srush-shah/ExpenseIN.git`

#### Step 2: Install node modules

```
cd ExpenseIN

npm install
```

#### Step 3: Install Docker on your system

Go to the official website of Docker: [Docker Website](https://www.docker.com/)

#### Step 4: Start Docker

#### Step 5: Run Docker Compose

In the terminal, in the main directory of the repository, run:

```
docker-compose up -d

docker-compose logs
```

The logs should show three images running: expensein-server, expensein-client, mongo. The mongo image should display the following:

```
Server is running on port: 5000
MongoDB database connection established successfully
```

NOTE: Connection would be established on a private network or mobile hotspot and not on public wifi.

#### Step 6: Open localhost:3000 in a browser and you can access the app
