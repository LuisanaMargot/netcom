var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'NetCom', page_name : 'inicio' });
});


router.get('/nosotros', function(req, res, next) {
  res.render('pages/Nosotros', { title: 'NetCom | Nosotros', page_name : 'nosotros' });
});

router.get('/servicios', function(req, res, next) {
  res.render('pages/servicios', { title: 'NetCom | Servicios', page_name : 'servicios' });
});

router.get('/contacto', function(req, res, next) {
  res.render('pages/contacto', { title: 'NetCom | Contacto', page_name : 'contacto' });
});

router.get('/faqs', function(req, res, next) {
  res.render('pages/FAQS', { title: 'NetCom | FAQS', page_name : 'FAQS' });
});

module.exports = router;
