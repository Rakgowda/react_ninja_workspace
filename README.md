Ninja React Coding Challenge

Please make sure to go through the below details before cloning the repository

Goal: Dynamic page development & Integration, as per the below details

Design Figma URL - https://www.figma.com/file/6xhuursXAVWZiZlgH367HS/React-Ninja-Template

Design consists of two pages

    Login Page
    Home Page

Scope of work

    User should be able to successfully login using the email and password provided in the API details
    After login user should land on the Home page and Users list shoudl be loaded from the Users List API
    Pagination is add on

API Details

    Login API - POST - https://reqres.in/api/login

Sample Request

{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}

    Users Listing API - GET - https://reqres.in/api/users?page=1

Sample Response

{
    "page": 1,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        }]
}

Run in Postman

APIs made for developers and designers by Ben Howdle

Other Assets Font - https://fonts.google.com/specimen/Roboto

Steps to follow

    Fork the repository
    Make your changes
    Submit the Pull Request from the forked repository

Please note: git push on this repository is not allowed and only pull requests (PRs) from the forked repositories are allowed

Other Information:

    Use of frontend frameworks like Bootstrap or Material-UI is allowed

Once you have completed the development, Please raise the pull request from your forked repository, and your work will be reviewed against:

    Design vs Developed screens
    Coding Standards
    Readability & Reusability of code
    Code Quality and Size

This repository is meant to facilitate the interview process @Designstring and only referred candidates for the interview process are requested to access

Happy Coding!!!
