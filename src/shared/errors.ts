export enum ErrorType {
  BUSINESS = 'BusinessError',
  SYSTEM = 'SystemError',
}


export enum ErrorName {
  SYSTEM_ERROR = 'SystemError',
}

export interface ErrorInterface extends Error {
  name: ErrorName;
  type: ErrorType;
  message: string;
} 


export function isErrorInterface(error: any): error is ErrorInterface {
  return (
    error instanceof Error &&
    'name' in error &&
    'type' in error &&
    'message' in error &&
    Object.values(ErrorName).includes((error as ErrorInterface).name) &&
    Object.values(ErrorType).includes((error as ErrorInterface).type)
  );
}