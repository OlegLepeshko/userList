import React from 'react'
import TextField from '@material-ui/core/TextField'

const Search = () => {
  return (
    <TextField
      label="Search And Highlight"
      placeholder="search"
      style={{ width: '100%' }}
      color="secondary"
    />
  )
}

export default Search