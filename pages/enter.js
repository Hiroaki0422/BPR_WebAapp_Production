import Link from 'next/link'
import React from 'react'
import $ from 'jquery'

export default function TitlePage() {
    return (
      <>
        <MainTitle />
      </>
    )
  }

class MainTitle extends React.Component {
   
    render() {
        return (
            <div className="title_page">
                <Link href='/'><a><div className="cover_title">Berkeley Poetry Review</div></a></Link>
                <Link href='/'><a><h2 className="cover_title_sub">midterm 4: stasis / static</h2></a></Link>
                <Link href='/'><a><div className="enter"> ENTER </div></a></Link>
            </div>
        );
    }
}

