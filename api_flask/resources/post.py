from models.post import PostModel
from flask_restful import Resource


class PostsList(Resource):

    def get(self):
        posts = PostModel.find_all_posts()
        if posts:
            return {'posts': [post.json() for post in posts]}, 200
        else:
            return {'message': 'No posts found!'}, 404

