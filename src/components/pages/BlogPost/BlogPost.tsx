import { PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import {
    typographyHeading2,
    typographyParagraphNormal,
} from '../../../styles/font'
import spacing from '../../../styles/spacing'
import Header from '../../molecules/Header'
import SectionBase from '../../atom/SectionBase'

const PostTitle = styled.h1`
    ${typographyHeading2}
`

const PostContainer = styled(SectionBase).attrs({ as: 'article' })`
    max-width: ${spacing(46)};
`

const PostParagraph = styled.p`
    ${typographyParagraphNormal}
    margin-top: ${spacing(3)};
`

const BlogPost = ({ data }: PageProps<GatsbyTypes.PostQuery>) => {
    console.log(data)
    return (
        <>
            <Header withShadow={false} variant="dark" />

            <StaticImage
                src="../../../assets/cosmos.jpeg"
                alt=""
                style={{ width: '100%' }}
                placeholder="blurred"
                layout="fixed"
            />

            <PostContainer>
                <PostTitle>
                    There are multiple modules with names that only differ in
                    casing.
                </PostTitle>

                <PostParagraph>
                    Reading the accounts of Scott Rudin’s present and former
                    employees, of the abuse they suffered and were expected to
                    endure at Scott Rudin Productions, has broken my heart.
                </PostParagraph>

                <PostParagraph>
                    In the roughly twenty years that I regularly collaborated
                    with Scott, I worked with and got to know many of his
                    employees — a generation of them — from the VPs, to the
                    researchers, to the assistants who worked the phones. I
                    remember Kevin Graham-Caso — he was a sweetheart — and it
                    was a gut-punch to learn, from his brother David’s recent
                    video, about his suicide, following years of struggle with
                    PTSD.
                </PostParagraph>

                <PostParagraph>
                    Twenty years is a long time to collaborate with an abuser.
                    My impulse is to excuse, exonerate or at any rate minimize
                    my complicity by saying that personally I never saw or heard
                    anything approaching the level of the most egregious
                    incidents reported on vulture.com and elsewhere, that I
                    never heard Scott use vulgar or demeaning epithets, or saw
                    Scott cause physical injury. I heard stories of Scott’s
                    tantrums and vindictiveness, but not of smashed hands and
                    people pushed out of moving cars.
                </PostParagraph>

                <PostParagraph>
                    But I knew enough. I regularly, even routinely, heard him
                    treat his staff, from the new kid doing the coffee run to
                    the guy just under Scott on the SRP organizational chart,
                    with what I would call a careful, even surgical contempt,
                    like a torturer trained to cause injuries that leave no
                    visible marks. And I saw him throw a pencil, once, at an
                    assistant as the young man fled Scott’s office and Scott’s
                    shouting. The pencil struck the back of the assistant’s
                    head, eraser end first, and fell to the carpet. A minute
                    later, Scott called me into his office, and we started
                    talking, as if nothing untoward had happened, about whatever
                    script we were working on at the time. accusantium ipsam
                    quis sint?
                </PostParagraph>

                <PostParagraph>
                    As if nothing had happened. In those five words, the recipe
                    for a culture of abuse, in families, in the workplace, and
                    in the world.
                </PostParagraph>

                <PostParagraph>
                    I knew enough to discern the pall that reliably settled over
                    the offices whenever Scott was around, as he almost always
                    was, and the contrasting sense of lightness if I stopped by
                    to meet with one of the development guys when Scott was in
                    London, say, or out for the day — not to mention the
                    perpetual sunniness (relatively speaking) and ease that
                    reigned in SRP’s Hollywood offices after he took up more or
                    less permanent residence in New York toward the latter part
                    of the 90s. “You seem good,” I remember saying to one of his
                    LA development guys in that era, resuming work with him
                    after an interruption of several months. “That’s because I’m
                    here,” he replied brightly, “and Scott isn’t.”
                </PostParagraph>

                <PostParagraph>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quam quas quo deserunt excepturi, blanditiis aliquid optio
                    rerum ab veniam. Voluptas architecto nam iure tempora in,
                    veniam accusantium ipsam quis sint?
                </PostParagraph>
            </PostContainer>
        </>
    )
}

export default BlogPost
