import React, { useState } from 'react';
import styled from 'styled-components';
import { ProductIds, PRODUCT_IDS_TO_NAMES } from 'flows';
import { EmailStep, NameStep, AgeStep, Summary } from './steps';

interface BuyFlowProps {
  productId: ProductIds;
}

export enum BuyFlowSteps {
  EMAIL = 'email',
  AGE = 'age',
  SUMMARY = 'summary',
  NAME = 'name',
}

export interface CollectedDataModel {
  email: string | undefined;
  age: number | undefined;
  name: string | undefined;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 270px;
  margin: 0 auto;
`;

const BuyFlow: React.FC<BuyFlowProps> = (props) => {
  const [currentStep, setStep] = useState(BuyFlowSteps.AGE);
  const [collectedData, updateData] = useState<CollectedDataModel>({
    age: undefined,
    email: undefined,
    name: undefined,
  });

  const isDesignerInsurance = props.productId === ProductIds.desIns;

  const handleDataChange = (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value });
  };

  const generateQuestion = () => {
    switch (currentStep) {
      case BuyFlowSteps.AGE: {
        return (
          <AgeStep
            age={collectedData.age}
            handleDataChange={handleDataChange}
            handleNextClick={() => setStep(BuyFlowSteps.EMAIL)}
          />
        );
      }
      case BuyFlowSteps.EMAIL: {
        return (
          <EmailStep
            email={collectedData.email}
            handleDataChange={handleDataChange}
            handlePrevClick={() => setStep(BuyFlowSteps.AGE)}
            handleNextClick={() =>
              setStep(
                isDesignerInsurance ? BuyFlowSteps.NAME : BuyFlowSteps.SUMMARY
              )
            }
          />
        );
      }
      case BuyFlowSteps.NAME: {
        return (
          <NameStep
            name={collectedData.name}
            handleDataChange={handleDataChange}
            handleNextClick={() => setStep(BuyFlowSteps.SUMMARY)}
            handlePrevClick={() => setStep(BuyFlowSteps.EMAIL)}
          />
        );
      }
      default: {
        return (
          <Summary
            collectedData={collectedData}
            goToStep={(toStep) => setStep(toStep)}
          />
        );
      }
    }
  };

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>

      <StyledContainer>{generateQuestion()}</StyledContainer>
    </>
  );
};

export default BuyFlow;
