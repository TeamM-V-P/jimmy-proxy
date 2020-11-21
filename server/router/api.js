const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  navBar, productView, relatedItems, questionsAndAnswers, serviceReviews,
} = require('../config/services.js');

const router = Router();

router.use(navBar.api, createProxyMiddleware({
  target: navBar.url, changeOrigin: true,
}));

router.use(productView.api, createProxyMiddleware({
  target: productView.url, changeOrigin: true,
}));

router.use(relatedItems.api, createProxyMiddleware({
  target: relatedItems.url, changeOrigin: true,
}));

router.use(questionsAndAnswers.api, createProxyMiddleware({
  target: questionsAndAnswers.url, changeOrigin: true,
}));

router.use(serviceReviews.api, createProxyMiddleware({
  target: serviceReviews.url, changeOrigin: true,
}));

module.exports = router;
