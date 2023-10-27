import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: blue;
  font-size: 33px;
  padding: 12px 24px;
  border-radius: 24px;
`;

export const InnerText = styled.Text`
  color: white;
  font-size: 16px;
`;
