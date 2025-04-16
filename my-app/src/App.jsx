import React from 'react'

import Button from './comanents/button'

const App = () => {
  let list = [{ name: "hakim", status: true, id: 1 }, { name: "sherwin", status: false, id: 2 }]
  return (
    <div>
      
      {/* <p>
        {
          list.map((e) => {
            return (
              <Button status={e.status} text={e.name} id={e.id} />
            )
          })
        }
      </p> */}
    </div>
  )
}

export default App
