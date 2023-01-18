## online coding web application

frontend
pages:
Lobby page
i. “Choose code block” headline
ii. after enter name: 4 components of code blocks (component => name and code)
iii. state: setBlockes: (array) the 4 code blocks data from the backend
setMentor: (String) first user
setStudent: (array) all user after the first one

Code block page
show 2 screen with if =>
if (mentor) return “read only mode”
if (student) return “ability to change the code” => Use highlight.js
components:

Bonus
i. setSolution: (Array) if the code is equal to the solution show 🤩

backend
server
i. nodejs
ii. mongoDB

- codeblock router
- admin router
  iii. Socket.io
