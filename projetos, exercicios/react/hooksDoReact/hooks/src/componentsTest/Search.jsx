import { memo } from "react"


const Search = ({handleSearch}) => {
    console.log("Search rendered!")
    return (
    <div>
        <input type="text" placeholder='Search users...' onChange={(e) => handleSearch(e.target.value)}/>
    </div>
  )
}

export default memo(Search)