import { Button } from 'components/ui/base';

export const CallToActionButton = Button.extend`
  margin-top: 70px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
