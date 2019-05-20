import * as log from '@wix/wix-debug';

const logger = log('items-controller');

export async function findItems(req, res) {
  logger.debug({
    webContext: req.aspects['web-context'],
    aspects: req.aspects,
  });

  res.json({
    items: [
      {
        _id: '1',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '2',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '3',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '4',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '5',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '6',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '7',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '8',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '9',
        x: 'x',
        y: 'y',
        z: 'z',
      },
      {
        _id: '10',
        x: 'x',
        y: 'y',
        z: 'z',
      },
    ],
    totalCount: 10,
  });
}

export async function getItem(req, res) {
  logger.debug({
    webContext: req.aspects['web-context'],
    aspects: req.aspects,
  });
  res.json({
    item: {
      _id: '1',
      x: 'x',
      y: 'y',
      z: 'z',
    },
  });
}

export async function countItems(req, res) {
  logger.debug({
    webContext: req.aspects['web-context'],
    aspects: req.aspects,
  });
  res.json({ totalCount: 100 });
}
