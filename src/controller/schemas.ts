export async function findSchemas(req, res) {
  res.json([
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
  ]);
}

export async function listSchemas(req, res) {
  res.json([
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
  ]);
}
