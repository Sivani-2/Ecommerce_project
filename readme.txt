project
    backend
        config
            jwt.js -- generateToke,validateToken
            db.js -- mongoose connection
        routes
            auth.js -- users
            adminAuth.js -- adminAuth
            projects.js -- add,delete,get
        controllers
            auth, adminauth, product routes logic raasthamu
        models
            user schema(name, email, password, mobile, role(user,admin)-->user)
            product schema (productName, productPrice, productDescription, productImage)
        middleware
            token authenticate
            admin/user authenticate
        index.js   
            all the above mentioned files will be connected, urlencoded
client
    App.jsx -- routes
    Home
    Login
    Register
    Products
    Navigation
    Cart
    Payment
    Orders

Go to backend folder in project and type cmd on the link above 
In console :npm i express mongoose cors nodemon dotenv bcryptjs jsonwebtoken

if we make any changes in .env, we must stop and start again.

In mongodb, we will simply access functions.
Go to mongodb website,
create a cluster
go to database access, delete existing ones and create username and password(both are 'sivani')
go to network access, delete existing ones and add ip address and click allow access from anywhere and confirm
go to databases->clusters and delete the sample dataset by tapping and click delete.
click on Create Database
Database Name:ecommerce
Collection Name:test

Copy and paste the mongodb url and change the password and add database name between / and ? in the url

-----------------------------------------
Day-6
Command for payment gateway-this is not used in real time as it takes more commission:
(in frontend folder)
npm install @stripe/react-stripe-js @stripe/stripe-js

Deployment:

.gitignore file which is actually in client(frontend) folder, cut and paste in the project folder and make changes.
To not push any file/folder to git, we need to add * to the file/folder name in  the .gitignore file.
do for node_modules as it occupies so much space

In client:
npm run build
:gives dist folder

npm i -g serve

serve -s dist

git init
git add .
git commit -m "project"
Create repository in github and type
git branch -M main
git remote add origin <link of git repo>
git push -u origin main

Go to render 
get started with GitHub
new-> web service-> continue with GitHub
->select the repository required
-> Keep everything same till Region
Root Directory: backend
Build command: npm install
Start command: npm start
Set environment variables:
copy from .env file
PORT=5000
JWT_SECRET="ecommerceapplication"
MONGODB_URL="mongodb+srv://sivani:sivani@sivani.gl1dx.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Sivani"
STRIPE_SECRET_KEY="sk_test_51MOH8zSB0s2EMORR2teTn6oEUFDXL7d0QB9pOZMMReYJ3jvzvhj4MLB2SLAelSW9U8ZdkAbngNUWqXhGIdD26cEG00y7bfkZda"
Then click on Deploy service
It will load, build and go to live

After making any changes, u must do the below:
git add .
git commit -m "backend api updated"
git push