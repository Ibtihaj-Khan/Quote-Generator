import React from 'react';
import './App.css';

const QUOTES = [
{quote: '"Remember that not getting what you want is sometimes a wonderful stroke of luck."',
author: 'Dalai Lama',
color: "rgb(242,52,110)"
}, 
{quote: '"Challenges are what make life interesting and overcoming them is what makes life meaningful."',
author: 'Joshua J. Marine',
color: "rgb(200,10,100)"
},
{quote: '"You miss 100% of the shots you don’t take."',
author: 'Wayne Gretzky',
color: "rgb(252,186,3)"
},
{quote: '"Definiteness of purpose is the starting point of all achievement."',
author: 'W. Clement Stone',
color: "rgb(25,209,53)"
},
{quote: '"The way to get started is to quit talking and begin doing."',
author: 'Walt Disney',
color: "rgb(204,0,0)"
},
{quote: '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."',
author: 'Steve Jobs',
color: "rgb(0,102,204)"
},
{quote: '"When you reach the end of your rope, tie a knot in it and hang on."',
author: 'Franklin D. Roosevelt',
color: "rgb(64,64,64)"
},
{quote: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
author: 'Benjamin Franklin',
color: "rgb(255,128,0)"
},
{quote: '"Do not go where the path may lead, go instead where there is no path and leave a trail."',
author: 'Ralph Waldo Emerson',
color: "rgb(127,0,255)"
},
{quote: '"Don\'t judge each day by the harvest you reap but by the seeds that you plant."',
author: 'Robert Louis Stevenson',
color: "rgb(51,153,255)"
}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Click the button to get started!',
      author: 'Anonymous',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    let random = QUOTES[Math.floor(Math.random()*QUOTES.length)];
    this.setState(
      {
        quote: random.quote,
        author: random.author,
        color: random.color
      }
    )
  }
  handleClick() {
    let random = QUOTES[Math.floor(Math.random()*QUOTES.length)];
    this.setState(
      {
        quote: random.quote,
        author: random.author,
        color: random.color
      }
    )
  }
  render() {
    return (
    <div id="bg" style={{background:this.state.color, transition: "background .75s ease"}}>
    <div id="quote-box">
      <div className="quote-row">
        <h3 id="text" style={{color:this.state.color, transition: "color .75s ease"}}>{this.state.quote}</h3>
      </div>
      <div className="author-row">
        <p id="author" style={{color:this.state.color, transition: "color .75s ease"}}>-{this.state.author}</p>
      </div>
      <div className='button-row'>
        <a id="tweet-quote" href="https://www.twitter.com/intent/tweet" target={"_blank"} rel={"noopener noreferrer"}><button style={{background:this.state.color, transition: "background .75s ease"}} className='brand'><i className="fab fa-twitter"></i></button></a>
        <a href="https://facebook.com" target={"_blank"} rel={"noopener noreferrer"}><button style={{background:this.state.color, transition: "background .75s ease"}} className='brand'><i className="fab fa-facebook"></i></button></a>
        <span><button id="new-quote" style={{background:this.state.color, transition: "background .75s ease"}} onClick={this.handleClick}>New Quote</button></span> 
      </div>
    </div>
    </div>
    )
    };
}

export default App;
