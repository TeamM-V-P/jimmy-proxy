const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  navBar, productView, relatedItems, questionsAndAnswers, serviceReviews,
} = require('../config/services.js');

const router = Router();

router.use('/navBar.js', createProxyMiddleware({
  target: navBar.url,
  pathRewrite: {
    '^/bundles/navBar.js': navBar.bundle,
  },
  changeOrigin: true,
}));

router.use('/productView.js', createProxyMiddleware({
  target: productView.url,
  pathRewrite: {
    '^/bundles/productView.js': productView.bundle,
  },
  changeOrigin: true,
}));

router.use('/relatedItems.js', createProxyMiddleware({
  target: relatedItems.url,
  pathRewrite: {
    '^/bundles/relatedItems.js': relatedItems.bundle,
  },
  changeOrigin: true,
}));

router.use('/questionsAndAnswers.js', createProxyMiddleware({
  target: questionsAndAnswers.url,
  pathRewrite: {
    '^/bundles/questionsAndAnswers.js': questionsAndAnswers.bundle,
  },
  changeOrigin: true,
}));

router.use('/serviceReviews.js', createProxyMiddleware({
  target: serviceReviews.url,
  pathRewrite: {
    '^/bundles/serviceReviews.js': serviceReviews.bundle,
  },
  changeOrigin: true,
}));

module.exports = router;
