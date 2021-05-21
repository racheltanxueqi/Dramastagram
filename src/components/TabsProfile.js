import React from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';

function TabsProfile() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col className="tabs-section">
                    <Nav variant="pills" className="flex-row">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Watched</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Watching</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Interested</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div>Watched</div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <div>Watching</div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <div>Interested</div>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default TabsProfile;