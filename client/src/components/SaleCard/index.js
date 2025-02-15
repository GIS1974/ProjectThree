import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const SaleCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Price</CardSubtitle>
          <CardText>Description.</CardText>
          <Button>Buy</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default SaleCard;