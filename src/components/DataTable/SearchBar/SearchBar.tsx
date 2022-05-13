import { ChangeEvent, useContext } from "react"
import { MdSearch } from "react-icons/md"
import styled from "styled-components"
import { media } from '../../../styles/responsive'
import { SearchContext, SearchContextType } from "./SearchContext"

const SearchBarContainer = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;

  ${media.tablet} {
    flex: 1;
    max-width: 40ch;
  }

  svg {
    position: absolute;
    left: 0.5rem;
    top: 0;
    color: #777;
    height: 100%;
  }

  &:focus-within > svg {
    color: #000;
  }

  input {
    border: none;
    padding-left: 2.4rem;
    padding-right: 1rem;
    background-color: transparent;
    height: 1.5rem;
    width: 100%;
    z-index: 10;
    color: #333;
    font-size: 1rem;
  }

  input {
    border-radius: 1rem;
  }

  div.badges {
    position: absolute;
    left: 0;
    top: 0;
    padding-left: 2rem;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  }
`

const SearchBar: React.FC = () => {
  const { query, setQuery } = useContext(SearchContext) as SearchContextType

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setQuery(value)
  }

  return (
    <SearchBarContainer>
      <MdSearch size={21} />
      <input
          type="text"
          onChange={onSearchChange}
          value={query}
      />
  </SearchBarContainer>
  )
}

export { SearchBar }