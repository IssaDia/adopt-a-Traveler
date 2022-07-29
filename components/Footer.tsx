import styled from "styled-components";

const FooterSection = styled.div`
  background: #000;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer: React.FC = () => {
  return (
    <FooterSection>
      <p>Adopt a traveler 2022 All Rights Reserved</p>
    </FooterSection>
  );
};
