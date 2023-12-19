import nerdImage from "../assets/image/illustration.png";
import Button from "./Button";
import { CardContainer, ContentContainer } from "./styles/Container.styles";
import { StyledTitle } from "./styles/Custom.styles";
import { ButtonContainer, H1, Image, P, Tag } from "./styles/Elements";

const Card = () => {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag color="#4361eee">EXCLUSIVE</Tag>
        <H1>
          <StyledTitle text="React Style" color="#000" />
        </H1>
        <P>
          Exclusive React Js Tutorial based on Styled Components learn why we
          need this and how use it{" "}
        </P>
        <ButtonContainer>
          <Button link="https://lwsbd.link/rsc" text="Watch Now" />
          <Button link="https://lwsbd.link/react" text="Github Repo" />
        </ButtonContainer>
      </ContentContainer>
      <Image src={nerdImage} alt="Nerd" width="300px" />
    </CardContainer>
  );
};

export default Card;
