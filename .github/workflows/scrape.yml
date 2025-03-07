import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime

# 示例：爬取示例网站中的关键词
def scrape(keyword):
    url = "https://example.com/search?q=" + keyword
    headers = {'User-Agent': 'Mozilla/5.0'}
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # 提取数据（根据目标网站结构调整）
    results = []
    for item in soup.select('.result-item'):
        title = item.find('h2').text
        link = item.find('a')['href']
        results.append({'title': title, 'link': link})
    
    return results

# 保存数据到docs/data.json
data = {
    'keyword': 'your-keyword',
    'results': scrape('your-keyword'),
    'last_updated': datetime.now().isoformat()
}

with open('docs/data.json', 'w') as f:
    json.dump(data, f, indent=2)
