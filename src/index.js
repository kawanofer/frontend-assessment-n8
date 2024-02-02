import React from 'react'
import ReactDOM from 'react-dom'
import { PropertyProvider } from 'store/context/PropertyContext'
import App from './App'
import 'index.css'

ReactDOM.render(
  <React.StrictMode>
    <PropertyProvider>
      <App />
    </PropertyProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
