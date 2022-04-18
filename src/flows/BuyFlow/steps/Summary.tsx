import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonTypes } from 'ui-kit';
import { BuyFlowSteps, CollectedDataModel } from '../BuyFlow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

interface SummaryStepProps {
  goToStep: (toStep: BuyFlowSteps) => void;
  collectedData: CollectedDataModel;
}

//TODO: could be moved to utils file
const capitalizeFirstLetter = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const Summary: React.FC<SummaryStepProps> = (props) => {
  const mainClass = 'step-summary';

  return (
    <>
      {Object.entries(props.collectedData).map(([field, value]) =>
        value ? (
          <div key={field}>
            <span>
              {capitalizeFirstLetter(field)}: {value}
            </span>
            <Button
              id={`${mainClass}-to-step__button`}
              type={ButtonTypes.BUTTON}
              onClick={() => props.goToStep(field as BuyFlowSteps)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          </div>
        ) : null
      )}

      <div>
        <Link to="/purchased=dev_ins">
          <Button id={`${mainClass}-next__button`} type={ButtonTypes.SUBMIT}>
            Purchase
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Summary;
