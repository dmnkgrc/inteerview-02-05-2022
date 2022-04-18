import React from 'react';
import styled from 'styled-components';

export interface ValidationErrorProps {
  id: string;
  message?: string;
  className?: string;
}

export const ValidationError: React.FunctionComponent<ValidationErrorProps> = ({
  id,
  className,
  message,
}) => {
  return (
    <p id={id} className={className}>
      {message}
    </p>
  );
};

export const Error = styled(ValidationError)<ValidationErrorProps>`
  color: #e00034;
  font-size: 14px;
  position: absolute;
  top: 15px;
  left: 100px;
`;
