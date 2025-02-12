

import { Box, Typography, styled } from '@mui/material';

import Youtube from '../Assets/Images/Crud_image.jpg';
import InstaTele from '../Assets/Images/mongo.png';
import NodeJs from '../Assets/Images/NodeJS.jpg'

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%',
    padding:'10px'
});

const CodeForInterview = () => {

    return (
        <Header>
            <Typography variant="h4">We are Here to Perform CRUD operations</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={Youtube} />
                <Image src={InstaTele} />
                <Image src={NodeJs}/>
            </Box>
        </Header>
    )
}

export default CodeForInterview;