import UserController from '../controllers/user';

module.exports = app => {
  const models = app.get('db').teste_api.models;
  const { login } = UserController(models);

  app
    .route('/user/login')
    .post(login);
  
  app
    .route('/user/create')
    .post((req, res) => models.User.create({login: "leo", password: "1234"}))
}