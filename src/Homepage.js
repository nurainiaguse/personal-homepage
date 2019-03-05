import PropTypes from 'prop-types'
import React from 'react';

import {Homepage as HomepageCss, HomepageContainer} from './Homepage.module.scss';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Card,
} from 'semantic-ui-react'

const headshot = 'https://farm8.staticflickr.com/7880/33315111138_e5045c2b8b_h.jpg'

const travel1 = 'https://farm8.staticflickr.com/7926/47190182941_8927665adc_h.jpg'
const travel2 = 'https://farm8.staticflickr.com/7802/47138596452_c692bfb3b0_h.jpg'
const travel3 = 'https://farm8.staticflickr.com/7831/47138595172_743e617f05_h.jpg'
const travel4 = 'https://farm8.staticflickr.com/7804/32250171967_da90ea5448_z.jpg'
const travelsnow1 = 'https://farm8.staticflickr.com/7827/40227288143_5490f9e4ff_z.jpg'
const travelsnow2 = 'https://farm8.staticflickr.com/7847/32250174847_b871277154_z.jpg'

const skicat = 'https://farm8.staticflickr.com/7842/46467012884_2b50ef2c46_h.jpg'
const fish = 'https://farm8.staticflickr.com/7840/47138708342_c979ff6998_h.jpg'
const sunset = 'https://farm8.staticflickr.com/7837/46276422285_115e4bd90e_z.jpg'
const breakfast = 'https://farm8.staticflickr.com/7873/40227286343_f04f31f01a_z.jpg'

const fb = 'https://cdn1.iconfinder.com/data/icons/social-media-2112/29/Asset_2-512.png'
const insta = 'https://cdn1.iconfinder.com/data/icons/social-media-2112/29/Asset_16-512.png'
const linkedin = 'https://cdn1.iconfinder.com/data/icons/social-media-2112/29/Asset_5-512.png'


