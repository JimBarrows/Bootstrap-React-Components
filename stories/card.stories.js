import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'

import React from 'react'
import Card from '../src/bootstrap/components/Card'
import CardBody from '../src/bootstrap/components/CardBody'
import CardColumn from '../src/bootstrap/components/CardColumn'
import CardDeck from '../src/bootstrap/components/CardDeck'
import CardFooter from '../src/bootstrap/components/CardFooter'
import CardGroup from '../src/bootstrap/components/CardGroup'
import CardHeader from '../src/bootstrap/components/CardHeader'
import CardImage from '../src/bootstrap/components/CardImage'
import CardImageOverlay from '../src/bootstrap/components/CardImageOverlay'
import CardTabs from '../src/bootstrap/components/CardTabs'
import CardText from '../src/bootstrap/components/CardText'
import CardTitle from '../src/bootstrap/components/CardTitle'
import ListGroup from '../src/bootstrap/components/ListGroup/index'
import NavItem from '../src/bootstrap/components/Nav/NavItem'


storiesOf('bootstrap/components/Card', module)
  .addDecorator((story) =>
    <div className="container">
      {story()}
    </div>)
  .add('Basic Card', () =>
    <Card id={'basicCard'}>
      This is a basic card.
    </Card>)
  .add('Card with width', () =>
    <Card id={'cardWidth'} width={'18rem'}>
      This card has width of 18rem
    </Card>)
  .add('Card with body', () =>
    <Card id={'cardBodyCard'} width={'18rem'}>
      <CardBody id={'cardBody'}>
        This is a card with a body.
      </CardBody>
    </Card>)
  .add('Card with title and text as components', () =>
    <Card id={'cardBodyCard'} width={'18rem'}>
      <CardBody id={'cardBody'} title={'This is the title'}>
        <CardText id={'cardText'} text={'This is a card with a body.'}/>
      </CardBody>
    </Card>)
  .add('Card with image, title and text as components', () =>
    <Card id={'cardBodyCard'} width={'18rem'}>
      <CardImage id={'cardImage'} height={120} width={200}
                 src={'https://upload.wikimedia.org/wikipedia/commons/3/3a/Bos_grunniens_at_Yundrok_Yumtso_Lake.jpg'}/>
      <CardBody id={'cardBody'}>
        <CardTitle id={'cardTitle'} title={'this is the title'}/>
        <CardText id={'cardText'} text={'This is a card with a body.'}/>
      </CardBody>
    </Card>)
  .add('As a listgroup', () =>
    <ListGroup id={'listGroup'}>
      <p>Item 1</p>
      <p>Item 2</p>
    </ListGroup>
  )
  .add('As a listgroup with header', () =>
    <ListGroup id={'listGroup'} header={'The header'}>
      <p>Item 1</p>
      <p>Item 2</p>
    </ListGroup>
  )
  .add('Kitchen sink', () =>
    <Card id={'kitchenSink'} width={'18rem'}>
      <CardImage id={'kitchenSinkCard'} height={120} width={200}
                 src={'https://upload.wikimedia.org/wikipedia/commons/3/3a/Bos_grunniens_at_Yundrok_Yumtso_Lake.jpg'}/>
      <CardBody id={'kitchenSinkBody'} title={'Card title'}>
        <CardText id={'kitchenSinkText'} text={'The text for the card bod.'}/>
      </CardBody>
      <ListGroup id={'listGroup'} header={'The header'}>
        <p>Item 1</p>
        <p>Item 2</p>
      </ListGroup>
      <CardBody id={'card-links'}>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </CardBody>
    </Card>)
  .add('Header', () =>
    <Card id={'header'}>
      <CardHeader id={'headerheader'} text={'This is a header'}/>
      <CardBody id={'headerbody'} title={'card header'}>
        <CardText id={'headerbodytext'} text={'Header body text'}/>
      </CardBody>
    </Card>)
  .add('Footer', () =>
    <Card id={'footer'}>
      <CardBody id={'headerbody'} title={'Footer body title'}>
        <CardText id={'headerbodytext'} text={'Footer body text'}/>
      </CardBody>
      <CardFooter id={'headerheader'} text={'This is a Footer'}/>
    </Card>)
  .add('Centered', () =>
    <Card id={'header'} center={true}>
      <CardHeader id={'headerheader'} text={'This is a header'}/>
      <CardBody id={'headerbody'} title={'card header'}>
        <CardText id={'headerbodytext'} text={'Header body text'}/>
      </CardBody>
    </Card>)
  .add('Navigation', () =>
    <Card id={'navigation'} center={true}>
      <CardHeader id={'navigation'}>
        <CardTabs id={'navigation'}>
          <NavItem id={'active'} label={'Active'} state={'active'} onClick={action('active tab click')}/>
          <NavItem id={'link'} label={'link'} onClick={action('link click')}/>
          <NavItem id={'link'} label={'disabled'} state={'disabled'} onClick={action('disabled tab click')}/>
        </CardTabs>
      </CardHeader>
      <CardBody id={'navigation'}>
        <CardTitle id={'navigation'} title={'Special title treatment'}/>
        <CardText id={'navigation'} text={'Blah blah blah blah'}/>
      </CardBody>
    </Card>)
  .add('Image overlay', () =>
    <Card id={'image-overlay'}>
      <CardImage id={'image-overlay'}
                 src={'https://upload.wikimedia.org/wikipedia/commons/3/3a/Bos_grunniens_at_Yundrok_Yumtso_Lake.jpg'}/>
      <CardImageOverlay id={'image-overlay'}>
        <CardTitle id={'image-overlay'} title={'Card title'}/>
        <CardText id={'image-overlay'} text={'This is a card with an image'}/>
        <CardText id={'image-overlay'} text={'More Text'}/>
      </CardImageOverlay>
    </Card>
  )
  .add('Background and color', () =>
    <div>
      <Card id={'backgroundAndColor'} context={'danger'}>
        <CardHeader id={'backgroundAndColor'} text={'This is a header'}/>
        <CardBody id={'backgroundAndColor'} title={'card header'}>
          <CardText id={'backgroundAndColor'} text={'Header body text'}/>
        </CardBody>
      </Card>
      <Card id={'backgroundAndColor'} context={'dark'}>
        <CardHeader id={'backgroundAndColor'} text={'This is a header'}/>
        <CardBody id={'backgroundAndColor'} title={'card header'}>
          <CardText id={'backgroundAndColor'} text={'Header body text'}/>
        </CardBody>
      </Card>
      <Card id={'backgroundAndColor'} context={'info'}>
        <CardHeader id={'backgroundAndColor'} text={'This is a header'}/>
        <CardBody id={'backgroundAndColor'} title={'card header'}>
          <CardText id={'backgroundAndColor'} text={'Header body text'}/>
        </CardBody>
      </Card>
      <Card id={'backgroundAndColor'} context={'light'}>
        <CardHeader id={'backgroundAndColor'} text={'This is a header'}/>
        <CardBody id={'backgroundAndColor'} title={'card header'}>
          <CardText id={'backgroundAndColor'} text={'Header body text'}/>
        </CardBody>
      </Card>
      <Card id={'backgroundAndColor'} context={'primary'}>
        <CardHeader id={'backgroundAndColor'} text={'This is a header'}/>
        <CardBody id={'backgroundAndColor'} title={'card header'}>
          <CardText id={'backgroundAndColor'} text={'Header body text'}/>
        </CardBody>
      </Card>
      <Card id={'backgroundAndColor'} context={'secondary'}>
        <CardHeader id={'backgroundAndColor'} text={'This is a header'}/>
        <CardBody id={'backgroundAndColor'} title={'card header'}>
          <CardText id={'backgroundAndColor'} text={'Header body text'}/>
        </CardBody>
      </Card>
      <Card id={'backgroundAndColor'} context={'success'}>
        <CardHeader id={'backgroundAndColor'} text={'This is a header'}/>
        <CardBody id={'backgroundAndColor'} title={'card header'}>
          <CardText id={'backgroundAndColor'} text={'Header body text'}/>
        </CardBody>
      </Card>
      <Card id={'backgroundAndColor'} context={'warning'}>
        <CardHeader id={'backgroundAndColor'} text={'This is a header'}/>
        <CardBody id={'backgroundAndColor'} title={'card header'}>
          <CardText id={'backgroundAndColor'} text={'Header body text'}/>
        </CardBody>
      </Card>
    </div>
  )
  .add('Card group', () =>
    <CardGroup id={'cardGroup'}>
      <Card id={'cardGroupr'} context={'danger'}>
        <CardHeader id={'cardGroupr'} text={'This is a header'}/>
        <CardBody id={'cardGroupr'} title={'card header'}>
          <CardText id={'cardGroupr'} text={'Header body text'}/>
        </CardBody>
      </Card>
      <Card id={'cardGroupr'} context={'dark'}>
        <CardHeader id={'cardGroupr'} text={'This is a header'}/>
        <CardBody id={'cardGroupr'} title={'card header'}>
          <CardText id={'cardGroupr'} text={'Header body text'}/>
        </CardBody>
      </Card>
      <Card id={'cardGroupr'} context={'info'}>
        <CardHeader id={'cardGroupr'} text={'This is a header'}/>
        <CardBody id={'cardGroupr'} title={'card header'}>
          <CardText id={'cardGroupr'} text={'Header body text'}/>
        </CardBody>
      </Card>
    </CardGroup>
  )
  .add('Card deck', () =>
    <CardDeck id={'cardDeck'}>
      <Card id={'cardDeck'} context={'danger'}>
        <CardHeader id={'cardDeck'} text={'This is a header'}/>
        <CardBody id={'cardDeck'} title={'card header'}>
          <CardText id={'cardDeck'} text={'Header body text'}/>
        </CardBody>
      </Card>
      <Card id={'cardDeck'} context={'dark'}>
        <CardHeader id={'cardDeck'} text={'This is a header'}/>
        <CardBody id={'cardDeck'} title={'card header'}>
          <CardText id={'cardDeck'} text={'Header body text'}/>
        </CardBody>
      </Card>
      <Card id={'cardDeck'} context={'info'}>
        <CardHeader id={'cardDeck'} text={'This is a header'}/>
        <CardBody id={'cardDeck'} title={'card header'}>
          <CardText id={'cardDeck'} text={'Header body text'}/>
        </CardBody>
      </Card>
    </CardDeck>
  )
  .add('Card column', () =>
    <CardColumn id={'cardColumn'}>
      <Card id={'cardColumn'} context={'danger'}>
        <CardHeader id={'cardColumn'} text={'This is a header'}/>
        <CardBody id={'cardColumn'} title={'card header'}>
          <CardText id={'cardColumn'} text={'Header body text'}/>
        </CardBody>
      </Card>
      <Card id={'cardColumn'} context={'dark'}>
        <CardHeader id={'cardColumn'} text={'This is a header'}/>
        <CardBody id={'cardColumn'} title={'card header'}>
          <CardText id={'cardColumn'} text={'Header body text'}/>
        </CardBody>
      </Card>
      <Card id={'cardColumn'} context={'info'}>
        <CardHeader id={'cardColumn'} text={'This is a header'}/>
        <CardBody id={'cardColumn'} title={'card header'}>
          <CardText id={'cardColumn'} text={'Header body text'}/>
        </CardBody>
      </Card>
    </CardColumn>
  )

