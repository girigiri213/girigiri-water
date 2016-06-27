import React, { PropTypes } from 'react'
import ListItem from './ListItem'

const ListView = ({ listname, items }) => {
  let listItems = []
  items.forEach(item => {
    listItems.push(
      <ListItem
        id={item.id}
        href={item.href}
        name={item.name}
        date={item.date}
      />
    )
  })

  return (
    <div className="row">
      <div className="panel panel-default">
        <div className="panel-heading">
          {listname}
        </div>
        <div className="panel-body">
          <div className="list-group">
            {listItems}
          </div>
        </div>
      </div>
    </div>
  )
}

ListView.propTypes = {
  // the list's name
  listname: PropTypes.string.isRequired,

  // the item's info
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ListView