export default () => (
	<Container className={HomepageCss}>
		<Segment inverted style={{padding: '6em 0em'}} vertical>
			<Header as='h1'  content='Nuraini Aguse' className={HomepageCss} size='huge' style={{fontSize: '3em'}}/>
			<Image circular centered src={headshot} className={HomepageCss} size='medium' style={{fontSize: '2em'}}/>
			<Header as='h2' content="Programmer & Food Lover" />
		</Segment>

		<Segment style={{padding: '6em'}} vertical>
			<Container text>
				<Header as='h3' style={{fontSize: '2em'}}>
					About Me
				</Header>
				<p>
				I am currently pursuing a Master's Degree in Computer Science at the 
				University of Illinois at Urbana-Champaign. My research area is in Computational Biology
				and Bioinformatics. I am interested in using algorithms and computer science to
				answer questions that we would never have been able to answer before, especially
				in the field of Biology. I plan to pursue a career in software engineering, preferably
				with companies that use Computational Biology tools to solve problems in the medical world.

				</p>
			</Container>
		</Segment>

		<Segment style={{padding: '4em 0em'}} vertical>
			<Header as='h3' style={{fontSize: '2em'}}>Languages I Speak</Header>
			<Grid centered textAlign='center' container style={{padding: '4em'}} stackable verticleAlign='middle'>

				<Grid.Row>
					<Grid.Column textAlign='center' width={5}>
						<Segment inverted>
						<Header as='h3'>Malay</Header>
						<p>
						Saya berasal dari Kuching, Malaysia. Bahasa kebangsaan Malaysia ialah Bahasa Melayu. 
						Saya amat menggemari Bahasa Melayu kerana keindahan peribahasanya yang berasaskan 
						alam semula jadi seperti haiwan dan tumbuh-tumbuhan.
						</p>
						<p>
						I was born in Kuching, Malaysia. The offical language in Malaysia is Malay. I am very fond
						of the Malay language because of the beauty of its proverbs, which originates from
						observations of nature.
						</p>
						</Segment>
					</Grid.Column >
					<Grid.Column textAlign='center' width={5}>
						<Segment inverted>
						<Header as='h3'>English</Header>
						<p>
						I have learned English ever since I could remember. Like most non-native English
						speakers, I learned a lot from watching cartoons. I also loved to read English-language
						novels, which further increased my English capabilities. 
						</p>
						<p>
						However, since I seldom
						spoke English, I still struggled having conversations when I first came to the U.S.
						Now, 4 years later, my spoken English has significantly English and I am glad.
						</p>
						</Segment>
					</Grid.Column>
					<Grid.Column textAlign='center' width={5}>
						<Segment inverted>
						<Header as='h3'>French</Header>
						<p>
						J'ai commencé á apprendre le français depuis moins 1 an. Je pense que le langue
						français (ou une nouvelle langue) est trés important pour la connexion international.
						Mon français n'est pas parfait, mais ce n'est pas mouvais, non?
						</p>
						<p>
						I've started learning French for a year now. I think learning French (or any new language)
						is very important for international connections. My French isn't perfect,
						but it's not bad, yeah?
						</p>
						</Segment>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>

		<Segment style={{padding: '4em'}} vertical>
			<Grid stackable columns={2} verticalAlign='middle' textAlign='center'>
				<Grid.Row>
					<Header as='h3' style={{fontSize: '2em'}}>Memories I Cherish</Header>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>

						<Header as='h3'>The Ski Cat</Header>
						<p>
						I love this picture because it summarizes two of my favorite things in life:
						skiing and cats. This particular cat was busy grooming the trails and decided to
						take a nap before it sets off again. Just like real cats, this one really enjoys 
						sleeping. But unlike real cats, it's very helpful and does not break things!
						</p>
						
					</Grid.Column>
					<Grid.Column>

						<Image bordered rounded src={skicat} size='large'/>
					
						
					</Grid.Column>
				
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						<Image bordered rounded src={sunset} size='large'/>
					</Grid.Column>
					<Grid.Column>
						<Header as='h3'>Sunset at Bonita Beach</Header>
						<p>
						This photo was taken in 2017 during winter break, when my friends and I
						visited Florida. It was a very relaxing holiday, and a great way to end my 
						senior year in college. The sunset was very beautiful and we took multiple
						pictures. This one was my favorite.
						</p>
					</Grid.Column>
					
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>

						<Header as='h3'>Breakfast in New Orleans</Header>
						<p>
						Breakfast is the most important meal of the day. Sadly my daily breakfast
						consists of only milk and toast, or cereal and milk on lazy days. The only
						time I can indulge in a lavish breakfast is when I travel. This photo brings
						me back to the colorful, musical town of New Orleans. 
						</p>
						
					</Grid.Column>
					<Grid.Column>
						<Image bordered rounded src={breakfast} size='large'/>
						
					</Grid.Column>
				
				</Grid.Row>

			</Grid>
		</Segment>

		<Header as='h2' centered style={{padding: '2em 0em 0em 0em', fontSize: '2em'}}>Photos I Took</Header>
		<Card.Group itemsPerRow={2} style={{padding: '4em'}}>
			<Card image={travel1}/>
			<Card image={travel2}/>
			<Card image={travel3}/>
			<Card image={travel4}/>
			<Card image={travelsnow1}/>
			<Card image={travelsnow2}/>
		</Card.Group>

		<Segment inverted vertical >

				<Grid divided stackable style={{padding:'2em'}}>
					<Grid.Row >
						<Header inverted as='h3' >My Social Media Links</Header>
					</Grid.Row>
					<Grid.Row >
						<Grid.Column >
							<a href="https://facebook.com/nurainiaguse">
							<Image size='mini' src={fb}/>
							</a>
						</Grid.Column>
						<Grid.Column>
							<a href="https://www.instagram.com/nurainiags">
							<Image size='mini' src={insta}/>
							</a>
						</Grid.Column>
						<Grid.Column>
							<a href="https://www.linkedin.com/in/nuraini-aguse-521341170/">
							<Image size='mini' src={linkedin}/>
							</a>
						</Grid.Column>
					</Grid.Row>
				</Grid>
		</Segment>
	</Container>


);