from models.post import PostModel
from flask_restful import Resource


class Post(Resource):

    def get(self, post_id):
        post = PostModel.find_post(post_id)
        if post:
            return {'post': [p.json() for p in post]}, 200
        else:
            return {'message': 'No post found!'}, 404


class PostsList(Resource):

    def get(self):
        posts = PostModel.find_all_posts()
        if posts:
            return {'posts': [post.json() for post in posts]}, 200
        else:
            return {'message': 'No posts found!'}, 404

