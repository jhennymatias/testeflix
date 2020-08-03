import React from 'react';
import './ButtonLink.css';

function ButtonLink(props) {
  'props => o que vai ser passado';

  return (
    <a className={props.className} href={props.href}>{props.children}</a>
  );
}
export default ButtonLink;
