import styled from 'styled-components';

const media = {
    mobile:'@media(max-width:600px)'
}

const lightTheme = {
    bannerBg:"#ffffff",
    para1:"#383838",
    para2:"#f0912b",
} 

export const BannerWarapper = styled.div`
    margin-top:10.3rem;
    display:flex;
    flex-direction:row;
    padding: 10rem 0;
    padding-bottom: 0;
    background: ${lightTheme.bannerBg};
    height: 90vh;

    ${media.mobile} {
        flex-direction:column;
        padding: 0;
        height:auto;
        padding-top: 8rem;
        padding-bottom: 4rem;
    }

    .bannerCol1 {
        width: 70%;
        padding: 10rem;
        font-family: 'Yusei Magic', sans-serif;

        ${media.mobile} {
            width: 100%;
            padding: 4rem;
        }
    }

    .para1 {
        font-size: 3rem;
        line-height: 150%;
        color:${lightTheme.para1};

        ${media.mobile} {
            font-size: 2.5rem;
        }
    }

    .para2 {
        font-size: 4rem;
        line-height: 130%;
        font-family: 'Anton', sans-serif;
        color:${lightTheme.para2};

        ${media.mobile} {
            font-size: 3rem;
        }
    }

    .bannerCol2 {
        width: 30%;
        
        ${media.mobile} {
           display:none; 
        }
    }

    .bannerColMobile {
        display:none; 
        width: 100%;
        margin-top: 2rem;

        ${media.mobile} {
           display:flex; 
        }
    }

    .bannerImg, .bannerImgMb {
        width: 100%;
    }
`;