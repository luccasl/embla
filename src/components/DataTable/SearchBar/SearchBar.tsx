import { ChangeEvent, useContext } from "react"

import { CloseIcon } from "./CloseIcon"
import { SearchBarContainer } from "./SearchBarContainer"
import { SearchContext, SearchContextType } from "./SearchContext"
import { SearchIcon } from "./SearchIcon"

const SearchBar: React.FC = () => {
  const { query, setQuery } = useContext(SearchContext) as SearchContextType

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setQuery(value)
  }

  const renderCloseIcon = () => {
    if (query.length < 1) {
      return
    }

    return (
      <CloseIcon />
    )
  }

  const renderSearchIcon = () => {
    if (query.length > 0) {
      return
    }

    return (
      <SearchIcon />
    )
  }

  return (
    <SearchBarContainer>
      {renderSearchIcon()}
      {renderCloseIcon()}
      <input
        type="text"
        onChange={onSearchChange}
        value={query}
      />
    </SearchBarContainer>
  )
}

export { SearchBar }