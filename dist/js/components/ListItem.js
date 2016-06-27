import React from 'react'

const ListItem = ({id, href, name, date}) => (
  <a href={href} className="list-group-item">
    <i className="fa fa-wpforms fa-fw"></i>
    <b>{id}</b>
    {" "}
    {name}
    <span className="pull-right text-muted samll"><em>{date}</em></span>
  </a>
)

export default ListItem
