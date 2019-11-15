import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Explore from './components/Explore';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      //name: null
    };
  }

  async componentDidMount() {
		try {
			//let name = "Milan"
			//this.setState({ name });
		} catch (error) {
			console.log(error);
		}
	}


  render() {
    return (
        <Router>
            <div className="App">
                <Sidebar></Sidebar>
                <Home></Home>
                <Explore></Explore>
                <HowItWorks></HowItWorks>
                <Feedback></Feedback>
                <Footer></Footer>
            </div>
        </Router>
      
    );
  }
}

export interface IAppProps {
}

export interface IAppState {
}

export default App;