import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Index from "./pages/Index"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index" element={<Index />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

