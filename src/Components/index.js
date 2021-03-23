import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 25vw;
  background-color: #282c34;
`

function SideBar() {
  const [channels, handleChannels] = useState({})

  

  return(
    <Container>
      <div className='followed'>

      </div>
      <div className='recommended'>

      </div>
    </Container>
  )
}

export default SideBar