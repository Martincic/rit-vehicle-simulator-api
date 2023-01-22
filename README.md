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

## Query
```
type Query {
    HVAC(status: Boolean): Boolean,
    stateOfCharge(state: Int): Int,
    longitude(lon: Float): Float,
    latitude(lat: Float): Float,
    speed(speed: Int): Int
  }
```

## Rules 

Data can be requested from the graph, and in that case it will return only a dummy, random data.

### Example fetch
```
# Fetch state of charge, latitude and longitude
curl 'http://indigitamenta.com:4000/graphql?' \
  -H 'Content-Type: application/json' \
  --data-raw '{"query":"{ stateOfCharge, latitude, longitude }","variables":null}'
```

Data can also be sent to the API, in which case it will publish the new data to the MQTT Broker.

As of now, it will publish the data to `rimacWebTeam/1` channel. Every bit of data that is uploaded will be sent over in JSON format. If we take a look at the following example upload, it will publish 2 different messages to the MQTT Broker

Sent messages: 
 - `{ "stateOfCharge" : 60 }`
 - `{ "speed" : 87 }`

### Example upload
```
# Upload new state of charge and speed values
curl 'http://indigitamenta.com:4000/graphql?' \
  -H 'Content-Type: application/json' \
  --data-raw '{"query":"{ stateOfCharge(state: 60), speed(speed: 87) }","variables":null}'
```
