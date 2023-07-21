import styled from "@emotion/styled";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  font-size: 14px;

  .title {
    padding: 16px;
    border: none;
  }

  .content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;

      &:hover {
        background-color: #ddd;
      }
    }
  }

  &:hover {
    .title {
      background-color: #3e8e41;
    }

    .content {
      display: block;
    }
  }
`;
