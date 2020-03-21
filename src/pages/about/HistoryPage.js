import React from "react";

// reactstrap components
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

const HistoryPage = () => {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <>
            <div className="wrapper">
                <LandingPageHeader title={'History'} />
                <div className="section section-about-us">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="8">
                                <h2 className="title">Hello From SV Digital</h2>
                                <h5 className="description">
                                    저희 에스브이(주)는 1992년 설립 이래 고객만족이라는 경영 모토아래 정확한
                                    solution 제공, 높은 품질, 빠르고 정확한 서비스 제공을 통해 고객의 요구를 충족시키기 위하여 꾸준히 노력해 왔습니다.
                                    그 결과, 소음 진동 계측장비 제공 및 소음 진동 문제에 대한 컨설팅 분야에서 많은 발전을 이루어 고객의 곁에서 시험의 동반자가 되었습니다.
                                    그 성원에 보답코자 저희 에스브이(주)에서는 앞으로도 신뢰를 주시는 고객에게 최상의 제품과 최고의 서비스 제공을 위해 최선의 노력을 다할것입니다.

                                </h5>
                            </Col>
                        </Row>
                        <div className="separator separator-primary"></div>
                        <div className="section-story-overview">
                            <Row>
                                <Col md="6">
                                    <div
                                        className="image-container image-left"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/login.jpg") + ")"
                                        }}
                                    >
                                        <p className="blockquote blockquote-info">
                                            "Over the span of the satellite record, Arctic sea ice has
                                            been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                                            <br></br>
                                            <small>-NOAA</small>
                                        </p>
                                    </div>
                                    <div
                                        className="image-container"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/bg3.jpg") + ")"
                                        }}
                                    ></div>
                                </Col>
                                <Col md="5">
                                    <div
                                        className="image-container image-right"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/bg1.jpg") + ")"
                                        }}
                                    ></div>
                                    <h3>
                                        We have been striving to our best to ensure best product quality
                                    </h3>
                                    <p>
                                        아울러 21세기를 대비해 소음 진동 측정 및 분석 장비의 국산화를 위하여 
                                        6년간 연 구 개발에 매진하여 온 결과, 2001년 11월에 "고층 건물의 구조 안전
                                        진단용 진동 측정시스템"의 개발에 성공하였고, 2004년 12월에는 드디어 "소음진동 측정용 다채 널 고속실시간 데이터 측정장치"를
                                        개발하여 기술표준원으로부터 우수품질인증을 획득하였으며, 이러한 성공을 바탕으로 국가 경쟁력을 높이는 데에도 최선의 노력을 다할 것을 
                                        약속드립니다.
                                    </p>
                                    <p>
                                        이런 비약적 성과를 더욱 발전시킬 수 있도록 유능한 인재를 채용하여, 우리나라의 
                                        디지털 신호 처리 분야의 선두 주자가 될 것이며, 산업용 계측분야의 토탈 솔루션을 제공하도록 
                                        온 직원들과 힘을 합할것입니다.
                                    </p>
                                    <p>
                                        무한한 가능성과 확고한 비전, 그리고 패기와 창의를 바탕으로 고객만족경영과 책임 경영을 실천하며 세계 일류기업의 꿈을 이루도록
                                        모든 임직원들이 한 힘이 되어 끊임없이 성장하도록 노력할 것입니다.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className="section section-contact-us text-center">
                    <Container>
                        <h2 className="title">Want to work with us?</h2>
                        <p className="description">Your project is very important to us.</p>
                        <Row>
                            <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                                <InputGroup
                                    className={
                                        "input-lg" + (firstFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="now-ui-icons users_circle-08"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="First Name..."
                                        type="text"
                                        onFocus={() => setFirstFocus(true)}
                                        onBlur={() => setFirstFocus(false)}
                                    ></Input>
                                </InputGroup>
                                <InputGroup
                                    className={
                                        "input-lg" + (lastFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="now-ui-icons ui-1_email-85"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Email..."
                                        type="text"
                                        onFocus={() => setLastFocus(true)}
                                        onBlur={() => setLastFocus(false)}
                                    ></Input>
                                </InputGroup>
                                <div className="textarea-container">
                                    <Input
                                        cols="80"
                                        name="name"
                                        placeholder="Type a message..."
                                        rows="4"
                                        type="textarea"
                                    ></Input>
                                </div>
                                <div className="send-button">
                                    <Button
                                        block
                                        className="btn-round"
                                        color="info"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                        size="lg"
                                    >
                                        Send Message
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default HistoryPage;
