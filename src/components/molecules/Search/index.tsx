import { mdiMagnify } from '@mdi/js'
import React, { ChangeEventHandler, useState } from 'react'
import { SearchIcon, SearchInput, SearchWrapper } from './styled'

const Search = () => {
    const [searchPhrase, setSearchPhrase] = useState('')

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchPhrase(e.target.value)
    }

    return (
        <SearchWrapper>
            <SearchInput
                placeholder="Szukaj..."
                onChange={handleChange}
                value={searchPhrase}
            />
            <SearchIcon path={mdiMagnify} />
        </SearchWrapper>
    )
}

export default Search
