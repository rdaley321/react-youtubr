import React from 'react'

const Search = (props) => {
  return (
    <div>
      <form onSubmit={e => {
          e.preventDefault()
          props.changeSearch(e.target.search.value)
        }} >

          <div className="ui icon input searcheeee">
            <input className="prompt" placeholder="Search..." type="text" name="search" />
            <i className="search icon"></i>
          </div>

        <button className="ui button blue" type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Search
