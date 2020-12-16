import Link from 'next/link'
import React from 'react'

export default function Masthead() {
  return (
    <>
        <div>
            <div className="background">
                
                <div>
                <Link href='/'><a className="home_button">Berkeley Poetry Review</a></Link>
                </div>
                <MenuBar/>
                <MastheadContent/>
            </div>
        </div>  
    </>
  )
}

function MastheadContent() {
    return (
        <div className="modal_content2 masthead">
                <div className="masthead_title">MASTHEAD</div>
                <div className="staff fadeIn">
                    <p> <b>Editor in Chief</b><br/>Lily Klinek</p>
                    <p> <b>Managing Editor</b><br/>Matthew Kim</p>
                    <p> <b>Faculty Adviser</b><br/>C.S. Giscombe</p>
                    <p> <b>Associate Editors</b><br/>Shreya Aviri<br/>Andrew Chan<br/>Nancy Duong<br/>Diego Fan<br/>
Julia Kolman<br/> Elena Koshkin<br/> Louis McKinnon<br/> Nathalia Mor&aacute;n<br/> Daniel Orona<br/> Tevel Pele</p>
                    <p> <b>Communications and Outreach</b><br/>Louis McKinnon</p>
                    <p> <b>Web Masters</b><br/>Louis McKinnon<br/>Ziyi Liu</p>
                    <p> <b>Midterm 4 Web Design</b><br/>Hiroaki Oshima</p><br/>
                    <p>Issue layout and design by Ruyin Li and Lily Klinek</p>
                </div>
            </div>
    )
}

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
                    <MenuEntry text={'Masthead'} />
                    <MenuEntry text={'Editor\'s Note'} />
                    <MenuEntry text={'Contributors'}/>
                </div>

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