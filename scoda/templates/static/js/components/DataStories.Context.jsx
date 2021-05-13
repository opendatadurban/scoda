import React, { useState } from 'react';
import Header from '../components/DataStories.Content.Card.Context.Header';
import Conclusion from "./DataStories.Card.Context.Conclusion";
import CrimeResearch from "./DataStories.Card.Context.Crime.Research";
import UrbanResidents from "./DataStories.Card.Context.Urban.Residents";
import AddressingInequality from "./DataStories.Content.Card.Context.Addressing.Inequality";
import Capita from "./Datastories.Content.Card.Context.Capita";
import MurderRate from "./DataStories.Content.Card.MurderRate";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    id: 1,
    page: <Header />
  },
  {
    id: 2,
    page: <AddressingInequality />
  },
  {
    id: 3,
    page: <Capita />
  },
  {
    id: 4,
    page: <MurderRate />
  },
  {
    id: 5,
    page: <CrimeResearch />
  },
  {
    id: 6,
    page: <UrbanResidents className="ds-content-solutions-carousel" />
  },
  {
    id: 7,
    page: <Conclusion />
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [prevShow, setPrevShow] = useState(false);
  const [nextShow, setNextShow] = useState(true);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    console.log("Next Index ", nextIndex)

    if (nextIndex === 0) {
      setPrevShow(false)
    }
    else {
      setPrevShow(true)
    }
    if (nextIndex === 6) {
      setNextShow(false)
    }
    else {
      setNextShow(true)
    }
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    console.log("Next Index ", nextIndex)
    if (nextIndex === 0) {
      setPrevShow(false)
    }
    else {
      setPrevShow(true)
    }

    if (nextIndex === 6) {
      setNextShow(false)
    }
    else {
      setNextShow(true)
    }
  }

  const goToIndex = (newIndex) => {

    if (animating) return;
    setActiveIndex(newIndex);
    if (newIndex === 0) {
      setPrevShow(false)
    }
    else {
      setPrevShow(true)
    }

    if (newIndex === 6) {
      setNextShow(false)
    }
    else {
      setNextShow(true)
    }

  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(false)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        {item.page}
      </CarouselItem>
    );
  });

  return (
    <div className="container carousel-container">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={1000000000}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        {prevShow ? <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} /> : ""}
        {nextShow ? <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> : ""}
      </Carousel>
    </div>
  );
}
export default Example;