import React, { useState } from 'react';
import { Button, ButtonTypes, Input, InputType } from 'ui-kit';
import { validateEmail } from 'flows/BuyFlow/validations';

interface EmailStepProps {
  email: string | undefined;
  handleDataChange: (field: string, value: string) => void;
  handleNextClick: () => void;
  handlePrevClick: () => void;
}

const EmailStep: React.FC<EmailStepProps> = ({
  email,
  handleDataChange,
  handlePrevClick,
  ...props
}) => {
  const [validationMessage, setValidationMessage] = useState<
    string | undefined
  >();

  const handleNextClick = () => {
    const validationMessage = validateEmail(email);
    setValidationMessage(validationMessage);
    !validationMessage && props.handleNextClick();
  };

  const mainClass = 'step-email';

  return (
    <>
      <Input
        id={`${mainClass}__input`}
        type={InputType.EMAIL}
        defaultValue={email}
        label={'Email'}
        validationMessage={validationMessage}
        onChange={(e) => handleDataChange('email', e.currentTarget.value)}
        onBlur={(e) =>
          setValidationMessage(validateEmail(e.currentTarget.value))
        }
      />

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

export default EmailStep;
