# Products
In this project I worked on optimizing an API for an e-commerce website that was a bit outdated. The API was split between components in a team of 3, the three components of this API revolved around questions and answers, reviews and ratings, and products. This is the products side of the API, and optimization was the main focus, we wanted to handle a larger amount of traffic. The goal was a less than 1% error rate and a latency that was less than 2000 milli seconds. With indexing and caching I was able to achieve 5000 rps over 1 minute with 0% error rate at 62ms, resulting in response speeds that were over 200% better than the previous API.

### Setting up data environment
1) create database and connect to it on terminal (DB = postgres)
2) run db.js/server files to create tables with queryAsync
3) copy csv files in terminal using psql -d postgres -f data.sql (make sure youre in project directory)
