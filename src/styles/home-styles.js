import styled from 'styled-components'
import homeImg from './../img/header-bg.png'

export const Appwrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
`

export const HomeSidebar = styled.div`
    width: 20%;
    background-color: #1e0d29;
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    position: fixed;
`

export const HomeBodyWrapper = styled.div`
    width: 80%;
    background-image: url(${homeImg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    color: #fff;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 20%;
    overflow: auto;
`

export const ProfilePicWrapper = styled.div`
    width: 80%;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    align-self: center;
`

export const ProfilePic = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`

export const HomeName = styled.h2`
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-top: 1rem;
`

export const SidebarLinks = styled.ul`
    list-style: none;
    text-align: center;
    text-transform: uppercase;
    margin: 1rem 0 0 0;
    padding: 0;

    li {
        margin-bottom: 1rem;
        cursor: pointer;
    }
`

export const HomeHeader = styled.h1`
    font-size: 1.6rem;
    text-transform: uppercase;
    padding: 2rem;
`

export const HomeContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContentWrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const ContentParagraph = styled.div`
    font-size: 1rem;
    margin-bottom: 1rem;
    height: auto;
    text-align: center;
`

export const ContactWrapper = styled.div`
    width: 100%;
    height: auto;
`

export const ContactList = styled.ul`
    list-style: none;
    margin: 1rem 0 0 0;
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: center;

    img {
        display: inline-block;
        margin-right: 1rem;
    }

    li {
        margin-bottom: 1rem;
    }
`