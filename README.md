# Leaderboard


In this project, we will set up a JavaScript project for the Leaderboard list app, using webpack and ES6 modules. 

### General requirements

- Make sure that there are [no linter errors](https://github.com/microverseinc/linters-config).

- Make sure that you used correct [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md).

- Make sure that you documented your work [in a professional way](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/articles/professional_repo_rules.md).

### JavaScript requirements

- Follow our list of [best practices for JavaScript](https://github.com/microverseinc/curriculum-html-css/blob/main/articles/javascript_best_practices.md).

## Project requirements

- *IMPORTANT NOTE* This is the first time you will use Gitflow. Keep that in mind!
- Create an npm project with webpack.
- -Use ES6 modules, with import and export.
- Write plain HTML markup with minimum styling (just to make the layout), because you will implement styles in the following steps. Use this wireframe as a guide:
<img src="https://github.com/microverseinc/curriculum-javascript/raw/main/leaderboard/images/leaderboard_wireframe.png">

- Take a look at the Leaderboard API documentation below to learn how to use this API.
       - Base URL
          - [https://us-central1-js-capstone-backend.cloudfunctions.net/api/](https://us-central1-js-capstone-backend.cloudfunctions.net/api/)
       - ### **Endpoints**
        **/games/**
       Allowed actions:
           - POST to create a new game
              Mandatory parameters for POST action:
           - name: name of the game
          Parameters example for POST action (sent in the body of the request in JSON format): 
          ```json
          `{ 
	      "name": "My cool new game" 
           }```

           Return value: unique identifier for the game

           ```json
            {
	        "result": "Game with ID: **Zl4d7IVkemOTTVg2fUdz** added."
            }
           ```

         - **/games/:id/scores/**

          URL parameters:

           - id: unique identifier of the game

          URL example: `/games/Zl4d7IVkemOTTVg2fUdz/scores/`

          Allowed actions:

         - POST to create a new score for the given game
         - GET to get a list of scores for the given game

          Mandatory parameters for POST action:

         - user: name of the user
         - score: points (number)

         Parameters example for POST action (sent in the body of the request in JSON format):

          ```json
           { 
	       "user": "John Doe",
	       "score": 42
           }
          ```

         Return value for POST action:

          ```json
           {
	      "result": "Leaderboard score created correctly."
           }
          ```

         Parameters for GET action: none

         Return value for GET action:

          ```json
          {
           "result": [
               {
                "user": "John Doe",
                "score": 42
               },
               {
               "user": "Peter Parker",
               "score": 35
               },
              {
               "user": "Wonder Woman",
               "score": 50
              }
            ]
          }
         ```
- Implement the "Refresh" button (receiving data from the API and parsing the JSON).
- Implement the form "Submit" button (sending data to the API).
- Use async and await JavaScript features to consume the API.
  
### Built With
Major languages: Html5, Css3, JavaScript
Technologies used: Github, Git, Vscode


## Demo
Check out the [live version](https://Azonkeu.github.io/Leaderboard/) of the website for more details.


## 👩Author
- Github: [Azonkeu](https://github.com/Azonkeu)
- LinkedIn: [AzonkeuO](https://www.linkedin.com/in/azonkeu-ornela-88a14b172/)
  
### Show your support
Give a ⭐️ if you like this project!

## 📝License
This project is [MIT](https://github.com/Azonkeu/Leaderboard/blob/develop/LICENSE) licensed.
