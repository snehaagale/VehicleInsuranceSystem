import { Container, Button, Card, CardTitle, CardBody } from "reactstrap";
import React, { useEffect } from "react";


const About = () => {
    useEffect(() => {
        document.title = "ABOUT US || Insurance system";
    }, []);
    return (

        <div >

            <Card InsuranceType="text-center" border="success" >
                <CardBody>
                    <CardTitle>ABOUT Us</CardTitle>
                    <p>
                    General Insurance has been providing innovative general insurance solutions to individuals, families and businesses directly as well as through its intermediaries and affinity partners.
                    </p>

                    <Container InsuranceType="text-center">
                    
                        
                            
                        
                    </Container>
                </CardBody>
            </Card>
        </div>

    );

};
export default About;