from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['charactersDB']
collection = db['characters']
print(collection.find_one({ "name": "Sunil Kumar"}))
# print(client.charactersDB)
print(collection.count_documents({}))
