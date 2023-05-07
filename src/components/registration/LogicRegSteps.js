import React from 'react';
import styled from 'styled-components';
import RegComponent from './registration';

const MainContainer = styled.div`
  width: 100%;
//   max-width: 600px;
  margin: 0 auto;
  background-color: #2D2C31;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 50px;
  :before {
    content: '';
    position: absolute;
    background: #f3e7f3;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: '';
    position: absolute;
    background: #4F4E55;
    height: 14px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 1px;
  }
`

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ step }) =>
        step === 'completed' ? '#4F4E55' : '#F3E7F3'};;
  border: 3px solid ${({ step }) =>
        step === 'completed' ? '#4F4E55' : '#F3E7F3'};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 50px;
  margin-top: 50px;
`

const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: #4F4E55;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-weight: var(--open-bold);
  font-size: 15px;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #f3e7f3;
    color: #000000;
    cursor: not-allowed;
  }
`

const ProgressSteps = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [key, setKey] = React.useState(0);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
    setKey(key + 1);
  }

  const steps = [
    {
      label: 'REGISTRATION',
      step: 1,
      content: <RegComponent finallyNextStep={nextStep}/>,
    },
    {
      label: 'ACCOUNT',
      step: 2,
      content: "<Header/>",
    },
    {
      label: 'RECOMENDATION',
      step: 3,
      content: "Hello, I am Fine",
    },
    {
      label: 'LANGUAGE',
      step: 4,
      content: "Eat",
    },
    {
      label: 'END',
      step: 5,
      content: "Meat",
    },
    // {
    //   rout: null,
    // }
  ];

  const prevStep = () => {
    setActiveStep(activeStep - 1);
    setKey(key - 1);
  }

  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;
  const indexStepInf = steps[activeStep - 1];

  return (
    <div>
        <div class="header__content-post">
            <img class="logo__header post-logo" src="/img/logo/logo.png" alt="" />
            <h1 class="title-text__header">{indexStepInf.label}</h1>
        </div>
        <div className="square-box_content">
            <MainContainer>
                  <StepContainer width={width}>
                    {steps.map(({ step }) => (
                      <StepWrapper key={step}>
                        <StepStyle step={activeStep >= step ? 'completed' : 'incomplete'} />
                      </StepWrapper>
                    ))}
                  </StepContainer>
                  <div className="box-container">
                    <div className="box-content" key={key}>
                        {
                          indexStepInf.content
                        }
                    </div>
                    {activeStep === 1 ? (
                        null
                    ) : (
                        <ButtonsContainer>
                            <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
                              Previous
                            </ButtonStyle>
                            <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>
                              Next
                            </ButtonStyle>
                        </ButtonsContainer> 
                        )
                    }
                  </div>
            </MainContainer>
        </div>
    </div>
  );
};

export default ProgressSteps;