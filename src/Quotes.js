import PropTypes from 'prop-types'
import React from 'react';
import { Link } from 'react-router-dom'

import {
Grid,
Header,
Button,
} from 'semantic-ui-react'

const quotes = [
	{source: "Prof. Jeff Erickson",
	content: "What are some tips to learn recursion?\nLearn recursion"},
	{source: "Piazza",
	content: "Student: Can Prof. Zilles be on my team?\nProf Zilles: Will you carry me?"},
	{source: "CS461 Staff Meeting (out of context)",
	content: "\'This assignment is meant to be fun and funny\'\n\nYeah it's not a real murder\n\n... no I'm not suggesting someone was murdered!"},
	{source: "CS461 Staff Meeting",
	content: "I'm an ECE professor; I understand pipelining"},
	{source: "Prof. Hwu",
	content: "I teach two classes this semester. The later class has better jokes."},
	{source: "Prof. Zilles",
	content: "You study for your exams OR you fail (one or the other).\nExcept for 374. You study for exams AND you fail."},
	{source: "Prof. Hwu",
	content: "As long as you drive below 5mph above the speed limit, you'll be fine.\nI followed my own advice when driving to Chicago and I was fine."},
];

function Filler(props){
	const noQuote = props.q.idx === -1;
	if (noQuote){
		return(
			<p>
			  			These quotes are taken out of context. If they don't make sense to you, don't fret. They shouldn't!
			  		</p>
		)
	}
	else {
		return(
		<p>
			 {props.q.content}
			</p>
		)
	}
}


class Quote extends React.Component {
	constructor(props){
		super(props);
		this.state={
			source: '',
			content: '',
			idx:-1,
		};

		this.randomQuote = this.randomQuote.bind(this);
	}

	randomQuote(){
		let idx = (Math.floor(Math.random() * 7));
    if (idx == this.state.idx){
    	idx = (this.state.idx + 1)%7;
    }
    let quote = quotes[idx];
    console.log(idx);
    console.log(quote);
    this.setState({content: quote.content})

    this.setState({source: quote.source})
    this.setState({idx: idx})
	}

  render() {
    return (
    	<div className='page'>
			  <style>{`
			    body > div,
			    body > div > div,
			    body > div > div > div.page {
			    	height: 100%;
			    }
			   `}</style>
			  <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
			  	<Grid.Column>
			  		<Header as='h1' content='Quotes taken out of context.'/>
			  		<Filler q = {this.state}/>
			  		<Button onClick={this.randomQuote}>Generate random quote</Button>
			  		<Link to="/">
			  			<Button>
			  			Back to homepage
			  			</Button>
			  		</Link>
			  	</Grid.Column>
			  </Grid>
    	</div>

    )


  }
}

export default Quote;