#BOOK MANAGEMENT SYSTEM 

#SERVER_URL:https://princechorasiya-book-management.onrender.com

#API AVAILABLE TO USE
## BOOKS
1)GET ALL BOOKS :  /books  method:get
2)GET BY ID : /books/:id   method:get
3)GET ISSUED BOOKS : /books/issued/by-users   method:get
4)ADD A BOOK : /books    method:post
5)UPDATE BOOK :/books/updateBook/:id     method:put;
6)GET SUBSCRIPTION DETAILS : /users/subscription-details/:id    method:get;

##USERS
1)UPDATE THE USER : /users/:id method:put;
2)CREATE THE USER : /users    method:post;
3) GET USER WITH ID : /users/:id   method :get;
4)GET ALL USERS : /users       method: get;
5)DELETE THE USER : /users/:id   method:delete;

#for working on local device
1)clone the repo
2)npm install
3)mongo url in .env key as MONGO_URI
4)npm run dev.
mongo build 

npm i mongoose 

npm i dotenv


storing certain book dat 
user register sunscriber 
rohandt0002/jp-build 3 



<!-- /users store info of people 
post method create a new user 

get get user data 

 -->
<!-- 
 /users/{id}
 get a use rby [assing the id ]
 put update the user by its id 

 deltee delte a user by id 
 \ -->
https://github.com/rohandt0002/J0123P3-Build/tree/Day-01

J0123P3-Build
Server >> Storing certain book data >> User Register >> Subscriber

This is a book record managemnt API Server/ Backend for the library system or managemnet of records or manuals or books

Fine System: User: 06/03/2023 - 06/06/2023 09/06/2023 => 50*3=150/-

Subscription Types
3 months (Basic) 6 months (Standard) 12 months (Premium)

If the subscription type is standard && if the subscription date is 06/03/2023 => then subscription valid till 06/09/2023

within subscription date >> if we miss the renewal >>50/- day subscription date is also been missded >> and also missed the renewal >> 100 + 50/- day

book1 basic 06/03/2023 -> subscription date 07/03/2023 => borrowed a book from library book1 renewal date is on 21/03/2023 23/03/2023 => we need to pay a fine of 50

book2 basic 06/03/2023 -> subscription date 07/03/2023 => borrowed a book from library book2 renewal date is on 21/03/2023 23/06/2023 => we need to pay a fine of 100+50

missed by renewal date >> 50/- missed by subscription date >> 100/- missed by renewal && subscription date >> 150/-

Routes and Endpoints
/users
POST: Create a new user GET: Get all the user info here

/users/{id}
GET: Get a user by id PUT: Update a user by their ID DELETE: Delete a user by id (chk if he/she still have an issued book) && (is there any fine to paid)

/users/subscription-details/{id}
GET: Get user subscription details >> Date of Subscription >> Valid till >> Is there any fine

/books
GET: Get all the books POST: Create/Add a new book

/books/{id}
GET: Get a book by id PUT: Update a book by id

/books/issued
GET: Get all issued books

/books/issued/withFine
GET: Get all issued books with their fine

data transfer object 
var obj1:{
    name,age,id,gender
}
var obj2:{
name,age,id,gender
}
passing info from one obj to other 



npm init
npm i nodemon --save-dev
npm run dev

