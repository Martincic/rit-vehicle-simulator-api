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

## Local Development 
The environment is setup with nodemon and is sharing volume with current directory. 
This means that any changes you create in project, after the container has started, will 
automatically be seen in the app, instantly.

In order to start the application in local environment you need to have Docker. 

The application can be started with:
```
  docker-compose up -d
```
After initializing the containers, the application should be available on [http://localhost:4000/graphql](http://localhost:4000/graphql).

Once you have started the container, you can enter the container via `npm run enter`.

## Query
```
type Query {
    login(email: String, password: String): UserType,
    register(name: String, email: String, password: String): UserType
  }

type UserType {
    id: Int
    full_name: String
    email: String
    password: String
    bearer_token: ?String
}

type CarType {
    id: Int 
    user: UserType 
    nickname: String 
    description: String
}
```

## Example Login

Test database contains 2 users by default:
  - john@doe.com - 2 cars
  - ash@ketchup.com - 0 cars
  
both user passwords are `test123`.

```
curl 'http://localhost:4000/graphql?' \
  -H 'Content-Type: application/json' \
  --data-raw '{"query":"query{ login(email:\"john@doe.com\", password: \"test123\"){ email, full_name, bearer_token } }","variables":null}' \
  --compressed
```

## Example Register

**Note:** Registration does not actually return UserType, you will have to login manually by shooting login request
```
curl 'http://localhost:4000/graphql?' \
  -H 'Content-Type: application/json' \
  --data-raw '{"query":"query{ register(name:\"Tomas\", email:\"martincic.tomas123@gmail.com\", password: \"Test1234!\"){ email, full_name, bearer_token } }","variables":null}' \
  --compressed
```

