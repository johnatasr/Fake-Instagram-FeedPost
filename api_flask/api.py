from flask import Flask, jsonify
from flask_restful import Api
from resources.post import PostsList
from db.database import create_database
# from security import authenticate, identity
# from flask_jwt import JWT, jwt_required, JWTError

app = Flask(__name__)
api = Api(app)
app.secret_key = 'test_app134679124578235689'

api.add_resource(PostsList, '/posts')

# @app.errorhandler(JWTError)
# def auth_error_handler(err):
#     return jsonify({'message': 'Could not authorize user.'}), 400

if __name__ == '__main__':
    # create_database('./db/data.db')
    app.run()