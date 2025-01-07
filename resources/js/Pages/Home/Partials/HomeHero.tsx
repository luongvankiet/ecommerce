import { MotionContainer } from '@/Components/Animate';
import CarouselAnimation from '@/Components/Carousel/CarouselAnimation';
import { useResponsive } from '@/Hooks/useResponsive';
import { Box, Container } from '@mui/material';
import { useScroll } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { _mock } from '../../../_mock/_mock';
import {
  StyledEllipseBottom,
  StyledEllipseTop,
  StyledPolygon,
  StyledRoot,
  StyledWrapper,
} from './styles';

const _carouselsExample = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  coverUrl: _mock.image.cover(index),
  description: _mock.description(index),
}));

export default function HomeHero() {
  const mdUp = useResponsive('up', 'md');

  const { scrollY } = useScroll();

  const heroRef = useRef(null);

  const [percent, setPercent] = useState(0);

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', scrollHeight => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const opacity = 1 - percent / 100;

  const hide = percent > 120;

  const renderPolygons = (
    <>
      <StyledPolygon />
      <StyledPolygon anchor="right" opacity={0.48} />
      <StyledPolygon
        anchor="right"
        opacity={0.48}
        sx={{ height: 48, zIndex: 10 }}
      />
      <StyledPolygon anchor="right" sx={{ zIndex: 11, height: 24 }} />
    </>
  );

  const renderEllipses = (
    <>
      {mdUp && <StyledEllipseTop />}
      <StyledEllipseBottom />
    </>
  );

  return (
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <StyledWrapper>
          <Container
            component={MotionContainer}
            sx={{
              mt: {
                md: `${100 + percent * 2.5}px`,
              },
              height: 1,
              mx: 'auto',
              opacity: opacity > 0 ? opacity : 0,
            }}
          >
            <CarouselAnimation data={_carouselsExample} />
          </Container>

          {renderEllipses}
        </StyledWrapper>
      </StyledRoot>

      {mdUp && renderPolygons}

      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
