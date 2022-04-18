import React from 'react';
import styled from 'styled-components';

import { Error } from '../Error/Error';

export enum InputType {
  EMAIL = 'email',
  NUMBER = 'number',
  TEXT = 'text',
}

interface InputValuesProps {
  type: InputType;
  value?: string | number;
  id?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  autoComplete?: string;
  labelClassName?: string;
  disabled?: boolean;
  defaultValue?: string | number;
  validationMessage?: string;
  tabIndex?: number;
}

interface InputCallbackProps {
  onChange: (
    event: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    event: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export interface InputProps extends InputValuesProps, InputCallbackProps {}

const StyledInput = styled.input`
  padding: 5px 10px;
  margin-left: 20px;
`;

const StyledInputContainer = styled.div`
  position: relative;
`;

const StyledInputContent = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  width: 80px;
`;

const Input: React.FC<InputProps> = ({
  id,
  type,
  value,
  label,
  labelClassName,
  validationMessage,
  ...rest
}) => {
  return (
    <StyledInputContainer>
      <StyledInputContent>
        <StyledLabel className={labelClassName} htmlFor={`${id}__input`}>
          {label}
        </StyledLabel>

        <StyledInput id={`${id}__input`} type={type} value={value} {...rest} />
      </StyledInputContent>

      {validationMessage && (
        <Error id={`${id}__error`} message={validationMessage} />
      )}
    </StyledInputContainer>
  );
};

export default Input;
