import React, { Component } from 'react'
import Result from './Result'

 

 
class Guessing extends Component { 
  static defaultProps =  {
    secret : Math.floor(Math.random() * 10) + 1
  }
  constructor(props){
    super(props)
    this.state = { term: '', score: 20, highScore: 0}
 
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(event){
    this.setState({    
      [event.target.name] : event.target.value
    })
    // console.log(this.props);
  }
  
  again = () => {
    window.location.reload(false);
  }
  ttt = () => {
    if (this.state.term < this.props.secret) {
      this.setState({
        score :this.state.score -1
      }) 
        
    }
  }
    
  
  
    render() {
    //  console()
    return ( 
            <div>
                <header>
          <h1>Guess My Number! {this.state.secretNumber}</h1>
                <p className="between">(Between 1 and 10)</p>
                <button onClick={this.again} className="btn again">Again!</button>
                 
                </header>
                <main>
          <section className="left">
            <label htmlFor='term' >

            </label>
            <input
              type="number"
                              id='term'
                              name='term'
                               value={this.state.term}
                              onChange={this.handleChange}
                         className="guess" />
                    {/* <button  className="btn check">Check!</button> */}
                </section>
                <section className="right">
                     
                    {/* <p  className="label-score"> score:{ this.state.score} </p>
                    <p className="label-highscore">
              🥇 Highscore: <span className="highscore">{ this.state.highScore}</span>
                    </p> */}
          </section>
          <Result term={this.state.term}
            secretNum={this.props.secret}

          />
                </main>
            </div>
    )
  }
}
 

export default Guessing

 