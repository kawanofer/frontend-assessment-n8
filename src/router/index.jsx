import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import List from 'pages/List'
import Detail from 'pages/Detail'

export function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:bed?/:bath?/:park?/:price?" element={<List />} />
        <Route exact path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
