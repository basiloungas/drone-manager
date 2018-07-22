# Drone Manager Client

This is the SPA that displayes real time information about the position of the drones.
This was build on top of CreateReactApp

## Features
- provide details for every drone of the system
- for each drone show
-- id
-- location
-- velocity
-- state (Stale or not)
-- last updatedAt
- sorting by updatedAt
- show nice map image for drone's location (google now charges for it!)

## TODO list
- handle connecting, disconnected status
- add types definitions
- add proptypes definitions
- get WEBSOCKET-URL from env vars
- make sure Table only rerenders the rows that change
- SessionManager could be implemented as a nice Provider/HOC. See here for proposed implementation:
  https://github.com/basiloungas/github-browser-2/tree/master/src/modules/githubApi
- more tests

## Concepts demonstrated
- containers vs presentational components
- data normalisation
- pages / coponents / modules separation
- ES6
- immutability in store
- functional components
- composing HOCs (only minimal usage on DronesList page)
- git fixups

## Dev
- yarn
- yarn start

## Tests
- yarn test