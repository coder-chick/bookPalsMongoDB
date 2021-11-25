# bookPalsMongoDB
A simple demo application on how to combine node + express + mongoDB + EJS

## Descripton of project

BookPals is a book swapping management system that allows book owners loan their favorite books to borrowers residing in the same geographical region.


## What was the original proposal

Book owners can add the books they wish to share with others. Book borrowers can select books to borrow within their region. Users can also rate the books.


## How was the work distributed

Semaa and Yvette worked on every part of the assignment separately and then met to compare our work and select the most optimal solutions.

## Project contents:


## Detailed explanation of how the project can be executed

## Installation

1) Clone the repository
2) `npm install`
3) `npm start`

## Functions of this application
* This is CRUD application that has the capability of:
  * adding book entries
  * deleting book entries
  * updating books
  * displaying up to 20 book entries
  * adding users
  * deleting users
  * updating users


## What difficulties we faced
* We have previously created a similar application but rather than use a document-based database, we used SQLite, which is a relational database. It seems that the nature of our application is better suited to the document-based database than the relational database
* The beautiful thing about MongoDB is that it takes care of primary and foreign keys itself. That eliminates possibilities of errors when designing the database
* We had learned from our previous lesson and adjusted our isbn values to be int64 values rather than have them have dashes in between. Also, the ISBNs are no longer the primary keys as MongoDB provides each book and User with a unique primary key, which makes the overall application more accurate. 


## Authors
* Yvette Green
* Semaa Amin
