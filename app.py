import sys
reload(sys)
sys.setdefaultencoding('utf8')
from pypardot.client import PardotAPI

visitor_id = sys.argv[1]
email = sys.argv[2]
password = sys.argv[3]
key = sys.argv[4]
list_id = 98751
p = PardotAPI(
  email=email,
  password=password,
  user_key=user_key
  )
p.authenticate()
print(p)
visitor = p.visitors.read(visitor_id)
prospect_id = visitor['prospect']['id']
# response = p.prospects.add_to_list(prospect_id, list_id)
print(visitor)
