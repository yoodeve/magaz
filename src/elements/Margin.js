import styled from "styled-components";
import React from "react";

const Margin = (props) => {
    const {childern, display, justCon, magie} = props;
    const styles = {
        display: display,
        justCon: justCon,
        magie:magie,
    }
    return (
        <React.Fragment>
            <Ma {...styles}>
                {childern}
            </Ma>
        </React.Fragment>
    )
}
Margin.defaultProps = {
    display:false,
    justCon:false,
    magie:0,
}

const Ma = styled.div`
display: flex;
justify-content: center;
margin: 0px auto;
`

export default Margin;