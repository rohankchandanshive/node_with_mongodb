Dependencies:
    - nodemon - reload the application
    - uuid - unique id's 
    - express - useful to write the code without any node boiler code
    - logger - log the messages while codeing
    - body-parser - used to parse the json body from request (without this we can use express.json() to parse the body)
    - mongoose - use mongoose
    - dotenv - to read the environment


Git:
pre-requisites:
- Add .gitignore to ignore the unwanted files like node_modules and local changing files


Database:
    * mongoDB: (Using mongo onlined)

    -Sigm into mongoDB account on web
    - create a database in free cluster
        select free server 
        add cluster name as DB name
        add username and password to connect to the DB
        Finished
    - Go to the connect button it will provide various options to connect to DB online using connection string/drivers
    - Paste the connection string into the VS code extension MongoDb with VS code to check the connection string 

    -  Install mongoose in the node application - used to connect the mongoDB with the application
        Mongoose has model and schema:
            Modal is the structure of the Table - Schema is the instance(Single Record) of that model which will be stored in the DB 


NODE:

    - Fetch Data from request 
        - Body: req.body        // passed in the body section of the API's request
        - Params: req.params.attributes     // passed in the url pattern /:id/:text
        - UrlPattern: req.query.attributes // passed from the params section of the API's request
    
    - Different methods to update records in DB
        - findAndReplace  - PUT      // Used to replace the existing object with NEW 
        - findAndUpdate   - PATCH    // Used to update the specific property of the object 
        
        *Nested Object : 
            - User.findAndUpdate({"orders._id": id}, {$set: "orders.$": order/req.body},{new: true})
                {"orders._id": id} - the id will be mentioned for order._id because it is nested object in User.
{$set: "orders.$": order/req.body} - The $set is used to deep into the nested object and $ represent the order we got from ({"orders._id": id}) and then patching the order with new ones.
                       {new: true} - This is used to return the newest object in the result varibale after the manipulation is done in the DB
    
    
    Note: To use the es6 import or features need to add "type": "module", in package.json to work