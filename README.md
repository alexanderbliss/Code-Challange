# Code-Challange

## Built With

javascript
Angular.js
Node.js
SQL
Postgres
Express

### Prerequisites

Node Package Manager
Postico or relevent SQL program

### Installing

npm install all packages from terminal.

Run these Quiries in SQL
Steps to get the development environment running.

```sql


CREATE TABLE "templates" (
	"id" serial primary key,
  "template_name" varchar(80) not null,
  "text_part" varchar(400) not null

);

CREATE TABLE "guests" (
  "id" serial primary key,
  "first_name" varchar(80) not null,
  "last_name" varchar(400) not null,
  "reservation" varchar(400) not null,
  "room_number" varchar(400) not null
);

CREATE TABLE "locations" (
  "id" serial primary key,
  "company" varchar(80) not null,
  "city" varchar(400) not null,
  "timezone" varchar(400) not null
);


INSERT INTO "locations" Values(
1,'Hotel California','Santa Barbra', 'US/Pacific'),(2,'The Grand Budapest Hotel','Republic of Zubrowka', 'US/Central'),(3,'The Heartbreak Hotel', 'Graceland','US/Central');


INSERT INTO "guests" Values(
1,'Candy','Pace', 214, 836523),(2,'Alexander',' Bliss', 832, 658038),(3,'John', 'Smith',658, 435943);

INSERT INTO "templates" Values(10 , 'Room Ready', 'We would like to inform you that your room is ready. Included below is your room number and reservation number.');
SELECT*FROM "guests";



```


## Authors

Alexander Bliss
