import React, {Component} from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name='About me'
          active={activeItem === 'About me'}
          onClick={this.handleItemClick}
          header
        >
          About Me
        </Menu.Item>

        <Menu.Item name='Languages' active={activeItem === 'Languages'} onClick={this.handleItemClick}>
          Languages
        </Menu.Item>

        <Menu.Item
          name='Memories'
          active={activeItem === 'Memories'}
          onClick={this.handleItemClick}
        >
          Memories
        </Menu.Item>
        <Menu.Item
          name='Photos'
          active={activeItem === 'Photos'}
          onClick={this.handleItemClick}
        >
          Photos
        </Menu.Item>
        <Menu.Item
          name='Social Media'
          active={activeItem === 'Social Media'}
          onClick={this.handleItemClick}
        >
          Social Media
        </Menu.Item>
      </Menu>
    )
  }
}