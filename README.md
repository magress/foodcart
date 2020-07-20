# foodcart

This project is created on Ubuntu enviornment.

	Steps to Run Project

1. Start MongoDb server and run mongo, then create datacase foodcart 
	use foodcart

2. Now open another terminal and go to foodcart/database folder and import all data collection by executing following command

	mongoimport --db foodcart --collection products --file products.json

	mongoimport --db foodcart --collection users --file users.json

	mongoimport --db foodcart --collection orders --file orders.json

3. Come out of Database Directory and go to code folder

4. In code folder run following command to install npm packages for backend (nodejs) (Active internet connection required)

	npm install


5. In code folder then go to frontend folder by cd frontend to install frontend npm packages (Active internet connection required)

	cd frontend
	npm install


6.Now open 2 terminal 

Terminal 1 : Go to foodcart/code directory to start nodejs server execute command
	npm start
	
Terminal 2:   Go to foodcart/code/frontend to run react
	npm start
	
	
	
	
	admin username: admin@gmail.com
	admin password: 12345678
	
	
	users:
	
	1. email: user4@gmail.com
	   password: 12345678
	
	2. email: user3@gmail.com
	   password: 12345678
	   
	3. email: user1@gmail.com
	   password: 12345678
