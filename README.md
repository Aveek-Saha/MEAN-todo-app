# MEAN Todo App
A checklist style todo app made using the MEAN stack (MongoDb Express AngularJs Node). The tasks sync seamlessly across multiple instances of the application.


# How to use
Clone this repository and in the todo/server.js file, replace this text ```<Insert your mlabs/mongodb connextion string here>``` in this line ```mongoose.connect('<Insert your mlabs/mongodb connextion string here>');``` with your mongodb connection string.<br>

Then go to the `todo/` directory in you command line and run `npm install` to install all the packages. After installing run `node server.js` an open `http://localhost:8080/` on your browser.
