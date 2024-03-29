# RIT Vehicle simulator graphQL API 

### Application 
[http://indigitamenta.com:4000/graphql](http://indigitamenta.com:4000/graphql).

### Auto-deployment

Automatic deployment runs the following:
```
git pull

npm update

reboot application
```

*NOTE:* Action will run only if the commit message contains text `deploy`.

## Local Development - Docker
The environment is setup with nodemon and is sharing volume with current directory. 
This means that any changes you create in project, after the container has started, will 
automatically be seen in the app, instantly.

In order to start the application in local environment you need to have Docker. 

The application can be started with:
```
  docker-compose up -d
```
After initializing the containers, the application should be available on [http://localhost:4000/graphql](http://localhost:4000/graphql).


Logs from the application:
```
docker logs rit-vehicle-simulator-api_web_1
```

Enter the application container:
```
docker exec -it rit-vehicle-simulator-api_web_1 /bin/bash
```

Enter the database: 
```
docker exec -it rit-vehicle-simulator-api_db_1 mysql -uroot -ppassword
```

## Query
```
# Car object which belongs to some user.
type Car {
  id: Int!
  user: User!
  nickname: String
  description: String
  statistics: CarStatistics
}

# Input data for Car Type
input CarInput {
  nickname: String
  description: String
  statistics: CarStatisticsInput
}


# These fields can be updated at any moment via MQTT so refresh them 
# continiously on the screen in order to have 'live' feed.

type CarStatistics {
  speed: Int
  hvac: Boolean
  stateOfCharge: Int
  latitude: Float
  longitude: Float
}


# These fields are inputs for car statistics. Whichever field, or group of fields
# is updated, the information will be published to MQTT Broker.
# input CarStatisticsInput {
  speed: Int
  hvac: Boolean
  stateOfCharge: Int
  latitude: Float
  longitude: Float
}

# Login request for user
input LoginInput {
  email: String!
  password: String!
}

# Used to perform modification and update operations.
type Mutation {
  updateCar(id: Int, token: String, input: CarInput): Car
  createCar(token: String, nickname: String, description: String): Boolean
  deleteCar(token: String, id: Int): Boolean
  createNewSession(token: String): Int
  deleteSession(token: String, id: Int): Boolean
  addSessionEntry(token: String, id: Int, input: CarStatisticsInput): Boolean
}

# Used to perform GET operations.
type Query {
  login(input: LoginInput): User
  register(name: String!, input: LoginInput): User
  getCars(token: String!): [Car]
  getCar(carId: Int!, token: String!): Car
  getSessions(token: String!): [Session]
  getSession(id: Int!, token: String!): [Session]
}

# Session object - representing cars state at timestamp.
type Session {
  session_id: Int
  created_at_formated: String
  created_at: String
  statistics: CarStatistics
}

# User type representing a user
type User {
  id: Int
  full_name: String
  email: String
  password: String
  bearer_token: String
}

```


## Example Login

Test database contains 2 users by default:
  - john@doe.com - 2 cars
  - ash@ketchup.com - 0 cars
  
both user passwords are `test123`.

```
curl 'http://indigitamenta.com:4000/graphql?' \
  -H 'Content-Type: application/json' \
  --data-raw '{"query":"{login(email:\"john@doe.com\", password:\"test123\") { id full_name email bearer_token}}","variables":null}' \
  --compressed \
  --insecure
```

## Example Register

```
curl 'http://indigitamenta.com:4000/graphql?' \
  -H 'Content-Type: application/json' \
  --data-raw '{"query":"query{ register(name:\"Tomas\", email:\"martincic.tomas@gmail.com\", password: \"Test1234!\"){ email, full_name, bearer_token } }","variables":null}' \
  --compressed \
  --insecure
```

## Example get my car list

This query will get logged in user's list of cars with their descriptions and nicknames, as well as their owner's full name and email.
```
curl 'http://indigitamenta.com:4000/graphql?' \
  -H 'Content-Type: application/json' \
  --data-raw '{"query":"{\n  getCars(token: \"BEARER_TOKEN_STRING\") {id nickname description user {id full_name}}}","variables":null}' \
  --compressed \
  --insecure
```