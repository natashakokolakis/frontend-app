    import React, { Component } from 'react'
    import { Carousel, Col, Row } from 'react-bootstrap';
    import './WelcomeSlider.scss'
    import "bootstrap/dist/css/bootstrap.css";
    import {  updateUserInfo  } from '../../service/axios-service'


    export default class WelcomeSlider extends Component {

        constructor(props){
            super(props)
            this.onClose = this.onClose.bind(this)
            this.navigateToPayments = this.navigateToPayments.bind(this)
        }

        navigateToPayments(){

            const new_user = parseInt(localStorage.getItem("new_user"));
            const username = localStorage.getItem("username");
            console.log("new_user ", new_user)
    
            if(new_user){
                updateUserInfo({ username, new_user:0})        
                .then((res)=>{
                    localStorage.setItem("new_user",0);
                    this.props.history.push("/payments");
                })
                .catch((err)=>{
                    //triggers a state change which will refresh all components
                    // this.showAlert(err.response.data.code,'error');
                });
            }
            
        }

        onClose(){
            const new_user = parseInt(localStorage.getItem("new_user"));
            const username = localStorage.getItem("username");
            console.log("new_user ", new_user)
    
            if(new_user){
                updateUserInfo({ username, new_user:0})        
                .then((res)=>{
                    localStorage.setItem("new_user",0);
                    this.props.close();
                })
                .catch((err)=>{
                    //triggers a state change which will refresh all components
                    // this.showAlert(err.response.data.code,'error');
                });
            }
        }
        render() {
            return (
                <div className="navy">
                    
                
                <Carousel slide={false}>
                    
                    <Carousel.Item >
                       
                        <div
                            className="welcome-slider-item "
                            alt="First slide"
                        ></div>
                         
                        <Carousel.Caption bsPrefix="custom-carousel-caption">
                        <h3>Welcome to Qoinify!</h3>
                        <p>One-stop shop to manage your build your blockchain investment portfolio </p>
                        <div className="dismiss-prompt" onClick={this.onClose}>Skip Intro</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div
                        className="welcome-slider-item navy"
                        alt="Second slide"
                        >  
                        </div>
                        <Carousel.Caption bsPrefix="custom-carousel-caption">
                        <h3>Deposit</h3>
                        <p>Start off by making a deposit by navigating to the Payments Page</p>
                        <div className="dismiss-prompt" onClick={this.onClose} >Skip Intro</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div
                        className="welcome-slider-item navy"
                        alt="Second slide"
                        >  
                        </div>
                        <Carousel.Caption bsPrefix="custom-carousel-caption">
                        <h3>Trade Investments</h3>
                        <p>You can also trade between different investments from the Exchange Page</p>
                        <div className="dismiss-prompt" onClick={this.onClose} >Skip Intro</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div
                        className="welcome-slider-item navy"
                        alt="Second slide"
                        >  
                        </div>
                        <Carousel.Caption bsPrefix="custom-carousel-caption">
                        <h3>Analytics</h3>
                        <p>To get insight on the performance of your portfolio, navigate to the Dashboard or the individual Investments</p>
                        <div className="dismiss-prompt" onClick={this.onClose}>Skip Intro</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div
                        className="welcome-slider-item navy"
                        alt="Third slide"
                        >  
                    
                        </div>
                        <Carousel.Caption bsPrefix="custom-carousel-caption">
                        <h3>Get started on building your portfolio now</h3>
                        <Row className="justify-content-center">
                            <Col xs={6} md={6} lg={3}>
                                <a name="deposit" className="btn btn-info deposit-btn"  onClick={this.navigateToPayments}>Make a Deposit!</a>
                            </Col>
                        </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
            </div>
            )
        }
    }
