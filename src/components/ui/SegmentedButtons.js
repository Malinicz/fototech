import React from 'react';
import styled from 'styles';
import { arrayOf, shape, string, number } from 'prop-types';

import { Icon } from 'components/ui';

import { getRgba } from 'styles/helpers';

const SegmentedButtonsHolder = styled.div`
  display: flex;
  height: 47px;
  border: ${({ theme }) => `3px solid ${theme.colors.secondary}`};
  border-radius: 5px;
`;

const SegmentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
    border-left: ${({ theme }) => `3px solid ${theme.colors.secondary}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 150px;
  }
`;

const SegmentButtonLink = styled.a`
  &:hover ${SegmentButton} {
    color: ${({ theme, isActive }) =>
      isActive
        ? theme.colors.brighter
        : getRgba(theme.colors.secondaryDarker, 0.7)};
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
              {segment.icon && (
                <Icon
                  name={segment.icon}
                  size={segment.iconSize}
                  marginRight={5}
                />
              )}
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
      icon: string,
      iconSize: number,
    })
  ).isRequired,
  activeLink: string.isRequired,
  buttonWidth: number,
};
