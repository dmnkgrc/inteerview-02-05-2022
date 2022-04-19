import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Button, ButtonTypes, Input, InputType } from 'ui-kit';
import { validateFirstName, validateLastName } from 'flows/BuyFlow/validations';

interface NameStepProps {
  name: string | undefined;
  handleDataChange: (field: string, value: string) => void;
  handleNextClick: () => void;
  handlePrevClick: () => void;
}

const StyledFirstName = styled.div`
  margin-bottom: 30px;
`;

const StepTwo: React.FC<NameStepProps> = ({
  handleDataChange,
  handlePrevClick,
  ...props
}) => {
  const [name, setName] = useState<{
    first: string;
    last: string;
  }>({ first: '', last: '' });

  const [validationMessage, setValidationMessage] = useState<{
    firstName?: string;
    lastName?: string;
  }>();

  useEffect(() => {
    const [first, last] = props.name?.split(' ') || ['', ''];
    setName({ first, last });
  }, [props.name]);

  const mainClass = 'step-name';

  const handleNextClick = () => {
    const validationMessageFirstName = validateFirstName(name.first);
    const validationMessageLastName = validateLastName(name.last);

    setValidationMessage({
      firstName: validationMessageFirstName,
      lastName: validationMessageLastName,
    });

    const isNameValid =
      !validationMessageFirstName && !validationMessageLastName;

    if (isNameValid) {
      handleDataChange('name', `${name.first} ${name.last}`);
      props.handleNextClick();
    }
  };

  return (
    <>
      <StyledFirstName>
        <Input
          id={`${mainClass}-firstname__input`}
          type={InputType.TEXT}
          value={name.first}
          label={'First Name'}
          validationMessage={validationMessage?.firstName}
          onChange={(e) => setName({ ...name, first: e.currentTarget.value })}
          onBlur={(e) =>
            setValidationMessage({
              ...validationMessage,
              firstName: validateFirstName(e.currentTarget.value),
            })
          }
        />
      </StyledFirstName>

      <div>
        <Input
          id={`${mainClass}-lastname__input`}
          type={InputType.TEXT}
          value={name.last}
          label={'Last Name'}
          validationMessage={validationMessage?.lastName}
          onChange={(e) => setName({ ...name, last: e.currentTarget.value })}
          onBlur={(e) =>
            setValidationMessage({
              ...validationMessage,
              lastName: validateLastName(e.currentTarget.value),
            })
          }
        />
      </div>

      <div>
        <Button
          id={`${mainClass}-prev__button`}
          onClick={handlePrevClick}
          type={ButtonTypes.SUBMIT}
        >
          Prev
        </Button>

        <Button
          id={`${mainClass}-next__button`}
          onClick={handleNextClick}
          type={ButtonTypes.SUBMIT}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default StepTwo;
