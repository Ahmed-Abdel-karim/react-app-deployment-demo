import './App.css'
import { Link } from 'react-router'

function App() {

  return (
    <main>
      <nav>
        <h1>App Navigation v2</h1>
        <ul>
          <li><Link to="/expenses">Expenses</Link></li>
          <li><Link to="/invoices">Invoices</Link></li>
        </ul>
      </nav>
    </main>
  )
}

export default App
