

import { Box, Typography, styled } from '@mui/material';

import Youtube from '../Assets/Images/Crud_image.jpg';
import InstaTele from '../Assets/Images/mongo.png';
import NodeJs from '../Assets/Images/NodeJS.jpg';
import ReactJS  from '../Assets/Images/ReactJS.jpg'

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: 'auto',
    padding:'10px'
});

const CodeForInterview = () => {

    return (
        <Header>
            <Typography variant="h4">We are Here to Perform CRUD operations</Typography>
           <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Image src={Youtube}style={{ width: '45%' }} />
                <Image src={InstaTele} style={{ width: '45%' }}/>
                <Image src={NodeJs} style={{ width: '45%' }} /> 
                <Image src={ReactJS} style={{ width: '45%' }} /> 
            </Box>
        </Header>
    )
}

export default CodeForInterview;