import json

a = open('korean.json')

with open('korean.json') as readfile:
    j = json.loads(readfile.read())

print(j['dramas'])
final = {}
for i in j['dramas']:
    final[i['name']] = i

print(final)

with open('koreanDramaDatabase.json', 'w') as outfile:
    json.dump(final, outfile, indent=2, ensure_ascii=False)
