import Link from 'next/link'
import React from 'react'
import Menubar from './menubar'

export default function EditorsNote() {
  return (
    <>
      <div>
            <div className="background">
                <Link href='/'><a className="home_button">Berkeley Poetry Review</a></Link>
                <Menubar />
                <NoteContent />
            </div>
        </div>  
    </>
  )
}

function NoteContent() {
  return (
      <div className="modal_content2 masthead">
              <div className="masthead_title">Editor's Note</div>
              <div className="editors_note fadeIn">
                  <p><i>DEAR READERS,</i><br/><br/></p>
                  <p>As the fourth iteration of our annual chapbook project, this issue of MIDTERM engages
                    with the ideas of stasis and static through the work of nine featured poets. As we flip through the
                    pages, we are moved first across the stillness of TR Brady’s bedroom, watching <i>every feeling / not
                    coming on</i>, and finally arrive to stare at Sophia Terazawa’s gibbon, frozen in mid-air. The words
                    themselves feel tense, full, as muscles electrified by the effort of immobility. And full, too, of
                    desire — iterating in the body longing to <i>push past [it]self</i>, as TR Brady insists, and to reject the
                    static “having” of itself. Rosie Stockton writes <i>I want to be / nothing but / of things</i>, gesturing
                    towards fixed modes of physical perception and, in doing so, challenging their very being, their
                    necessity. </p> 
                  <p>Many of our MIDTERM FOUR poets have also laced their work with nods to auditory
                    static — the sound that represents an absence of sound. An emptiness, an ambience. Like Mandy
                    Gutmann-Gonzalez inquires of canned laughter, <i>how can we know if there’s a feeling behind a
                    sound?</i> I’m reminded by this idea — the crackle of static to represent an absence, or a laugh track
                    both representing and enacting feeling — of poetry approximating acoustics, sounds transcribed
                    onto a page only to be re-translated further by us, echoing in the shapeless space of our minds
                    while reading. What are the distortions made by this process? Do they matter?</p>
                  <p>Moreover, these poets’ work, from Gina Lee’s to Annie Christain’s, touches on the
                    violence, the harm, of stagnancy. Rest. Of silence. The word “stasis” originates from “<i>histanai</i>,”
                    the Greek word literally meaning “standing,” or “stopping.” Formally, “stasis” refers to the
                    concept of civil strife. In addressing stasis, these poems push towards rejection and towards
                    change, however abrupt. They demand new forms of knowing, realization of the ways silence
                    drifts towards complicity. They question not only who remains static and still, but who can afford
                    to.</p>
                  <p>MIDTERM FOUR is as much about stasis as it is about departing from it. The poets in this
                    issue, though writing on equilibrium, balance, and stillness, have produced work that shifts, that
                    calls to unyielding fluidity and movement. I’ve recently learned about Stasis Theory, a method of
                    discourse and argumentation created by the ancient Greeks. The goal — arrival at four conceptual
                    stases, to reach a base level of agreement among a group when dealing with an otherwise
                    inarguable issue. Stasis almost for the point of stasis, conclusion and common ground for its own
                    sake.</p>
                  <p>
                  The poems in this issue instead recoil from anything axiomatic. They linger only for a
                  moment on a frame of stasis — before disrupting and deconstructing it entirely.<br/> <br/> <br/>
                  </p>
                  <p><i>ALWAYS,</i><br/>Lily</p>
              </div>
          </div>
  )
}

