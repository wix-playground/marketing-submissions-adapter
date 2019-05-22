import * as log from '@wix/wix-debug';
import axios, { AxiosResponse } from 'axios';

const logger = log('items-controller');

export async function findItems(req, res) {
  const instance =
    (req.query && req.query.instance) || req.get('X-App-Instance');

  logger.debug({
    webContext: req.aspects['web-context'],
    aspects: req.aspects,
    instance,
  });

  const axiosRes: AxiosResponse = await axios.get(
    'https://apps.wix.com/marketing-submissions/_api/submissions/blue-friday-201811-production?offset=0&limit=10',
  );

  const { items = [], totalItems = 0 } = axiosRes.data || {};

  logger.debug({
    items,
    totalItems,
  });

  res.json({
    items: [
      {
        _id: '1',
        a: items[0]['metaSiteId|metaSiteFramedThumbnail'],
        x: items[0]['metaSiteId|title'],
        y: items[0]['metaSiteId|metaSiteUrl'],
        z: items[0].metaSiteId,
      },
      {
        _id: '2',
        a: items[1]['metaSiteId|metaSiteFramedThumbnail'],
        x: items[1]['metaSiteId|title'],
        y: items[1]['metaSiteId|metaSiteUrl'],
        z: items[1].metaSiteId,
      },
      {
        _id: '3',
        a: items[2]['metaSiteId|metaSiteFramedThumbnail'],
        x: items[2]['metaSiteId|title'],
        y: items[2]['metaSiteId|metaSiteUrl'],
        z: items[2].metaSiteId,
      },
      {
        _id: '4',
        a: 'a',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '5',
        a: 'a',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '6',
        a: 'a',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '7',
        a: 'a',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '8',
        a: 'a',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '9',
        a: 'a',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '10',
        a: 'a',
        x: 'x',
        y: 'y',
        z: 'z',
      },
    ],
    totalCount: 10,
  });
}

export async function getItem(req, res) {
  const instance =
    (req.query && req.query.instance) || req.get('X-App-Instance');

  logger.debug({
    webContext: req.aspects['web-context'],
    aspects: req.aspects,
    instance,
  });
  res.json({
    item: {
      _id: '1',
      a: 'a',
      x: 'x',
      y: 'y',
      z: 'z',
    },
  });
}

export async function countItems(req, res) {
  const instance =
    (req.query && req.query.instance) || req.get('X-App-Instance');

  logger.debug({
    webContext: req.aspects['web-context'],
    aspects: req.aspects,
    instance,
  });
  res.json({ totalCount: 100 });
}
