import styled from '@emotion/styled';
import { Flex } from '../Flex';
import { Text } from '../Typo';
import { colors } from '@/styles/colors';

interface HeaderType {
  title?: string;
  LeftIcon?: JSX.Element | null;
  RightIcon?: JSX.Element | null;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
}

export const Header = ({
  title,
  LeftIcon,
  RightIcon,
  onLeftIconClick,
  onRightIconClick,
}: HeaderType) => {
  return (
    <Flex direction="row" align="center" justify="space-between" height={46}>
      <IconBox onClick={onLeftIconClick}>{LeftIcon}</IconBox>

      {title && (
        <Text
          typo="Heading4"
          align="center"
          colorCode={colors.Black}
          margin="0 auto"
        >
          {title}
        </Text>
      )}

      <IconBox onClick={onRightIconClick}>{RightIcon}</IconBox>
    </Flex>
  );
};

const IconBox = styled.div`
  display: flex;
  width: 48px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
