import Head from 'next/head'
import React from 'react'
import $ from 'jquery'
import Link from 'next/link'

const budFlowerImage = {
    bud: 'https://i.postimg.cc/4yksQFgt/pngwing-com.png',
    flower: 'https://www.flaticon.com/premium-icon/icons/svg/2926/2926745.svg',
}

const editors = [{name:'TR_Brady', maxPage:4}, {name:'Brandon_Krieg', maxPage:1}, {name:'Annie_Christain', maxPage:4},
                {name:'Lydia_T._Liu', maxPage:1}, {name:'Astra_Papachristodoulou', maxPage:2}, {name:'Mandy_Gutmann_Gonzalez', maxPage:4},
                {name:'Gina_Lee', maxPage:3}, {name:'Rosie_Stockton', maxPage:5}, {name:'Sophia_Terazawa', maxPage:9}]

class Title extends React.Component {
    render () {
        return (
            <div className='header'>
                <div className='title'>Berkeley Poetry Review</div>
                <div className='sub_title'>midterm 4: stasis / static</div>
                <Link href='/poems'><a><div className="enter"> ENTER </div></a></Link>
                <MenuWrapper />
            </div>
        );
    }
}

class MenuWrapper extends React.Component {
    constructor() {
        super()
        this.state = {
            visible:false,
        }
    }

    handleClick = () => {
        this.setState({visible: !this.state.visible});
        if (this.state.visible) {
            $(".dropdown").css("color", "white");
        } else {
            $(".dropdown").css("color", "grey");
        }
        
    }

    render() {
        return (
            <div className="menu_wrapper">
                <div className="dropdown" onClick={this.handleClick}>{this.state.visible?'Hide Menu':'Show Menu'}</div>
                <div className={this.state.visible?'fadeIn':'fadeOut'} >< MenuBar /></div>
                <img className="backImage" src="/img/back_ground.png"/>
                <div>border wrapper</div>
            </div>
        );
    }
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
                <div className='title_menubar'>
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
          <Link href={link}><a  className="title_menuentry" onClick={this.props.toggle}>{this.props.text}</a></Link>
        );
    }
}


export default class App extends React.Component {
    render () {
        return (
            <div >
                <Head>
                  <title>Berkeley Poetry Review Midterm 4 static/stasis</title>
                  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                </Head>
                <Title />
            </div>
        );
    }
}

