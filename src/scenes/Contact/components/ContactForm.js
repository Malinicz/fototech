import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { object, string } from 'prop-types';
import styled from 'styles';

import {
  H2,
  Form,
  InputGroup,
  Input,
  InputLabel,
  TextArea,
  Button,
} from 'components/ui/base';
import { Icon } from 'components/ui';

const SubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

const IconHolder = styled.div`
  position: absolute;
  right: 15px;
  bottom: 8px;
  color: ${({ theme, isEmailValid }) =>
    isEmailValid ? theme.colors.primaryDarker : theme.colors.secondaryDarker};
`;

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      description: '',
      isEmailValid: false,
    };
  }

  onUpdateField = (name, value) => {
    this.setState({ [name]: value });
  };

  onUpdateEmail = (value) => {
    const isEmailValid = this.validateEmail(value);
    this.setState({ email: value, isEmailValid });
  };

  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  render() {
    const { email, name, description, isEmailValid } = this.state;
    const {
      routeData: {
        formHeading,
        formLabelMail,
        formLabelName,
        formLabelDescription,
        formLabelButton,
      },
      contactMail,
    } = this.props;

    return (
      <React.Fragment>
        <H2 style={{ marginTop: '60px', marginBottom: '30px' }}>
          {formHeading}
        </H2>
        <Form action={`https://formspree.io/${contactMail}`} method="POST">
          <InputGroup>
            <InputLabel htmlFor="email">{formLabelMail} *</InputLabel>
            <Input
              type="text"
              name="email"
              value={email}
              style={{ paddingRight: '50px' }}
              onChange={(e) => this.onUpdateEmail(e.target.value)}
            />
            {email && (
              <IconHolder isEmailValid={isEmailValid}>
                {isEmailValid ? (
                  <Icon name="checkmark" size={20} />
                ) : (
                  <Icon name="close" size={20} />
                )}
              </IconHolder>
            )}
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="name">{formLabelName}</InputLabel>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => this.onUpdateField('name', e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="description">
              {formLabelDescription} *
            </InputLabel>
            <TextArea
              type="text"
              name="description"
              value={description}
              style={{ marginBottom: '20px' }}
              onChange={(e) =>
                this.onUpdateField('description', e.target.value)
              }
            />
          </InputGroup>
          <input type="hidden" name="_next" value="/submission-success" />
          <input
            type="hidden"
            name="_subject"
            value="[FOTONAPRAWA.PL] Zapytanie"
          />
          <input type="hidden" name="_format" value="plain" />
          <input type="hidden" name="_language" value="pl" />
          <SubmitButton
            style={{ width: '100%' }}
            disabled={!email || !description}>
            {formLabelButton}
            <Icon name="send" size={18} marginLeft={5} />
          </SubmitButton>
        </Form>
      </React.Fragment>
    );
  }
}

ContactForm.defaultProps = {
  routeData: {},
};

ContactForm.propTypes = {
  routeData: object,
  contactMail: string.isRequired,
};

export default withRouteData(ContactForm);
