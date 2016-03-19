import pymongo

from pymongo import MongoClient
connection = MongoClient('mongodb://2gfdevuser:2geeseflying@ds015879.mlab.com:15879/')
db = connection.growopdailylog

print db