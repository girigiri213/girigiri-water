import React from 'react'

const ListItem = ({id, href, text, date, onItemClick}) => (
  <a href={href} className="list-group-item" data-toggle="modal" onClick={() => onItemClick(id)}>
    <i className="fa fa-wpforms fa-fw"></i>
    <b>{"编号："}</b>
    {id}
    {" "}
    {text}
    <span className="pull-right text-muted samll"><em>{date}</em></span>
  </a>
)

export default ListItem
