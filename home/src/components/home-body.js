import React from 'react';
import * as RBS from 'react-bootstrap';
import './home-body.css';


export class home_body extends React.Component{
    render(){
        return(
            <RBS.Container className="cont-b">
                <RBS.Row className="back-ground">
                    <RBS.Col className="col-b">
                        <RBS.Card style={{ width: '20rem' }}>
                            <RBS.Card.Img variant="top" src="./images/bes_god.jpeg" />
                                <RBS.Card.Body>
                                    <RBS.Card.Text>
                                        Bes (/ˈbɛs/; also spelled as Bisu), together with his feminine counterpart Beset,
                                        is an ancient Egyptian deity worshipped as a protector of households and, in 
                                        particular, of mothers, children and childbirth. Bes later came to be regarded as 
                                        the defender of everything good and the enemy of all that is bad. Bes may have 
                                        been a Middle Kingdom import from Nubia or Somalia, and his cult did not become 
                                        widespread until the beginning of the New Kingdom.

                                        Worship of Bes spread as far north as the area of Syria and as far west as the 
                                        Balearic Islands (Ibiza) in Spain, and later into the Roman and Achaemenid Empires. 
                                    </RBS.Card.Text>
                                </RBS.Card.Body>
                        </RBS.Card>
                    </RBS.Col>
                    <RBS.Col>
                        insert sign-in

                    </RBS.Col>
                </RBS.Row>
            </RBS.Container>
        );
    }
}