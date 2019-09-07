const mock_swiper = require('./mock/swiper.json');
const mock_home1 = require('./mock/home1.json');
const mock_homeitems1 = require('./mock/homeitems1.json');
const mock_homeitems2 = require('./mock/homeitems2.json');
const mock_homeitems3 = require('./mock/homeitems3.json');
const mock_homeitems4 = require('./mock/homeitems4.json');
const mock_homeitems5 = require('./mock/homeitems5.json');
const mock_homeitems6 = require('./mock/homeitems6.json');
const mock_homeitems7 = require('./mock/homeitems7.json');
const mock_homeitems8 = require('./mock/homeitems8.json');
const mock_categoryitems = require('./mock/categoryitems.json');
const mock_videoitems = require('./mock/videoitems.json');
const mock_attenditems = require('./mock/attenditems.json');
const mock_recommends = require('./mock/recommends.json');
const mock_detail = require('./mock/detail.json');
const mock_message = require('./mock/message.json');

module.exports = {
  devServer: {
    port: 8888,
    before(app) {
      app.get('/swiper', (req, res, next) => {
        res.json(mock_swiper)
      })
      app.get('/home1', (req, res, next) => {
        res.json(mock_home1)
      })
      app.get('/homeitems1', (req, res, next) => {
        res.json(mock_homeitems1)
      })
      app.get('/homeitems2', (req, res, next) => {
        res.json(mock_homeitems2)
      })
      app.get('/homeitems3', (req, res, next) => {
        res.json(mock_homeitems3)
      })
      app.get('/homeitems4', (req, res, next) => {
        res.json(mock_homeitems4)
      })
      app.get('/homeitems5', (req, res, next) => {
        res.json(mock_homeitems5)
      })
      app.get('/homeitems6', (req, res, next) => {
        res.json(mock_homeitems6)
      })
      app.get('/homeitems7', (req, res, next) => {
        res.json(mock_homeitems7)
      })
      app.get('/homeitems8', (req, res, next) => {
        res.json(mock_homeitems8)
      })

      app.get('/categoryitems', (req, res, next) => {
        res.json(mock_categoryitems)
      })
      app.get('/videoitems', (req, res, next) => {
        res.json(mock_videoitems)
      })
      app.get('/attenditems', (req, res, next) => {
        res.json(mock_attenditems)
      })
      app.get('/recommends', (req, res, next) => {
        res.json(mock_recommends)
      })
      app.get('/detail', (req, res, next) => {
        res.json(mock_detail)
      })
      app.get('/message', (req, res, next) => {
        res.json(mock_message)
      })

      app.get('/user', (req, res) => {
        var users = [
          {
            id: 1,
            phone: 123456789,
            name: '管理员',
            description: "什么都没有留下",
            "thumbnail": "/static/images/head2.jpg",
            "socialize": {
              "follow": 8888,
              "fans": 88888,
              "friends": 888
            }
          },
          {
            id: 2,
            phone: 987654321,
            name: '游客',
            description: "留下了一堆东西",
            "thumbnail": "/static/images/head3.jpg",
            "socialize": {
              "follow": 333,
              "fans": 33333,
              "friends": 33
            }
          }
        ]
        var ret = null
        users.forEach((user) => {
          if (req.query.phone == user.phone) ret = user
        })
        res.json(ret)
      })
    }
  }
}