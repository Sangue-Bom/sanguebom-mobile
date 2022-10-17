import Gradient from "../Grandient/Gradient";
import { Button, ProfilePic, RankingInfo, RankingPos, UserCombos } from "./style";

export default function UserCombo({ onpress, sourceImg, position }) {
  return (
    <Button
      onPress={() => {
        onpress();
      }}
    >
      <UserCombos>
        <ProfilePic source={sourceImg} />
        <RankingInfo>
          <Gradient styleCustom={{ borderRadius: 6 }}>
            <RankingPos>{position}º</RankingPos>
          </Gradient>
        </RankingInfo>
      </UserCombos>
    </Button>
  );
}
