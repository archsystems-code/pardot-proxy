import sys
from importlib import reload
reload(sys)
from pypardot.client import PardotAPI

visitor_id = sys.argv[1]
email = sys.argv[2]
password = sys.argv[3]
key = sys.argv[4]
list_id = '98751'
api_version = 3
p = PardotAPI(
  email=email,
  password=password,
  user_key=key,
  version=api_version
  )
p.authenticate()
visitor = p.visitors.read(visitor_id)['visitor']
prospect_id = visitor['prospect']['id']
is_a_member = p.listmemberships.read(list_id, prospect_id)
response = "Already a member"
if not is_a_member:
  response = p.listmemberships.create(list_id, prospect_id)
print(response)
