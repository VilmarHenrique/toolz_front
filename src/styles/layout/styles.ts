import styled from "styled-components";

export const Row = styled.div <{$justify?:string}>`
   
    display:flex;
    justify-content: ${(props) => (props.$justify ? props.$justify : "")};
    align-items: center;
`;

export const Text = styled.span<{
    $fontSize?: string;
    $fontWeight?: string;
    $color?: string;
    $decoration?: string;
  }>`
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : "12px")};
    font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "")};
    color: ${(props) => (props.$color ? props.$color : "black")};
    text-decoration: ${(props) => (props.$decoration ? props.$decoration : "")};
  `;