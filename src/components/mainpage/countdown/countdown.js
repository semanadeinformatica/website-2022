import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutStyles from "../../../styles/mainpage/about.module.css";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.startDate = new Date("Oct 31, 2022 14:00:00").getTime();
    this.endDate = new Date("Nov 2, 2022 20:00:00").getTime();
    this.state = {};
    this.updateRemainingTime();
  }

  updateRemainingTime() {
    let now = new Date().getTime();
    let distanceToStart = this.startDate - now;
    let distanceToEnd = this.endDate - now;

    if (distanceToStart > 0) {
      this.setState({
        status: "counting",
        days: Math.floor(distanceToStart / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distanceToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distanceToStart % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distanceToStart % (1000 * 60)) / 1000)
      });
    } else if (distanceToEnd > 0) {
      this.setState({
        status: "ongoing"
      });
    } else {
      this.setState({
        status: "ended"
      });
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateRemainingTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.status === "ongoing") {
      return (
        <>
          <Col
            className={[
              AboutStyles.countDownContainer,
              AboutStyles.countDownContainerTextOnly
            ].join(" ")}
          >
            Vem participar na SINF 2022!
          </Col>
          {this.props.children}
        </>
      );
    } else if (this.state.status === "ended") {
      return (
        <Col
          className={[
            AboutStyles.countDownContainer,
            AboutStyles.countDownContainerTextOnly
          ].join(" ")}
        >
          A SINF 2022 já acabou! Para o ano, há mais!
        </Col>
      );
    } else {
      return (
        <>
          <Row className={AboutStyles.countDownContainer}>
            <Col className={AboutStyles.countDownCol}>
              <Row className={AboutStyles.countDownRow}>{this.state.days}</Row>
              <Row className={AboutStyles.countDownRow}>Dias</Row>
            </Col>

            <Col className={AboutStyles.countDownCol}>
              <Row className={AboutStyles.countDownRow}>{this.state.hours}</Row>
              <Row className={AboutStyles.countDownRow}>Horas</Row>
            </Col>

            <Col className={AboutStyles.countDownCol}>
              <Row className={AboutStyles.countDownRow}>
                {this.state.minutes}
              </Row>
              <Row className={AboutStyles.countDownRow}>Minutos</Row>
            </Col>

            <Col className={AboutStyles.countDownCol}>
              <Row className={AboutStyles.countDownRow}>
                {this.state.seconds}
              </Row>
              <Row className={AboutStyles.countDownRow}>Segundos</Row>
            </Col>
          </Row>
          {this.props.children}
        </>
      );
    }
  }
}

export default Countdown;
