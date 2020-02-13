import React from 'react';
import { Link } from 'react-static';
import styled from 'styles';
import { arrayOf, shape, string, number } from 'prop-types';

import { Icon } from 'components/ui';

const SegmentedButtonsHolder = styled.div`
  display: flex;
  justify-content: center;
  height: 47px;
  width: 100%;
`;

const SegmentButton = styled(
  ({ theme, isLinkActive, elementsAmount, ...props }) => <Link {...props} />
)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${({ width }) => width || 200}px;
  color: ${({ theme, isLinkActive }) =>
    isLinkActive ? theme.colors.brightest : theme.colors.secondaryDarker};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border-top: 2px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  border-left: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme, isLinkActive }) =>
    isLinkActive ? theme.colors.secondary : 'transparent'};
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
    opacity: ${({ isLinkActive }) => (isLinkActive ? 0.8 : 1)};
  }

  &:focus {
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: ${({ elementsAmount }) => 100 / elementsAmount}%;
    font-size: 0.9em;
  }
`;

const IconHolder = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    display: none;
  }
`;

export const SegmentedButtons = ({ segments, activeLink, buttonWidth }) => {
  return (
    <SegmentedButtonsHolder>
      {segments.map((segment) => {
        const isActive = segment.initialLink
          ? activeLink.includes(segment.link) ||
            activeLink === segment.initialLink
          : activeLink.includes(segment.link);

        const elementsAmount = segments.length;

        return (
          <SegmentButton
            key={segment.label}
            to={segment.link}
            isLinkActive={isActive}
            width={buttonWidth}
            scrollToTop={false}
            elementsAmount={elementsAmount}>
            {segment.icon && (
              <IconHolder>
                <Icon
                  name={segment.icon}
                  size={segment.iconSize}
                  marginRight={5}
                />
              </IconHolder>
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
