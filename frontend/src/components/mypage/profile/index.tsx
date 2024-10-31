import { Flex } from '@components/common/Flex';
import { colors } from '@styles/colors';
import styled from '@emotion/styled';
import { Text } from '@components/common/Typo';
import DogProfile from '@/assets/images/svgs/DogProfile';
import KeyboardArrowRight from '@assets/images/svgs/KeyboardArrowRight';
import { CardProfileType } from '@assets/types/ProfileType';

const Profile = (
  { petname, breedname, age, weight, gender, is_neutered }: CardProfileType,
  handleClick: () => void,
) => {
  return (
    <ProfileWrapper direction="column" justify='flex-start' padding="10px 10px" borderRadius={10}>
      <ClickBtn justify="flex-end" direction="row" onClick={handleClick}>
        <Text align="flex-end" typo="Label3" colorCode={colors.Gray400}>
          정보 수정하기
        </Text>
        <KeyboardArrowRight width={13} />
      </ClickBtn>
      <Flex direction="row">
        <DogProfile width={200} />
        <Flex direction="column" justify="center" align="flex-start" gap={5}>
          <Text typo="Body2" colorCode={colors.Black}>
            {petname}
          </Text>
          <Text typo="Label3" colorCode={colors.Black}>
            {breedname}
          </Text>
          <Flex justify="flex-start" align="flex-start" height={12} gap={5}>
            <Text typo="Label3">{age}살</Text>
            <Text typo="Label3">{weight}KG</Text>
          </Flex>
          <Text typo="Label3" colorCode={colors.Black}>
            {gender}
          </Text>
          <Text typo="Label3" colorCode={colors.Black}>
            중성화 {is_neutered}
          </Text>
        </Flex>
      </Flex>
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled(Flex)`
  border: solid 1px ${colors.Gray200};
  height: fit-content;
`;

export const ClickBtn = styled(Flex)`
  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 0.5;
  }
`;
