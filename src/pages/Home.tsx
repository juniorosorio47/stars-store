import React from 'react';
import { PaperContainer } from '../components/PaperContainer/styles';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return <>
    <PaperContainer>
        <h1>HOME</h1>
    </PaperContainer>
    </>;
};

export default Home;
