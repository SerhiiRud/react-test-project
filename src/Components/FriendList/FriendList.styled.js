import styled from "@emotion/styled";

export const FriendListContainer = styled.ul`
  width: 600px;
  margin: 20px auto;
  padding: 12px;
  border: 2px dotted grey;
  background-color: #ffdab9;
  list-style: none;
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

export const FriendItem = styled.li`
  display: flex;
`;

export const OnlineStatus = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => {
    return props.isOnline ? "green" : "red";
  }}; ;
`;
