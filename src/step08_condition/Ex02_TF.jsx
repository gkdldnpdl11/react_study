// 보여주어야 하는 화면단이 늘어날 때 마다 페이지가 늘어남
// 그래서 함수를 같은 페이지에서 사용하여 한번에 넘김

// import React from 'react'

// function Ex02_T(props) {
//     return (
//       <h1>Welcome! 2</h1>
//     )
// }

// export default Ex02_T;


// 하나의 페이지에 두개의 함수를 동시에 내보냄
import React from 'react'

function Ex02_T(props) {
  return (
    <h1>Welcome! 2</h1>
  )
}

function Ex02_F(props) {
    return (
      <h1>Please Join with us 2</h1>
    )
  }

export {Ex02_T, Ex02_F};