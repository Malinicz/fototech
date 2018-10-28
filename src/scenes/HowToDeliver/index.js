import React, { Component } from 'react';
import { withSiteData, withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';
import { getRgba } from 'styles/helpers';

import { Paragraph, Section } from 'components/ui/base';
import { Layout, PageHeading, SegmentedButtons } from 'components/ui';

const config = {
  postOfficeSteps: [
    {
      title: 'Wydrukuj i wypełnij formularz',
      description: [
        'Podaj nam szczegóły dotyczące Twojego sprzętu, wykrytej usterki oraz dane kontaktowe.',
      ],
    },
    {
      title: 'Zapakuj swój sprzęt',
      description: [
        'Zapakuj swój sprzęt tak, aby bezpiecznie do nas dotarł. Prosimy o nie dołączanie do przesyłki akcesoriów nie mających bezpośredniego związku ze zgłaszaną usterką - pasków na szyję i rękę, osłon przeciwsłonecznych, muszli ocznych, instrukcji, baterii AA itp.',
      ],
    },
    {
      title: 'Wybierz najbliszy salon',
    },
    {
      title: 'Wyślij paczkę',
      description: [
        'Nie zapomnij dołączyć formularza zgłoszeniowego! Wycenę wyślemy poprzez e-mail lub sms tak szybko, jak to możliwe.',
      ],
    },
  ],
};

const pageIcon = require('./assets/how-to-deliver-icon.svg');

const HeadingSection = styled(Section)`
  flex-direction: column;
  align-items: center;
`;

const ContentSection = styled(Section)`
  justify-content: center;
`;

const StepperHolder = styled.div`
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
        )} 0%, rgba(1,1,1,0) 100%)`
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

const Address = styled.address`
  font-style: normal;
  margin-bottom: 15px;
`;

const City = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

class HowToDeliver extends Component {
  render() {
    const {
      history: {
        location: { pathname },
      },
      siteData: { contactDetails },
    } = this.props;

    const segments = [
      {
        initialLink: '/jak-dostarczyc',
        link: '/jak-dostarczyc/poczta',
        label: 'Pocztą',
        icon: 'mail',
        iconSize: 20,
      },
      {
        link: '/jak-dostarczyc/osobiscie',
        label: 'Osobiście',
        icon: 'manWalking',
        iconSize: 14,
      },
    ];

    const { postOfficeSteps } = config;

    return (
      <Layout>
        <HeadingSection>
          <PageHeading
            icon={pageIcon}
            title="Jak dostarczyć?"
            subtitle="Bardzo prosto! Wybierz sposób, który Ci najbardziej odpowiada."
          />
          <SegmentedButtons segments={segments} activeLink={pathname} />
        </HeadingSection>
        <ContentSection>
          <StepperHolder>
            <SingleStepHolder>
              <StepContentHolder>
                <StepTitle>{postOfficeSteps[0].title}</StepTitle>
                {postOfficeSteps[0].description.map((paragraph, index) => {
                  return (
                    <StepDescription key={index}>{paragraph}</StepDescription>
                  );
                })}
              </StepContentHolder>
              <StepGraphicsHolder>
                <OuterCircle>
                  <InnerCircle>
                    <StepNumber>1</StepNumber>
                  </InnerCircle>
                </OuterCircle>
                <Rectangle />
              </StepGraphicsHolder>
            </SingleStepHolder>
            <SingleStepHolder>
              <StepContentHolder>
                <StepTitle>{postOfficeSteps[1].title}</StepTitle>
                {postOfficeSteps[1].description.map((paragraph, index) => {
                  return (
                    <StepDescription key={index}>{paragraph}</StepDescription>
                  );
                })}
              </StepContentHolder>
              <StepGraphicsHolder>
                <OuterCircle>
                  <InnerCircle>
                    <StepNumber>2</StepNumber>
                  </InnerCircle>
                </OuterCircle>
                <Rectangle />
              </StepGraphicsHolder>
            </SingleStepHolder>
            <SingleStepHolder>
              <StepContentHolder>
                <StepTitle>{postOfficeSteps[2].title}</StepTitle>
                {Object.keys(contactDetails).map((placeName) => {
                  const place = contactDetails[placeName];
                  return (
                    <Address key={placeName}>
                      <City>{place.city}</City>
                      <br />
                      {place.street}
                      <br />
                      {place.postalCode} {place.city}
                      <br />
                    </Address>
                  );
                })}
              </StepContentHolder>
              <StepGraphicsHolder>
                <OuterCircle>
                  <InnerCircle>
                    <StepNumber>3</StepNumber>
                  </InnerCircle>
                </OuterCircle>
                <Rectangle />
              </StepGraphicsHolder>
            </SingleStepHolder>
            <SingleStepHolder>
              <StepContentHolder>
                <StepTitle>{postOfficeSteps[3].title}</StepTitle>
                {postOfficeSteps[3].description.map((paragraph, index) => {
                  return (
                    <StepDescription key={index}>{paragraph}</StepDescription>
                  );
                })}
              </StepContentHolder>
              <StepGraphicsHolder>
                <OuterCircle>
                  <InnerCircle>
                    <StepNumber>4</StepNumber>
                  </InnerCircle>
                </OuterCircle>
                <Rectangle isLast />
              </StepGraphicsHolder>
            </SingleStepHolder>
          </StepperHolder>
        </ContentSection>
      </Layout>
    );
  }
}

HowToDeliver.defaultProps = {
  siteData: {},
};

HowToDeliver.propTypes = {
  history: object.isRequired,
  siteData: object,
};

export default withSiteData(withRouteData(HowToDeliver));
