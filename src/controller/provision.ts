import * as log from '@wix/wix-debug';

const logger = log('provision-controller');

export async function provision(req, res) {
  const instance =
    (req.query && req.query.instance) || req.get('X-App-Instance');

  logger.debug({
    webContext: req.aspects['web-context'],
    aspects: req.aspects,
    instance,
  });

  res.json({});
}
