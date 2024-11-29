import React from "react";
import styled from "styled-components";

const Input = styled.input`
    outline: none
`

const Component = ({type, name, placeholder})=> {
    return <Input type={type} name={name} placeholder={placeholder} />
}