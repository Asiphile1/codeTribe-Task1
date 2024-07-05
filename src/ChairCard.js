import React from 'react';
import styled from 'styled-components';

// Container for the chair card with a two-column layout
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  margin-top: 20px;
`;

// Left column for the chair image
const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 500px;
`;

// Chair image styling
const ChairImage = styled.img`
  max-width: 60%;
  height: auto;
  width: 500px;
`;

// Right column for the chair details
const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: left;
`;

// Chair description styling
const ChairDescription = styled.p`
  font-size: 16px;
  color: #fff;
  max-width: 400px;
`;

// Price styling
const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  
`;

// Add to cart button styling
const AddToCartButton = styled.button`
  background-color: #fff;
  color: #ff7300;
  padding: 20px 70px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

// Chair card component displaying the chair information
const ChairCard = () => {
  return (
    <Card>
      {/* Left column with chair image */}
      <LeftColumn>
        <ChairImage src="/downloaded-pic-1-removebg-preview.png" alt="Shell Chair" />
      </LeftColumn>
      {/* Right column with chair details */}
      <RightColumn>
        <ChairDescription>
          The Carl Hansen CH07 Shell chair in Oiled Oak is a sculptural easy chair with a triangular footprint. Canaletto seat and 4 spoke swivel base all in natural polished Canaletto walnut fabric.
        </ChairDescription>
        <Price>$735</Price>
        <AddToCartButton>Add to Bag</AddToCartButton>
      </RightColumn>
    </Card>
  );
};

export default ChairCard;
