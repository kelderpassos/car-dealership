export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
  undefined = 'undefined',
}

type ErrorResponseObject = {
  httpStatus: number,
  message: string,
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    httpStatus: 400,
    message: 'EntityNotFound',
  },
  InvalidMongoId: {
    httpStatus: 400,
    message: 'InvalidMongoId',
  },
  undefined: {
    httpStatus: 500,
    message: 'internal server error ',
  },
};
