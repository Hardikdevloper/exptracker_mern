const routes=require('express').Router();
const controller=require('../controller/controller');

routes.route('/api/categories')
  .post(controller.create_Categories)
  .get(controller.get_Categories)

routes.route('/api/transaction')
  .post(controller.create_transaction)
  .get(controller.create_transaction)
  .delete(controller.delete_transaction)
  
routes.route('/api/labels')
  .get(controller.get_labels)

module.exports=routes;