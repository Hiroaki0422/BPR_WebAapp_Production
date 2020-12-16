import React from 'react'
import Link from 'next/link'

class MenuBar extends React.Component {
    constructor() {
        super()
        this.state = {
            masthead: false,
            editorNote: false,
            contributors: false, 
        }
    }
    
    render () {
        return (
            <div>
                <div className='menu_bar'>
                    <MenuEntry text={' Masthead'} />
                    <MenuEntry text={'Editor\'s Note'} />
                    <MenuEntry text={'Contributors'}/>
                </div>
                {this.state.masthead ? <Masthead toggle={this.toggleMasthead}/> : null}
                {this.state.editorNote ? <EditorsNote toggle={this.toggleEditorNote}/> : null}
            </div>
        );
    }
}

class MenuEntry extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructed')
    }

    render () {
        const link = '/' + this.props.text.toLowerCase().replace(/\s+|'/g, '');
        return (
          <Link href={link}><a  className="menu_entry" onClick={this.props.toggle}>{this.props.text}</a></Link>
        );
    }
}

export default MenuBar;