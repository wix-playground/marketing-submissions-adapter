import { Router } from 'express';
import * as wixExpressRequireHttps from '@wix/wix-express-require-https';
import * as bodyParser from 'body-parser';
import { findItems, getItem, countItems } from './controller/items';
import { findSchemas, listSchemas } from './controller/schemas';
import { wrapError, errorMiddleware } from './utils/error-middleware';

module.exports = (app: Router) => {
  app.use(wixExpressRequireHttps);

  app.get('/', (req, res) => {
    res.json({
      success: true,
      payload: 'Hello world!',
    });
  });

  app.use(bodyParser.json());

  app.post('/schemas/find', wrapError(findSchemas));
  app.post('/schemas/list', wrapError(listSchemas));
  app.post('/data/find', wrapError(findItems));
  app.post('/data/get', wrapError(getItem));

  app.post('/data/count', wrapError(countItems));

  app.use(errorMiddleware);

  return app;
};
