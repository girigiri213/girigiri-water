import React, { PropTypes } from 'react'

const MainTitle = ({ title }) => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="page-header">{title}</h1>
    </div>
  </div>
)

MainTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default MainTitle
