api_key = "AIzaSyAwcJDOpVrqCRhbCI74aLjAVV7jcs8K3dM"
from apiclient.discovery import build
youtube = build('youtube', 'v3', developerKey=api_key)
# print(type(youtube))
import urllib.request
import json
import datetime

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['charactersDB']
characters = db['characters']

for data in characters.find():
    vid_id_list = []
    for match in data.get('match_list'):
        video_id = 'abc234d';
        vid_id_list.append(video_id)
    new_val = {'vid_id_list': vid_id_list};
    characters.update_one({"_id": (data.get('_id'))},
    {"$set": new_val})


curDate = datetime.datetime.utcnow().isoformat() + "Z"
print(curDate)
splittedDate = curDate.split('T')
print(splittedDate[0])
date_format = "%Y-%m-%d"
a = datetime.datetime.strptime(splittedDate[0], date_format)
test_date = datetime.datetime.strptime("2021-01-24", date_format)

req = youtube.search().list(q='Juventus vs Bologna highlights', part='snippet', type='video',
        maxResults=10)
# print(type(req))
res = req.execute()
# print(len(res['items']))
vidLength = 0
vidIdOfInt = ''
# print('vidOfInt length is : ',  len(vidOfInt))
for x in res['items']:
    vidId = x['id']['videoId']
    # print(x['snippet']['title'])
    # print(x['snippet']['publishedAt'])
    publishedAt = x['snippet']['publishedAt']
    publishedAt = publishedAt.split('T')[0]
    b = datetime.datetime.strptime(publishedAt, date_format)
    delta = test_date - b
    # print(delta.days)
    day_difference = delta.days
    if (day_difference == 0 or day_difference == 1):
        searchUrl = f'''https://www.googleapis.com/youtube/v3/videos?id={vidId}&key={api_key}&part=contentDetails'''
        response = urllib.request.urlopen(searchUrl).read()
        data = json.loads(response)
        all_data = data['items']
        duration = all_data[0]['contentDetails']['duration']
        minutes = int((duration.split('M')[0])[2])
        print(minutes)
        if minutes > vidLength:
            vidLength = minutes
            vidIdOfInt = vidId
        # print(data)
        # print(vidId)
print()

print('Max Length is = ' , vidLength, vidIdOfInt)
