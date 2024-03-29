export const readme = `
# Author: Tomas Martincic
# Web: indigitamenta.com
#
# Welcome to RIT - Rimac Vehicle simulator GraphiQL explorer
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# Here are some preview queries below, you can uncomment them to 
# test them out, or you can delete this intro and try writing some yourself.
# 
# On the top right side of the screen is the documentation of GraphQL Schema 
# where you can see for yourself how the graph is structured.
#
# Keyboard shortcuts:
#   
#   Run Query:  Ctrl-Enter (or press the play button above)
#
#   Auto Complete:  Ctrl-Space (or just start typing)
#
# An example Register query:
#
   query Register{
       register(
        name:"Alex", 
        input:{
          email:"alex@mail.com", 
          password:"Test123!"
        }) {
         id, full_name, bearer_token
       }
     }
#
# An example Login query 
#
# NOTE: john@doe.com is the test user which has 2 test cars
# password: test123
#
   query Login{
       login(
        input:{
          email:"john@doe.com", 
          password:"test123"
        }) {
         id, full_name, bearer_token, email
       }
     }  
#
# An example getCars query 
   query getAllUsercars{
       getCars(token:"4$ioKGNJ1U11dJCQcWbnPbYg$/kWfHuuA4vI0h2jb9MMS9U7PTjHkzt8JqvHb9l4xqFU"){
         id, nickname, description, 
         statistics { speed, stateOfCharge, hvac }, 
         user { id, full_name }
       }
     }
#
# An example update query - updates car by ID 3, must be owned by user who's bearer token 
# is supplied. Updates nick, desc, and statistics
# NOTE: Any statistics updated will be published to MQTT
     mutation UpdateMyCar {
      updateCar(
       token:"4$FiaHHNSq/RXhESkZqxO54g$1Aj+l5rMYXGwIY27BjgFKQ6wcI7pmGNsGECS2AO80Z0"
       id: 3
       input:{
         nickname:"Prikolica"
         description:"Prikolica za peljat driva po sumberi"
         statistics:{ 
           speed: 99,
           longitude: 14.23141
           stateOfCharge: 73
           hvac: false
         }
       }
     ){
       nickname, description, statistics{speed, hvac, stateOfCharge}
     } 
   }
#
# An example create a car for user
# Note: all statistics are 0 or null by default, 
# also all cars are in idle/shutdown state once created
  mutation CreateCarForMe {
    createCar(
      token:"4$FiaHHNSq/RXhESkZqxO54g$1Aj+l5rMYXGwIY27BjgFKQ6wcI7pmGNsGECS2AO80Z0"
      nickname:"Prikolica #22"
      description:"Moja luda prikolica 123"
    )
  }
`;
