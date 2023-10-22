

import ChartOfAccounts from "./Pages/ChartOfAccounts";
import JournalVoucher from "./Pages/JournalVoucher";
import Navbar from "./Pages/Navbar";
import SalesInvoice from "./Pages/SalesInvoice";
import {
  BrowserRouter,
  Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
        
          <Route  exact path="/ChartOfAccounts">
            <ChartOfAccounts />
          </Route>
          <Route exact path="/JournalVoucher">
            <JournalVoucher />
          </Route>
          <Route exact path="/SalesInvoice">
            <SalesInvoice />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  )
}

export default App;
