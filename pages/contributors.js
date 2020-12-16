import Link from 'next/link'
import React from 'react'
import MenuBar from './menubar'


export default function Contributors() {
  return (
    <>
      <div>
            <div className="background">
                <div>
                <Link href='/'><a className="home_button">Berkeley Poetry Review</a></Link>
                </div>
                <MenuBar />
                <ContributorContent />
            </div>
        </div>  
    </>
  )
}

function ContributorContent() {
  return (
      <div className="modal_content2 masthead">
              <div className="masthead_title">Contributors</div>
              <div className="contributors_note fadeIn">
                  <p><i>TR BRADY </i>&nbsp;  is a poet and fiber artist based in Iowa City. TR’s work has appeared or is forthcoming in Paperbag, Bennington Review, Denver Quarterly, and Copper Nickel. TR holds an MFA from the Iowa Writers’ 
                  Workshop and is the co-founder/co-editor of Afternoon Visitor, a new journal of poetry and hybrid text.<br/></p>
                  <p><i>ANNIE CHRISTAIN </i>&nbsp;  is a professor of composition and ESOL at SUNY Cobleskill and a former artist resident of the Shanghai Swatch Art Peace Hotel and the Arctic Circle Art and Science Expedition. Her poems have appeared in Seneca Review, Oxford Poetry, Prelude, and The Lifted Brow, among others. She was a first-place winner of the Driftwood Press In-House Poem Contest and received the grand prize of the Hart Crane Memorial Poetry Contest, the Greg Grummer Poetry Award, the Oakland School of the Arts Enizagam Poetry Award, and the Neil Shepard Prize 
                  in Poetry. Tall As You Are Tall Between Them, her debut book of poetry, was published by C&R Press.</p>
                  <p><i>MANDY GUTMANN-GONZALEZ</i>&nbsp; is from Vilches, Chile. Their poetry has appeared in West Branch, 
                  The Malahat Review, Boulevard, BLOOM, Hobart, and other literary journals. Their novel in Spanish, 
                  La Pava (Ediciones Inubicalistas, 2016), follows three children who indirectly experience the trauma of 
                  the Pinochet military dictatorship in Chile. They won the 2018 Boulevard Emerging Poets Prize and have received fellowships from the Bucknell Seminar for 
                  Younger Poets, the Lambda Writing Retreat for Emerging LGBT Voices, The Center for Book Arts, and the Frost Place Conference on Poetry (Latinx Fellow). They 
                  hold an MFA in Poetry from Cornell University and teach creative writing at Clark University in Worcester, Massachusetts.</p>
                  <p><i>BRANDON KRIEG’s</i>&nbsp; most recent book is Magnifier, winner of the 2019 Colorado Prize for Poetry chosen by Kazim Ali. His poems have appeared or in Conjunctions, 
                  Crazyhorse, The Iowa Review, and many other journals. He lives in Kutztown, Pennsylvania and teaches at Kutztown University.</p>
                  <p><i>GINA LEE</i>&nbsp;  is an MFA candidate in creative writing at the University of Texas in El Paso. Her poems have been published in Rio Grande Review and forthcoming in Beyond Words Literary Magazine. New Jersey is home.</p>
                  <p><i>LYDIA T. LIU</i>&nbsp;  is a poet, and a PhD student in computer science at UC Berkeley. Her poems have appeared in Frogpond, Indiana Review, Modern Haiku, and Women’s Studies: An inter-disciplinary journal.</p>
                  <p><i>ASTRA PAPACHRISTODOULOU</i>&nbsp; is a poet based in Los Angeles. Their first book, Permanent Volta, is the recipient of the 2019 Sawtooth Prize, and is forthcoming from Nightboat Books in 2021. Their poems have been published by Jubilat, Apogee, Social Text Journal, Mask Magazine, and WONDER.</p>
                  <p><i>ROSIE STOCKTON</i>&nbsp; is a poet based in Los Angeles. Their first book, Permanent Volta, is the recipient of the 2019 Sawtooth Prize, and is forthcoming from Nightboat Books in 2021. Their poems have been published by Jubilat, Apogee, Social Text Journal, Mask Magazine, and WONDER.</p>
                  <p><i>SOPHIA TERAZAWA</i>&nbsp; is the author of two chapbooks, *I AM NOT A WAR* (Essay Press) and *Correspondent Medley* (Factory Hollow Press), winner of the 2018 Tomaž Šalamun Prize. Her work appears in The Offing, Puerto del Sol, Poor Claudia, and elsewhere. She received an MFA in Poetry at the University of Arizona, 
                  where she also served as poetry editor for Sonora Review.</p>
              </div>
          </div>
  )
}


