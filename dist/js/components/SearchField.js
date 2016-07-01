import React, { PropTypes } from 'react'

const SearchField = ({ items }) => {
  let shows = []
  items.forEach(item => {
    shows.push(
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="searchText">{item + "："}</label>
            <input type="text" className="form-control" id="searchText" placeholder="Search..." />
          </div>
        </form>
    )
  })
  shows.push(
    <div className="row">
      <form className="form-inline">
        <div className="form-group col-lg-4 col-sm-4">
          <label htmlFor="timeText">{"时间：从"}</label>
          <input type="date" className="form-control" id="timeText" />
        </div>
        <div className="form-group col-lg-4 col-sm-4">
          <label htmlFor="timeText">{"至"}</label>
          <input type="date" className="form-control" id="timeText" />
        </div>
      </form>
      <form>
        <button type="submit" className="btn btn-primary">搜索</button>
      </form>
    </div>
  )
  return (
    <div>
      {shows}
    </div>
  )
}

export default SearchField
