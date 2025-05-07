import React from 'react';
import Card from './Card'; 
import spare from '../../assets/spare.jpg'
import second from '../../assets/second.webp'
import third from '../../assets/third.jpg'

const cardData = [
  {
    title: 'Nature Beauty',
    text: 'Explore the serene beauty of nature.',
    imgUrl: spare
  },
  {
    title: 'Urban Vibes',
    text: 'Feel the pulse of the city life.',
    imgUrl: second
  },
  {
    title: 'Mountain Peaks',
    text: 'Reach for the skies with towering peaks.',
    imgUrl: third
  },
  {
    title: 'Mountain Peaks',
    text: 'Reach for the skies with towering peaks.',
    imgUrl: third
  },
  {
    title: 'Mountain Peaks',
    text: 'Reach for the skies with towering peaks.',
    imgUrl: third
  },
  {
    title: 'Mountain Peaks',
    text: 'Reach for the skies with towering peaks.',
    imgUrl: third
  },
  {
    title: 'Mountain Peaks',
    text: 'Reach for the skies with towering peaks.',
    imgUrl: third
  },
  {
    title: 'Mountain Peaks',
    text: 'Reach for the skies with towering peaks.',
    imgUrl: third
  }
];

export default function CardList() {
  return (
    <div className="d-flex flex-wrap gap-4 justify-content-center" style={{marginTop: '2%', marginBottom:'2%'}}>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          text={card.text}
          imgUrl={card.imgUrl}
        />
      ))}
    </div>
  );
}
