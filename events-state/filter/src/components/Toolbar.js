import React from 'react';
import PropTypes from 'prop-types'

export default function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props
    return (<div>
        {filters.map((filter, i) => {
            const className = filter === selected ? 'filter-selected' : 'filter'
            return (<button
                className={className}
                onClick={() => onSelectFilter(filter)} key={`${i++}`}>
                {filter}
            </button>)
        })}
    </div>)
}

Toolbar.propTypes = {
    filters: PropTypes.array.isRequired, onSelectFilter: PropTypes.func.isRequired, selected: PropTypes.string
}