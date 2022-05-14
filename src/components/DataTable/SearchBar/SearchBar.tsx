import { ChangeEvent, useContext } from "react"
import { MdSearch } from "react-icons/md"

import { CloseIcon } from "./CloseIcon"
import { SearchBarContainer } from "./SearchBarContainer"
import { SearchContext, SearchContextType } from "./SearchContext"

const SearchBar: React.FC = () => {
  const { query, setQuery } = useContext(SearchContext) as SearchContextType

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setQuery(value)
  }

  const renderIcon = () => {
    if (query.trim() === '') {
      return (
        <MdSearch size={21} />
      )
    } else {
      return (
        <CloseIcon />
      )
    }
  }

  return (
    <SearchBarContainer>
      { renderIcon() }
      <input
          type="text"
          onChange={onSearchChange}
          value={query}
      />
  </SearchBarContainer>
  )
}

export { SearchBar }