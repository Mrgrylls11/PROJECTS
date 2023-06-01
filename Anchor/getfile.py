import requests
import json

# Fetch profile data from the website
response = requests.get('https://topmate.io/akshay')

# Process the fetched data as needed
profile_data = response.text

# Export profile data as JSON
with open('Anchor/profile.json', 'w') as file:
    json.dump(profile_data, file)



from flask import Flask, request

app = Flask(__name__)

@app.route('/fetch_link')
def fetch_link():
    link = request.args.get('link')

    # Perform further processing or fetching using the link
    # You can also return the fetched content as a response

    return 'Link fetched'

if __name__ == '__main__':
    app.run()