import { BadRequestError } from '../model/error/bad-request';
import { AlreadyExistsError } from '../model/error/already-exists';
import { NotFoundError } from '../model/error/not-found';
import { UnauthorizedError } from '../model/error/unauthorized';

/**
 * A helper that allows passing errors from async/await functions
 * to express 'next' for correct handling.
 * @param {*} fn the function to apply middleware to.
 */
export const wrapError = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export function errorMiddleware(err, req, res, next) {
  switch (err.constructor.name) {
    case BadRequestError.name:
      res.status(400).send({ message: err.message });
      break;
    case AlreadyExistsError.name:
      res.status(409).send({ message: err.message });
      break;
    case UnauthorizedError.name:
      res.status(401).send({ message: err.message });
      break;
    case NotFoundError.name:
      res.status(404).send({ message: err.message });
      break;
    default:
      res.status(500).send({ message: err.message });
  }
}
