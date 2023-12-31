# WikiTrailblazer

**In Wikipedia, there is a well-known phenomenon called the "Wikipedia Loop," where clicking the first link in the main body text of a Wikipedia article and then repeating the process for subsequent articles eventually leads to the "Philosophy" page. Created a web application or API that can determine how many requests it takes to reach the "Philosophy" page from a given Wikipedia URL while displaying the path of visited pages along the way.**

## Technology Used

MERN Stack (MongoDB, Express, React, Node.js)


## Website includes

- Created a MERN stack project with a React-based user interface for users to input a Wikipedia URL.
- Implement a Node.js and Express backend to handle API requests.
- Uses Redux state management to handle user input and display results.
- Follow the "Wikipedia Loop" rules by navigating through the first link in the main body text of each Wikipedia page.
- Record each visited page and count the number of requests made until reaching the "Philosophy" page.
- Display the following in the UI:
    - The number of requests required to reach the "Philosophy" page.
   - A list of visited Wikipedia pages in chronological order.

## How to use 

- Client (Frontend)
   - `npm i `

   - `npm start`

- Server (Backend)
   - Setup the env in [env\developemnt.env]
      - add CLIENT_URL='http://localhost:3000'

   - `npm i`

   - `npm run dev`

## Enjoy using the website. Happy Coding! :)
