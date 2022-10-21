export enum ErrorTypes {
  InvalidMongoId = 'InvalidMongoId',
  undefined = 'undefined',
  ObjectNotFound = 'ObjectNotFound',
}

type ErrorResponseObject = {
  httpStatus: number,
  error: string,
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  InvalidMongoId: {
    httpStatus: 400,
    error: 'Id must have 24 hexadecimal characters',
  },
  undefined: {
    httpStatus: 500,
    error: 'internal server error ',
  },
  ObjectNotFound: {
    httpStatus: 404,
    error: 'Object not found',
  },
};
