import * as log from '@wix/wix-debug';

const logger = log('schemas-controller');

export async function findSchemas(req, res) {
  const instance =
    (req.query && req.query.instance) || req.get('X-App-Instance');

  logger.debug({
    webContext: req.aspects['web-context'],
    aspects: req.aspects,
    instance,
  });

  res.json({
    schemas: [
      {
        id: '123',
        ttl: 10000,
        allowedOperations: ['find', 'count', 'get'],
        fields: {
          _id: {
            displayName: '_id',
            type: 'text',
            queryOperators: ['eq', 'ne', 'startsWith', 'endsWith'],
          },
          a: {
            displayName: 'a',
            type: 'text',
            queryOperators: ['eq', 'ne', 'startsWith', 'endsWith'],
          },
          x: {
            displayName: 'x',
            type: 'text',
            queryOperators: ['eq', 'ne', 'startsWith', 'endsWith'],
          },
          y: {
            displayName: 'y',
            type: 'text',
            queryOperators: ['eq', 'ne', 'startsWith', 'endsWith'],
          },
          z: {
            displayName: 'z',
            type: 'text',
            queryOperators: ['eq', 'ne', 'startsWith', 'endsWith'],
          },
        },
      },
    ],
  });
}

export async function listSchemas(req, res) {
  const instance =
    (req.query && req.query.instance) || req.get('X-App-Instance');

  logger.debug({
    webContext: req.aspects['web-context'],
    aspects: req.aspects,
    instance,
  });
  res.json({
    schemas: [
      {
        id: '123',
        ttl: 10000,
        allowedOperations: ['find', 'count', 'get'],
        fields: {
          _id: {
            displayName: '_id',
            type: 'text',
            queryOperators: ['eq', 'ne', 'startsWith', 'endsWith'],
          },
          a: {
            displayName: 'a',
            type: 'text',
            queryOperators: ['eq', 'ne', 'startsWith', 'endsWith'],
          },
          x: {
            displayName: 'x',
            type: 'text',
            queryOperators: ['eq', 'ne', 'startsWith', 'endsWith'],
          },
          y: {
            displayName: 'y',
            type: 'text',
            queryOperators: ['eq', 'ne', 'startsWith', 'endsWith'],
          },
          z: {
            displayName: 'z',
            type: 'text',
            queryOperators: ['eq', 'ne', 'startsWith', 'endsWith'],
          },
        },
      },
    ],
  });
}
