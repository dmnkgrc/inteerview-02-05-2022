import Defs from 'configs/defs';

export function validateEmail(email: string | undefined): string | undefined {
  const { emptyErrorMessage, invalidErrorMessage } = {
    emptyErrorMessage: 'Field is required',
    invalidErrorMessage: 'Invalid email',
  };

  if (!email) return emptyErrorMessage;

  const localPart = email.split('@')[0];

  return !email.match(Defs.EMAIL_REGEX) ||
    localPart.length > Defs.EMAIL_LOCAL_PART_MAX_LENGTH
    ? invalidErrorMessage
    : undefined;
}

export const validateAge = (age: number | undefined) => {
  const { emptyErrorMessage, invalidErrorMessage } = {
    emptyErrorMessage: 'Field is required',
    invalidErrorMessage: 'Invalid age specified',
  };

  if (!age) return emptyErrorMessage;

  const isAgeValid =
    !Number.isNaN(age) &&
    age > Defs.AGE_MIN &&
    age < Defs.AGE_MAX &&
    Defs.ONLY_DIGITS.test(String(age));

  return !isAgeValid ? invalidErrorMessage : undefined;
};

export const validateFirstName = (firstName: string | undefined) => {
  const { emptyErrorMessage, invalidErrorMessage } = {
    emptyErrorMessage: 'Field is required',
    invalidErrorMessage: 'Invalid first name',
  };

  return !firstName
    ? emptyErrorMessage
    : !Defs.NAME_REGEX.test(firstName)
    ? invalidErrorMessage
    : undefined;
};

export const validateLastName = (lastName: string | undefined) => {
  const { emptyErrorMessage, invalidErrorMessage } = {
    emptyErrorMessage: 'Field is required',
    invalidErrorMessage: 'Invalid last name',
  };

  return !lastName
    ? emptyErrorMessage
    : !Defs.NAME_REGEX.test(lastName)
    ? invalidErrorMessage
    : undefined;
};
