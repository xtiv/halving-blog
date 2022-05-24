import requests
import time
import json
from decouple import config

url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
params = {
  'start':'1',
  'limit':'2',
  'convert':'USD'
}
headers = {
  'Accepts': 'application/json',
  'X-CMC_PRO_API_KEY': config('API_KEY'),
}

data = json.dumps(requests.get(url, params= params, headers=headers).json())
data_processed = json.loads(data)
print(data_processed["data"][0]["quote"]["USD"]["price"])