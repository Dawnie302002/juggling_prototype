//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.get('/index', function (req, res) {
  res.render('index')
});

router.post('/index', function (req, res) {
  const whereDoYouLive = req.session.data['whereDoYouLive']

  if (whereDoYouLive == 'Glasgow' || whereDoYouLive == 'New York'){
    res.redirect('optional') 
  } else {
    res.redirect('what_ice_cream_do_you_like')
  }
});

router.get('/optional', function (req, res) {
  res.render('optional')
});

router.post('/optional', function (req, res) {
  res.redirect('what_ice_cream_do_you_like')
});

router.get('/what_ice_cream_do_you_like', function (req, res) {
  res.render('what_ice_cream_do_you_like')
});

router.post('/what_ice_cream_do_you_like', function (req, res) {
  res.redirect('page_3')
});

router.get('/page_3', function (req, res) {
  res.render('page_3')
});

router.post('/page_3', function (req, res) {
  res.redirect('page_4')
});
