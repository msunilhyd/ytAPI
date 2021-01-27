import requests
page = requests.get("http://dataquestio.github.io/web-scraping-pages/simple.html")
# print(page.content)

from bs4 import BeautifulSoup
soup = BeautifulSoup(page.content, 'html.parser')
# print(list(soup.children))

# print([type(item) for item in list(soup.children)])

html = list(soup.children)[2]
# print(list(html.children))
body = list(html.children)[3]
p = list(body.children)[1]
# print(p.get_text())


f = open("footballTwo.html", "r")
content = f.read()
soup = BeautifulSoup(content, 'lxml')
# print(soup.prettify())
mylis = soup.find_all("li", {"class": "FootballLiveCompetitionList__CompetitionListItem-sc-112crmw-1 dRylsD"})
# print(len(mylis))

for lis in mylis:
    # company_names = lis.find_all('span', {"class": "CompactText__DataCompactText-sc-1rtlz3k-0 jdvCWg"})
    # print(lis)
    league_title = lis.find('h3', {"class": "ContentPanel__ContentPanelTitle-sc-1izwmji-1"})
    print(league_title.text)
    company_names_first = lis.find_all('span', {"class": "FootballMatchListItem__TeamA-sc-9lgblw-6 khEMhE"})
    company_names_second = lis.find_all('span', {"class": "FootballMatchListItem__TeamB-sc-9lgblw-8 kVnMZR"})

    # print(len(company_names_first))
    # print(len(company_names_second))
    for i in range(0, len(company_names_first)):
        print(company_names_first[i].text, ' vs ', company_names_second[i].text)
    print("+++++++++++++++")
