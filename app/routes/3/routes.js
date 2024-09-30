module.exports = function (router) {

  var version = '3';

  // Add your routes here
  router.get('/' + version + '/index', function (req, res) {
    res.render('/' + version + '/index')
  });

  router.post('/' + version + '/index', function (req, res) {
    const whereDoYouLive = req.session.data['whereDoYouLive']

    if (whereDoYouLive == 'Glasgow' || whereDoYouLive == 'New York'){
      res.redirect('optional') 
    } else {
      res.redirect('what_ice_cream_do_you_like')
    }
  });

  router.get('/' + version + '/optional', function (req, res) {
    res.render('/' + version + '/optional')
  });

  router.post('/' + version + '/optional', function (req, res) {
    res.redirect('what_ice_cream_do_you_like')
  });

  router.get('/' + version + '/what_ice_cream_do_you_like', function (req, res) {
    res.render('/' + version + '/what_ice_cream_do_you_like')
  });

  router.post('/' + version + '/what_ice_cream_do_you_like', function (req, res) {
    res.redirect('page_3')
  });

  router.get('/' + version + '/page_3', function (req, res) {
    res.render('/' + version + '/page_3')
  });

  router.post('/' + version + '/page_3', function (req, res) {
    res.redirect('page_4')
  });
}
