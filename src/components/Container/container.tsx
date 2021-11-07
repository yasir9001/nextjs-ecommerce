import React from "react";
import { Row, Col } from "antd";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  fluid?: boolean;
  className?: string;
}

function Container(props: Props) {
  const { children, style, fluid, className } = props;
  const breakpoints = fluid
    ? {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      }
    : {
        xs: 24,
        sm: 24,
        md: 22,
        lg: 18,
        xl: 16,
        xxl: 15,
      };
  const defaultStyle: React.CSSProperties = fluid
    ? {
        position: "relative",
        padding: "1rem 1rem",
        maxWidth: "1400px",
        margin: "0 auto",
      }
    : {
        margin: "0 auto",
        padding: "1rem 1rem",
        position: "relative",
        maxWidth: "1400px",
      };
  return (
    <Row className={className}>
      <Col
        xs={breakpoints.xs}
        sm={breakpoints.sm}
        md={breakpoints.md}
        lg={breakpoints.lg}
        xl={breakpoints.xl}
        xxl={breakpoints.xxl}
        style={{ ...defaultStyle, ...style }}
      >
        {children}
      </Col>
    </Row>
  );
}
export default Container;

Container.defaultProps = {
  fluid: false,
  className: "",
  children: <div />,
};
