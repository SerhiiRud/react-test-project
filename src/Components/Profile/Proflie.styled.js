import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  width: 600px;
  margin: 20px auto;
  padding: 12px;
  border: 2px dotted grey;
  background-color: #ffdab9;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Avatar = styled.img`
  width: 240px;
  border-radius: 50%;
  background-color: #ffffff;
  margin-bottom: 16px;
`;

export const Username = styled.p`
  font-weight: 900;
`;

export const Stats = styled.ul`
  padding: 8px;
  border-top: 2px dotted grey;
  display: flex;
  gap: 20px;
  justify-content: center;
  list-style: none;
`;

export const Quantity = styled.span`
  margin-left: 8px;
  background-color: #ffffff;
  border-radius: 4px;
`;
