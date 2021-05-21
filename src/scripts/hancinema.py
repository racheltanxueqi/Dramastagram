import json
import requests
from bs4 import BeautifulSoup

def findDramaImage(drama_soup):
    img_sub_url = drama_soup.find('div', { "class": 'box main_image main_image_work'}).find('img')['src']
    return 'https:' + img_sub_url

def getGenres(genresATag):
    final = []
    for aTag in genresATag:
        final.append(aTag.get_text())
    return final

def getKoreanNameAndRomanized(korean):
    lel = korean.get_text().split('|')
    return lel[0].strip(), lel[1].strip()

final_obj = []


for i in range(1, 6):
    URL = 'https://www.hancinema.net/all_korean_movies_dramas.php?work_type=drama&year_start=2021&year_end=2021&p=' + str(i)
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, 'html.parser')

    li = soup.find("ul", { "class" : "work_list" })

    
    children = li.find_all("li")
    for node in children:
        try:
            child_json = {}
            drama_sub_url = node.find('a')
            drama_url = 'https://www.hancinema.net/' + drama_sub_url['href']
            print(drama_url)

            drama_page = requests.get(drama_url)

            drama_soup = BeautifulSoup(drama_page.content, 'html.parser')
            child_json['imageUrl'] = findDramaImage(drama_soup)

            data_node = drama_soup.find('div', { "class": "box work_info"})
            child_json['name'] = data_node.find('h1').get_text()

            paragraphs = data_node.findAll('p')

            child_json['year'] = paragraphs[0].findAll('a')[1].get_text()

            child_json['genres'] = getGenres(paragraphs[1].findAll('a'))

            child_json['airing'] = paragraphs[6].find('span').get_text()

            child_json['korean_name'], child_json['romanized_korean'] = getKoreanNameAndRomanized(data_node.find('h3'))
            print(child_json)
            final_obj.append(child_json)
        except:
            continue
with open('korean.json', 'w') as outfile:
    json.dump({'dramas':final_obj}, outfile, indent=2, ensure_ascii=False)

