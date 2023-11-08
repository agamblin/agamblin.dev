import React from 'react';
import Section from './Section';
import StyledLink from '../StyledLink';

function About() {
  return (
    <Section title="about">
      <p>
        From game modding during my early years to completing my master at{' '}
        <StyledLink href="https://www.epitech.eu/en/">Epitech Paris</StyledLink>
        , I have always been immersed in Software Development, which set me on a
        path of continuous learning and growth. Fast-forward to today, and
        I&apos;ve had the honor of spearheading the development of a unified
        planning platform at{' '}
        <StyledLink href="https://www.ionis-group.com/">Ionis</StyledLink>,
        optimizing site setups and internal tools at{' '}
        <StyledLink href="https://en.wavy.co/">Wavy</StyledLink>, and creating
        user-friendly interfaces at{' '}
        <StyledLink href="https://www.masteos.com/">Masteos</StyledLink>.
      </p>
      <p>
        As a Software Engineer at{' '}
        <StyledLink href="https://www.ionis-group.com/">Ionis</StyledLink>,
        I&apos;m crafting solutions that streamline scheduling and management
        for thousands of users. Outside of my primary role, I&apos;ve ventured
        into various tech stacks, from React and Node.js to Golang and Python,
        ensuring that I stay at the forefront of technological advancements.
      </p>
      <p>
        When not immersed in code, I enjoy reading historical non-fiction,
        tennis, or exploring new pixellated words. Whether it&rsquo;s exploring
        the streets of Paris or diving deep into the intricacies of a new
        language, I&apos;m always on the lookout for the next challenge.
      </p>
    </Section>
  );
}

export default About;
