import styled from "styled-components"

export const Container = styled.form`
  background-color: #3d3f43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom:30px;

  input[type=submit] {
    background: #756df4;
    border:0;
    color:#fff;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px ;
    cursor: pointer;

    &:hover{
      opacity: .9;
    }
  }
`