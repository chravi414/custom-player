import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

const CustomPlayer = ({ url, width, height, theme, ...props }) => {
  return (
    <ReactPlayer
      url={url}
      playing={false}
      controls={true}
      width={width}
      {...props}
    />
  );
};

CustomPlayer.defaultProps = {
  width: "640px",
  height: "360px",
  url: "",
  theme: "success",
};

CustomPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  theme: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
};

export { CustomPlayer };
