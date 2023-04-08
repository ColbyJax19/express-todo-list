Overview:
    This project is a first look at using Express, EJS and Node to create a to do list. 
    The list will implement basic functionality, little UI.
    Objectives is to move data from Server side to user side and vice versa. 


Phase 1: 
    - Become familiar with including logic in our endpoints 
    - Example: Get all todos
    - Example: Get one specific todo

Phase 2:
    - Separate HTML responses into an EJS template

Phase 3: 
    - Separate our routes to a routes folder

Phase 4: 
    - Separate logic into a controller folder

Phase 5:
    - Separate data into models folder



Class Notes:
    ## Express - Models Views Controllers

**EJS**

- <% %> is used to run regular javascript
- <%= %> is used to **display** the value of a variable, like template literals `${}`

**Response**

- response.send → used to send an individual message
- response.json → can be used to repond with json formatted data
- response.redirect → redirects the browser (creates a GET request) to the specified endpoint
- response.render → used to display an EJS HTML page
    - RENDER accepts 2 arguments
        - 1st arg: The name of ejs file to display
        - 2nd arg: The data that we want to pass to that ejs file to display

**Forms**

- METHOD attirbute → HTTP method the form is set to
- ACTION attribute → URL/Endpoint the HTTP request goes to
- All forms need a submit tool. Either one of the following:
    - `<input type=”submit”>`
    - `<button type=”submit”>`
- Form data is stored inside the **request.body** object
- The **keys** inside the **request.body** object come from the **name** attributes on the inputs in your form ****