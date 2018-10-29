import React from 'react';
import { string, arrayOf, number, node, bool } from 'prop-types';
import styled from 'styles';

import { Paragraph } from 'components/ui/base';

import { getRgba } from 'styles/helpers';

export const StepperHolder = styled.div`
  margin-top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: auto;
  }
`;

const StepGraphicsHolder = styled.div`
  position: relative;
`;

const SingleStepHolder = styled.div`
  display: flex;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: row-reverse;
    text-align: left;
  }

  &:nth-child(2n) {
    flex-direction: row-reverse;
    text-align: left;

    ${StepGraphicsHolder} {
      margin-left: 450px;

      @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
        margin-left: 350px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        margin-left: auto;
      }
    }
  }
`;

const OuterCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 58px;
  height: 58px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 29px;
    height: 29px;
  }
`;

const InnerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.brightest};
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
`;

const StepNumber = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.primaryDarker};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    display: none;
  }
`;

const Rectangle = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  width: 14px;
  height: 100%;
  background: ${({ theme, isLast }) =>
    isLast
      ? `linear-gradient(to bottom, ${getRgba(
          theme.colors.primary,
          1
        )} 0%, ${getRgba(theme.colors.brighter, 1)} 100%)`
      : theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 7px;
    top: 20px;
  }
`;

const StepContentHolder = styled.article`
  width: 450px;
  padding: 0 15px;
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 350px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;
  }
`;

const StepTitle = styled.h1`
  font-size: 1.25em;
  padding-bottom: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin-top: 3px;
  }
`;

const StepDescription = styled(Paragraph)`
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    text-align: left;
    margin-left: 0;
  }
`;

export const SingleStep = ({
  title,
  description,
  stepNumber,
  customContent,
  isLast,
}) => {
  return (
    <SingleStepHolder>
      <StepContentHolder>
        <StepTitle>{title}</StepTitle>
        {description &&
          description.map((paragraph, index) => {
            return <StepDescription key={index}>{paragraph}</StepDescription>;
          })}
        {customContent && customContent}
      </StepContentHolder>
      <StepGraphicsHolder>
        <OuterCircle>
          <InnerCircle>
            <StepNumber>{stepNumber}</StepNumber>
          </InnerCircle>
        </OuterCircle>
        <Rectangle isLast={isLast} />
      </StepGraphicsHolder>
    </SingleStepHolder>
  );
};

SingleStep.defaultProps = {
  description: [],
  customContent: null,
  isLast: false,
};

SingleStep.propTypes = {
  title: string.isRequired,
  description: arrayOf(string),
  stepNumber: number.isRequired,
  customContent: node,
  isLast: bool,
};
