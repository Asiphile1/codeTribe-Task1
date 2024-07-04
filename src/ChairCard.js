import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ff7300;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  margin-top: 20px;
`;

const ChairImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

const ChairTitle = styled.h3`
  font-size: 24px;
  color: #fff;
`;

const ChairDescription = styled.p`
  font-size: 16px;
  color: #fff;
`;

const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const AddToCartButton = styled.button`
  background-color: #fff;
  color: #ff7300;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ChairCard = () => {
  return (
    <Card>
      <ChairImage src="path/to/chair-image.png" alt="Shell Chair" />
      <ChairTitle>CH07 Shell chair</ChairTitle>
      <ChairDescription>
        The Carl Hansen CH07 Shell chair in Oiled Oak is a sculptural easy chair with a triangular footprint. Canaletto seat and 4 spoke swivel base all in natural polished Canaletto walnut fabric.
      </ChairDescription>
      <Price>$735</Price>
      <AddToCartButton>Add to Bag</AddToCartButton>
    </Card>
  );
};

export default ChairCard;
