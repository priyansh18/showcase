import React from 'react';

import RutherfordSkillsSVG from './RutherfordSkillsSVG';

import { Container, FloatingImage } from '../styles-in-js/shared';
import { ToolbarSection } from './Toolbox.styles';
import Title from '../styles-in-js/Title';

import ToolboxIcon from '../../static/icons/toolbox.svg';
import RutherfordBackground from '../../static/patterns/bg-rutherford.svg';

const Toolbox = () => {
  return (
    <ToolbarSection>
      <FloatingImage
        src={RutherfordBackground}
        alt={'Wallpaper'}
        t={['-380px', '-250px', '-200px', '-200px', '-50px', '-50px', '-50px']}
        w={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
        l={[0, 0, 0, 0, 0, 0, 0]}
      />
      <Container>
        <Title
          IconComp={ToolboxIcon}
          iconDesc={'Skills/can work with...'}
          w={'36'}
          h={'36'}
        />
        <RutherfordSkillsSVG />
      </Container>
    </ToolbarSection>
  );
};

export default Toolbox;
