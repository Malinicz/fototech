import React from 'react';
import styled from 'styles';
import { arrayOf, shape, string, number } from 'prop-types';

const SegmentedButtonsHolder = styled.div`
  display: flex;
  height: 47px;
  border: ${({ theme }) => `3px solid ${theme.colors.secondary}`};
  border-radius: 5px;
`;

const SegmentButton = styled.button`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  width: ${({ width }) => width || 200}px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.brightest : theme.colors.secondaryDarker};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border-right: ${({ theme }) => `3px solid ${theme.colors.secondary}`};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : 'transparent'};
  cursor: pointer;

  &:last-child {
    border-right: none;
  }
`;

const SegmentButtonLink = styled.a`
  &:hover ${SegmentButton} {
    opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
  }
`;

export const SegmentedButtons = ({ segments, activeLink, buttonWidth }) => {
  return (
    <SegmentedButtonsHolder>
      {segments.map((segment) => {
        const isActive = segment.initialLink
          ? activeLink === segment.link || activeLink === segment.initialLink
          : activeLink === segment.link;
        return (
          <SegmentButtonLink
            key={segment.link}
            isActive={isActive}
            href={segment.link}>
            <SegmentButton isActive={isActive} width={buttonWidth}>
              {segment.label}
            </SegmentButton>
          </SegmentButtonLink>
        );
      })}
    </SegmentedButtonsHolder>
  );
};

SegmentedButtons.defaultProps = {
  buttonWidth: 200,
};

SegmentedButtons.propTypes = {
  segments: arrayOf(
    shape({
      link: string.isRequired,
      label: string.isRequired,
      icon: string.isRequired,
    })
  ).isRequired,
  activeLink: string.isRequired,
  buttonWidth: number,
};
