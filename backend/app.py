from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

class Response:
	def __init__(self, **kwargs):
		self.response = kwargs

	def str(self):
		return str(self.response)

	def json(self):
		return self.response

	def __repr__(self):
		return self.response

@app.route('/hello')
def helloworld():
	response = Response(result="Hello, World!")
	json = response.json()
	return json

if __name__ == '__main__':
	app.run(debug=True, port=3001)