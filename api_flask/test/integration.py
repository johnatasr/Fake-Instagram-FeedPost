import os
import sys
sys.path.append('../')
from system.database import create_database
import unittest

## Testando se a base existe
class BaseTest(unittest.TestCase):

    def setUp(self):
        if os.path.exists('./db/datashop.db'):
            os.system('rm ./db/datashop.db')
        create_database('./db/datashop.db')

    def tearDown(self):
        os.system('rm ./db/datashop.db')


import sys
sys.path.append('../..')
from base_test import BaseTest
from models.user import UserModel
from models.store import StoreModel
from models.purchase_history import PurchaseHistoryModel
import os
os.chdir('../..')
import unittest


class DataBaseIntegrationTests(BaseTest):

    def test_user_model_crud(self):
        self.user_model = UserModel(6, 'TestUser', 't@t.pl')
        self.assertIsNone(self.user_model.find_by_name('TestUser'))
        self.user_model.insert_into_table(self.user_model.username,
                                    self.user_model.password)
        self.assertIsNotNone(self.user_model.find_by_name('TestUser'))

    def test_store_model_crud(self):
        self.store_model = StoreModel(6, 'TestProduct', 19.99)
        self.assertIsNone(self.store_model.find_by_product('TestProduct'))
        self.assertIsNotNone(self.store_model.find_by_product('car_1'))

if __name__ == '__main__':
    unittest.main()