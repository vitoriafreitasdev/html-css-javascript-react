import React, {useContext} from 'react'

import { AppContext } from '../App'

const Context = () => {
    const details = useContext(AppContext)
  return (
    <div>
        {details && (
            <div>
                <h2>Linguagem: {details.language}</h2>
                <h4>FW: {details.framework}</h4>
                <p>QDT: {details.projects}</p>
            </div>
        )}
    </div>
  )
}

export default Context