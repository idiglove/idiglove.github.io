import styled from 'styled-components'
import Link from "gatsby-link"

export const BlogWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const BlogRow = styled.div`
    display: flex;
    width: 100%;
`

export const BlogItem = styled.div`
    width: 30%;
    display: inline-block;
    vertical-align: top;
    margin: 10px;

    img {
        width: 100%;
        border: 1px solid #fff;
        border-radius: 10px;
    }

    a {
        color: #fff;
    }
`

export const BlogTitle = styled.h3`
    font-size: 1rem;
    margin: 10px 0;
`

export const BlogDate = styled.div`
    font-size: 0.6rem;
`

export const BlogExcerpt = styled.p`
    font-size: 0.7rem;
`

export const BlogLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    text-align: center;
    margin: 20px;

    &:hover{
        color: #fff;
        text-decoration: underline;
    }
`

export const BackLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    text-align: center;
    margin: 10px;

    &:hover{
        color: #fff;
        text-decoration: underline;
    }
`

export const TagsTitle = styled.h4`
    text-decoration: underline;
    font-size: 1.2rem;
`