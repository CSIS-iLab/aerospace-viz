# Spaceports of the World

A d3.js powered visualization showing locations and numbers of launches from the various spaceports around the world.

## To Run

1.  Run `npm install` to install project dependencies
2.  Run `npm start` to start local development server

## To Build

1.  Run `npm build`

## To Update

- Data files should be placed in the `/src/data/` directory and follow the naming convention `YYYYMMDD-[TYPE].csv` where the date is the date the new data was added to the repo (eg. Data added on April 10, 2019 will named `20190410-[TYPE].csv`). There are 3 types of data files:
  - `spaceports-meta`: This contains meta information such as the name, location, status, etc. of each spaceport.
  - `launches`: This contains the information about individual launches from each spaceport.
  - `inclinations`: This contains the information about the inclinations achieved by each launch from each spaceport.
- The data sources are defined in `/src/js/index.js`
