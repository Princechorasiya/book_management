# BOOK MANAGEMENT SYSTEM 

# SERVER_URL:https://princechorasiya-book-management.onrender.com

(note:The platform used to deploy server is render. The server gets offline after 15-30 min of inactivity)

# API AVAILABLE TO USE
## BOOKS

1)GET ALL BOOKS :  /books  method:get


2)GET BY ID : /books/:id   method:get

3)GET ISSUED BOOKS : /books/issued/by-users   method:get

4)ADD A BOOK : /books    method:post

5)UPDATE BOOK :/books/updateBook/:id     method:put;

6)GET SUBSCRIPTION DETAILS : /users/subscription-details/:id    method:get;


## USERS

1)UPDATE THE USER : /users/:id method:put;

2)CREATE THE USER : /users    method:post;

3) GET USER WITH ID : /users/:id   method :get;

4)GET ALL USERS : /users       method: get;

5)DELETE THE USER : /users/:id   method:delete;


# for working on local device

1)clone the repo

2)npm install

3)mongo url in .env key as MONGO_URI

4)npm run dev.


![Screenshot (55)](https://user-images.githubusercontent.com/115965811/236800234-c2ec5580-31b5-465b-85cf-fcdf20371f6f.png)

![Screenshot (56)](https://user-images.githubusercontent.com/115965811/236800241-9e2cd8d0-c386-449b-9dab-4a402141a12e.png)


![Screenshot (57)](https://user-images.githubusercontent.com/115965811/236800263-825c7ed3-b13a-43cb-8f7e-86a946eae17d.png)
