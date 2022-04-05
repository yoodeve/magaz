import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }
    
    return (
        <React.Fragment>
            <ImageDfault {...styles}></ImageDfault>
        </React.Fragment>
    )
}

Image.defaultProps = {
  shape: "circle",
  src: "https://mblogthumb-phinf.pstatic.net/MjAyMTA4MjVfNTQg/MDAxNjI5ODczNzI1NDA3.CVY99k00Y0jfksPi5t7cwmXDltld1XxQUYWdcaXZywog.7Km8nbPfNwL7QQzlho38VAo1Oi5zHKFgQzRiDoH61dYg.JPEG.qkrthmgl1234/IMG_4005.JPG?type=w800",
  size: 36,
};

const ImageDfault = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
`

const AspectOutter = styled.div`
    max-width: 100%;
    min-width: 250px;
    height: auto;
    object-fit: scale-down;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;