import React from "react";
import PropTypes from 'prop-types';
import Link from "next/link";

import styled from "styled-components";

const ALink = styled.a`
  color: #228be6;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const PostContent = ({ content }) => {
  return (
    <div>
      {content.split(/(#[^\s#]+)/g).map((v, i) => {
        if (v.match(/(#[^\s]+)/)) {
          return (
            <Link href={`/hashtag/${v.slice(1)}`} key={i}>
              <ALink>{v}</ALink>
            </Link>
          )
        }
        return v;
      })}
    </div>
  );
};

PostContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default PostContent;