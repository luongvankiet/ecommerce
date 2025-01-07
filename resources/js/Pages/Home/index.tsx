import ScrollProgress from '@/Components/ScrollProgress';
import ClientLayout from '@/Layouts/Client';
import { useScroll } from 'framer-motion';
import React from 'react';
import HomeHero from './Partials/HomeHero';
import { Box, Container } from '@mui/material';
import CarouselAnimation from '@/Components/Carousel/CarouselAnimation';
import { _mock } from '../../_mock/_mock';

const _carouselsExample = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  coverUrl: _mock.image.cover(index),
  description: _mock.description(index),
}));

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <ClientLayout title="Home Page">
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <Container sx={{ my: 20 }}>
          <CarouselAnimation data={_carouselsExample} />
        </Container>
      </Box>
    </ClientLayout>
  );
}
