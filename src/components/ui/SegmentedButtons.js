import React from 'react';
import styled from 'styles';
import { arrayOf, shape, string, number } from 'prop-types';

import { Icon } from 'components/ui';

const SegmentedButtonsHolder = styled.div`
  display: flex;
  height: 47px;
`;

const SegmentButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${({ width }) => width || 200}px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.brightest : theme.colors.secondaryDarker};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border-top: 2px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  border-left: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : 'transparent'};
  cursor: pointer;

  &:first-child {
    border-left: 2px solid ${({ theme }) => theme.colors.secondary};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-right: 2px solid ${({ theme }) => theme.colors.secondary};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:hover {
    opacity: ${({ isActive }) => (isActive ? 0.8 : 1)};
  }

  &:focus {
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 150px;
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
          <SegmentButton
            href={segment.link}
            isActive={isActive}
            width={buttonWidth}>
            {segment.icon && (
              <Icon
                name={segment.icon}
                size={segment.iconSize}
                marginRight={5}
              />
            )}
            {segment.label}
          </SegmentButton>
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
      icon: string,
      iconSize: number,
    })
  ).isRequired,
  activeLink: string.isRequired,
  buttonWidth: number,
};
