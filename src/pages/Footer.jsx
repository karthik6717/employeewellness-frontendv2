import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
    return (
        <footer style={{ 
            backgroundColor: "green", 
            color: "white", 
            padding: "10px 0", 
            position: "fixed", 
            bottom: 0, 
            width: "100%" 
        }}>
            <Container>
                <Row className="text-center">
                    <Col>
                        <p>&copy; {new Date().getFullYear()} Employee Wellness. All Rights Reserved.</p>
                    </Col>
                    <Col>
                        <div>
                            {/* Social Media Links */}
                            <IconButton component="a" href="https://instagram.com" target="_blank" sx={{ color: "white" }}>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton component="a" href="https://linkedin.com" target="_blank" sx={{ color: "white" }}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton component="a" href="https://github.com" target="_blank" sx={{ color: "white" }}>
                                <GitHubIcon />
                            </IconButton>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
