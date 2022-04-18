import React, { useState } from 'react';
import { Input, InputType, Button, ButtonTypes } from 'ui-kit';
import { validateAge } from 'flows/BuyFlow/validations';

interface AgeStepProps {
  age: number | undefined;
  handleDataChange: (field: string, value: number) => void;
  handleNextClick: () => void;
}

const AgeStep: React.FC<AgeStepProps> = ({
  age,
  handleDataChange,
  ...props
}) => {
  const [validationMessage, setValidationMessage] = useState<
    string | undefined
  >();

  const mainClass = 'age-step';

  const handleNextClick = () => {
    const validationMessage = validateAge(age);
    setValidationMessage(validationMessage);
    !validationMessage && props.handleNextClick();
  };

  return (
    <>
      <Input
        id={`${mainClass}__input`}
        type={InputType.NUMBER}
        defaultValue={age}
        label={'Age'}
        validationMessage={validationMessage}
        onChange={(e) => handleDataChange('age', Number(e.currentTarget.value))}
        onBlur={(e) =>
          setValidationMessage(validateAge(Number(e.currentTarget.value)))
        }
      />

      <div>
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

export default AgeStep;
