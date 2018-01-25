import React from 'react'
import ReactDOM from 'react-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  Alert,
  ListGroup,
  Media,
  MediaBody,
  MediaLeft,
  MediaObjectImage,
  MediaRight,
  PageHeader,
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeader,
  PanelWithAddButton,
  Progress,
  ProgressBar,
  ProgressBarSingle,
  RowControlButtons,
  StripedTable,
  TextAreaFormGroup
} from '../../src'
import MediaHeading from '../../src/MediaHeading'
import MediaList from '../../src/MediaList'
import MediaListItem from '../../src/MediaListItem'
import EditableListComponent from './EditableListComponent'
import EditableListInlineComponent from './EditableListInlineComponent'
import ListGroupComponent from './ListGroupComponent'
import ListInlineComponent from './ListInlineComponent'
import PaginationComponent from './PaginationComponent'

const mountNode = document.getElementById('app')

ReactDOM.render(
  <div className='container' >
    <PageHeader id='ReactTest' >
      <h1 >Bootstrap React Components Tests</h1 >
    </PageHeader >
    <h1 >CSS</h1 >
    <h2 > Grid System</h2 >
    <h2 >Typeography</h2 >
    <h3 >Lists</h3 >
    <h4 >Inline</h4 >
    <h5 >Read only</h5 >
    <ListInlineComponent />
    <h5 >Editable</h5 >
    <EditableListInlineComponent />
    <h2 >Code</h2 >
    <h2 >Tables</h2 >
    <h2 >Forms</h2 >
    <h3 >Supported Controls</h3 >
    <h4 >Text Area</h4 >
    <TextAreaFormGroup cssclassName='question' id='question' label='Question'
      onChange={e => console.log('text area changed: ', e)} value='Question' />
    <h2 >Buttons</h2 >
    <h2 >Images</h2 >
    <h2 >HelperClasses</h2 >
    <h2 >Responsive Utilities</h2 >

    <h1 >Components</h1 >
    <h2 >Pagination</h2 >
    <PaginationComponent />
    <h2 >Alerts</h2 >
    <h3 >Examples</h3 >
    <Alert id='plain' message='This is a basic alert message' />
    <Alert id='children' >
      <ul >
        <li >Message 1</li >
        <li >Message 2</li >
      </ul >
    </Alert >
    <Alert id='plain_success' type='success' message='This is a basic success alert message' />
    <Alert id='plain_warning' type='warning' message='This is a basic warning alert message' />
    <Alert id='plain_danger' type='danger' message='This is a basic danger alert message' />
    <h3 >Dismissable</h3 >
    <Alert id='dismissable' onDismiss={() => {
    }} message='This is a dismissable alert message' />
    <Alert id='children' onDismiss={() => {
    }} >
      <ul >
        <li >Message 1</li >
        <li >Message 2</li >
      </ul >
    </Alert >
    <Alert id='plain_success' onDismiss={() => {
    }} type='success' message='This is a basic success alert message' />
    <Alert id='plain_warning' onDismiss={() => {
    }} type='warning' message='This is a basic warning alert message' />
    <Alert id='plain_danger' onDismiss={() => {
    }} type='danger' message='This is a basic danger alert message' />
    <h3 >Links</h3 >
    <Alert id='plain_success' onDismiss={() => {
    }} type='success' >
      Words and stuff <a href='#' className='alert-link' >The link</a > surrounding the link.
    </Alert >
    <h2 >Progress Bars</h2 >
    <h3 >Basic Example</h3 >
    <ProgressBarSingle id='progressBarExample1' max={100} min={0} now={50} />
    <h3 >With Label</h3 >
    <ProgressBarSingle id='progressBarExample2' label='0% done' max={100} min={0} now={0} />
    <ProgressBarSingle id='progressBarExample3' label='2% done' max={100} min={0} now={2} />
    <h3 >Contextual Alternatives</h3 >
    <ProgressBarSingle context='success' id='progressBarExample4' max={100} min={0} now={50} />
    <ProgressBarSingle context='info' id='progressBarExample5' max={100} min={0} now={50} />
    <ProgressBarSingle context='warn' id='progressBarExample6' max={100} min={0} now={50} />
    <ProgressBarSingle context='danger' id='progressBarExample7' max={100} min={0} now={50} />
    <h3 >Striped</h3 >
    <ProgressBarSingle context='success' id='progressBarExample8' max={100} min={0} now={50} striped />
    <ProgressBarSingle context='info' id='progressBarExample9' max={100} min={0} now={50} striped />
    <ProgressBarSingle context='warn' id='progressBarExample10' max={100} min={0} now={50} striped />
    <ProgressBarSingle context='danger' id='progressBarExample11' max={100} min={0} now={50} striped />
    <h3 >Animated</h3 >
    <ProgressBarSingle context='success' id='progressBarExample12' animated max={100} min={0} now={50} striped />
    <ProgressBarSingle context='info' id='progressBarExample13' animated max={100} min={0} now={50} striped />
    <ProgressBarSingle context='warn' id='progressBarExample14' animated max={100} min={0} now={50} striped />
    <ProgressBarSingle context='danger' id='progressBarExample15' animated max={100} min={0} now={50} striped />
    <h3 >Stacked</h3 >
    <Progress id={'stackedProgressBarExample'} >
      <ProgressBar context='success' id='progressBarExample16' animated max={100} min={0} now={35} striped />
      <ProgressBar context='info' id='progressBarExample17' animated max={100} min={0} now={20} striped />
      <ProgressBar context='warn' id='progressBarExample18' animated max={100} min={0} now={10} striped />
    </Progress >
    <h2 > Media Object</h2 >
    <h3 >Default Media</h3 >
    <Media id={'MediaGroup'} >
      <MediaLeft id={'MediaLeft'} >
        <MediaObjectImage id={'MediaObjectImage'}
          src={'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'} alt={'Pick of a beach'} />
      </MediaLeft >
      <MediaBody id={'mediaBody'} >
        <MediaHeading heading={'This is a media heading'} id={'mediaHeadingBody'} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies sit amet diam eu placerat. Maecenas nisi
        augue, semper quis vehicula efficitur, hendrerit nec risus. Morbi eu justo tortor. Cras rhoncus ultricies dolor
        vitae bibendum. Vivamus risus lorem, varius sit amet pretium nec, feugiat vel erat. Sed at pretium odio, sit
        amet feugiat diam. Suspendisse risus purus, fermentum in ex vel, ullamcorper maximus magna. Nullam bibendum
        lacus at erat varius ornare. Pellentesque pharetra dapibus nibh eget viverra. Donec porttitor lacinia ante ac
        rutrum.
      </MediaBody >
    </Media >
    <Media id={'MediaGroup'} >
      <MediaLeft id={'MediaLeft'} >
        <MediaObjectImage id={'MediaObjectImage'}
          src={'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'} alt={'Pick of a beach'} />
      </MediaLeft >
      <MediaBody heading={'This is another heading'} id={'mediaBody'} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies sit amet diam eu placerat. Maecenas nisi
        augue, semper quis vehicula efficitur, hendrerit nec risus. Morbi eu justo tortor. Cras rhoncus ultricies dolor
        vitae bibendum. Vivamus risus lorem, varius sit amet pretium nec, feugiat vel erat. Sed at pretium odio, sit
        amet feugiat diam. Suspendisse risus purus, fermentum in ex vel, ullamcorper maximus magna. Nullam bibendum
        lacus at erat varius ornare. Pellentesque pharetra dapibus nibh eget viverra. Donec porttitor lacinia ante ac
        rutrum.
        <Media id={'MediaGroup'} >
          <MediaLeft id={'MediaLeft'} >
            <MediaObjectImage id={'MediaObjectImage'}
              src={'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'} alt={'Pick of a beach'} />
          </MediaLeft >
          <MediaBody id={'mediaBody'} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies sit amet diam eu placerat. Maecenas
            nisi
            augue, semper quis vehicula efficitur, hendrerit nec risus. Morbi eu justo tortor. Cras rhoncus ultricies
            dolor
            vitae bibendum. Vivamus risus lorem, varius sit amet pretium nec, feugiat vel erat. Sed at pretium odio, sit
            amet feugiat diam. Suspendisse risus purus, fermentum in ex vel, ullamcorper maximus magna. Nullam bibendum
            lacus at erat varius ornare. Pellentesque pharetra dapibus nibh eget viverra. Donec porttitor lacinia ante
            ac
            rutrum.
          </MediaBody >
        </Media >
      </MediaBody >
    </Media >
    <Media id={'MediaGroup'} >
      <MediaBody id={'mediaBody'} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies sit amet diam eu placerat. Maecenas nisi
        augue, semper quis vehicula efficitur, hendrerit nec risus. Morbi eu justo tortor. Cras rhoncus ultricies dolor
        vitae bibendum. Vivamus risus lorem, varius sit amet pretium nec, feugiat vel erat. Sed at pretium odio, sit
        amet feugiat diam. Suspendisse risus purus, fermentum in ex vel, ullamcorper maximus magna. Nullam bibendum
        lacus at erat varius ornare. Pellentesque pharetra dapibus nibh eget viverra. Donec porttitor lacinia ante ac
        rutrum.
      </MediaBody >
      <MediaRight id={'MediaLeft'} >
        <MediaObjectImage id={'MediaObjectImage'}
          src={'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'} alt={'Pick of a beach'} />
      </MediaRight >
    </Media >
    <Media id={'MediaGroup'} >
      <MediaLeft id={'MediaLeft'} >
        <MediaObjectImage id={'MediaObjectImage'}
          src={'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'} alt={'Pick of a beach'} />
      </MediaLeft >
      <MediaBody id={'mediaBody'} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies sit amet diam eu placerat. Maecenas nisi
        augue, semper quis vehicula efficitur, hendrerit nec risus. Morbi eu justo tortor. Cras rhoncus ultricies dolor
        vitae bibendum. Vivamus risus lorem, varius sit amet pretium nec, feugiat vel erat. Sed at pretium odio, sit
        amet feugiat diam. Suspendisse risus purus, fermentum in ex vel, ullamcorper maximus magna. Nullam bibendum
        lacus at erat varius ornare. Pellentesque pharetra dapibus nibh eget viverra. Donec porttitor lacinia ante ac
        rutrum.
      </MediaBody >
      <MediaRight id={'MediaLeft'} >
        <MediaObjectImage id={'MediaObjectImage'}
          src={'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'} alt={'Pick of a beach'} />
      </MediaRight >
    </Media >
    <h3 >Media Alignment</h3 >
    <Media id={'MediaGroup'} >
      <MediaLeft id={'MediaLeft'} vertical_alignment='top' >
        <MediaObjectImage id={'MediaObjectImage'}
          src={'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'} alt={'Pick of a beach'} />
      </MediaLeft >
      <MediaBody id={'mediaBody'} >
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, sapien id accumsan tristique,
          augue
          nisl porta risus, eu viverra lorem nisl pulvinar dui. Sed porta aliquam nunc vel mollis. In in libero ut urna
          pretium euismod eu sed neque. Sed eu sapien tempus, commodo ipsum at, lacinia odio. Donec commodo velit at
          diam
          lacinia convallis. Praesent dapibus magna felis, ac blandit enim vehicula sed. Donec lobortis convallis magna,
          a
          laoreet urna auctor a. Integer vitae nisi egestas, aliquet dolor condimentum, maximus velit. Fusce sodales
          feugiat purus ac luctus. Ut eget nisl aliquet, dapibus dui dictum, faucibus erat. Nulla eget sem eu nunc
          rutrum
          viverra.
        </p >
        <p >
          Pellentesque rhoncus dolor vitae vulputate gravida. In vel aliquet orci. Proin at elit ante. Nullam leo lacus,
          rhoncus sit amet tincidunt sed, ultrices pharetra tortor. Pellentesque in lobortis nunc. Etiam id fringilla
          augue. Aliquam vulputate mollis felis, vitae pharetra enim venenatis sit amet.
        </p >
      </MediaBody >
    </Media >
    <Media id={'MediaGroup'} >
      <MediaLeft id={'MediaLeft'} vertical_alignment='middle' >
        <MediaObjectImage id={'MediaObjectImage'}
          src={'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'} alt={'Pick of a beach'} />
      </MediaLeft >
      <MediaBody id={'mediaBody'} >
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, sapien id accumsan tristique,
          augue
          nisl porta risus, eu viverra lorem nisl pulvinar dui. Sed porta aliquam nunc vel mollis. In in libero ut urna
          pretium euismod eu sed neque. Sed eu sapien tempus, commodo ipsum at, lacinia odio. Donec commodo velit at
          diam
          lacinia convallis. Praesent dapibus magna felis, ac blandit enim vehicula sed. Donec lobortis convallis magna,
          a
          laoreet urna auctor a. Integer vitae nisi egestas, aliquet dolor condimentum, maximus velit. Fusce sodales
          feugiat purus ac luctus. Ut eget nisl aliquet, dapibus dui dictum, faucibus erat. Nulla eget sem eu nunc
          rutrum
          viverra.
        </p >
        <p >
          Pellentesque rhoncus dolor vitae vulputate gravida. In vel aliquet orci. Proin at elit ante. Nullam leo lacus,
          rhoncus sit amet tincidunt sed, ultrices pharetra tortor. Pellentesque in lobortis nunc. Etiam id fringilla
          augue. Aliquam vulputate mollis felis, vitae pharetra enim venenatis sit amet.
        </p >
      </MediaBody >
    </Media >
    <Media id={'MediaGroup'} >
      <MediaLeft id={'MediaLeft'} vertical_alignment='bottom' >
        <MediaObjectImage id={'MediaObjectImage'}
          src={'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'} alt={'Pick of a beach'} />
      </MediaLeft >
      <MediaBody id={'mediaBody'} >
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, sapien id accumsan tristique,
          augue
          nisl porta risus, eu viverra lorem nisl pulvinar dui. Sed porta aliquam nunc vel mollis. In in libero ut urna
          pretium euismod eu sed neque. Sed eu sapien tempus, commodo ipsum at, lacinia odio. Donec commodo velit at
          diam
          lacinia convallis. Praesent dapibus magna felis, ac blandit enim vehicula sed. Donec lobortis convallis magna,
          a
          laoreet urna auctor a. Integer vitae nisi egestas, aliquet dolor condimentum, maximus velit. Fusce sodales
          feugiat purus ac luctus. Ut eget nisl aliquet, dapibus dui dictum, faucibus erat. Nulla eget sem eu nunc
          rutrum
          viverra.
        </p >
        <p >
          Pellentesque rhoncus dolor vitae vulputate gravida. In vel aliquet orci. Proin at elit ante. Nullam leo lacus,
          rhoncus sit amet tincidunt sed, ultrices pharetra tortor. Pellentesque in lobortis nunc. Etiam id fringilla
          augue. Aliquam vulputate mollis felis, vitae pharetra enim venenatis sit amet.
        </p >
      </MediaBody >
    </Media >
    <h2 >List Group</h2 >
    <MediaList id={'mediaListExample'} >
      <MediaListItem id={'mediaListItemExample'} >
        <MediaLeft id={'mediaListItemLeft'} >
          <MediaObjectImage id={'MediaObjectImage'}
            src={'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'} alt={'Pick of a beach'} />
        </MediaLeft >
        <MediaBody id={'mediaBody'} >
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, sapien id accumsan tristique,
            augue
            nisl porta risus, eu viverra lorem nisl pulvinar dui. Sed porta aliquam nunc vel mollis. In in libero ut
            urna
            pretium euismod eu sed neque. Sed eu sapien tempus, commodo ipsum at, lacinia odio. Donec commodo velit at
            diam
            lacinia convallis. Praesent dapibus magna felis, ac blandit enim vehicula sed. Donec lobortis convallis
            magna,
            a
            laoreet urna auctor a. Integer vitae nisi egestas, aliquet dolor condimentum, maximus velit. Fusce sodales
            feugiat purus ac luctus. Ut eget nisl aliquet, dapibus dui dictum, faucibus erat. Nulla eget sem eu nunc
            rutrum
            viverra.
          </p >
          <p >
            Pellentesque rhoncus dolor vitae vulputate gravida. In vel aliquet orci. Proin at elit ante. Nullam leo
            lacus,
            rhoncus sit amet tincidunt sed, ultrices pharetra tortor. Pellentesque in lobortis nunc. Etiam id fringilla
            augue. Aliquam vulputate mollis felis, vitae pharetra enim venenatis sit amet.
          </p >
        </MediaBody >
      </MediaListItem >
      <MediaListItem id={'mediaListItemExample'} >
        <MediaLeft id={'mediaListItemLeft'} >
          <MediaObjectImage id={'MediaObjectImage'}
            src={'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'} alt={'Pick of a beach'} />
        </MediaLeft >
        <MediaBody id={'mediaBody'} >
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, sapien id accumsan tristique,
            augue
            nisl porta risus, eu viverra lorem nisl pulvinar dui. Sed porta aliquam nunc vel mollis. In in libero ut
            urna
            pretium euismod eu sed neque. Sed eu sapien tempus, commodo ipsum at, lacinia odio. Donec commodo velit at
            diam
            lacinia convallis. Praesent dapibus magna felis, ac blandit enim vehicula sed. Donec lobortis convallis
            magna,
            a
            laoreet urna auctor a. Integer vitae nisi egestas, aliquet dolor condimentum, maximus velit. Fusce sodales
            feugiat purus ac luctus. Ut eget nisl aliquet, dapibus dui dictum, faucibus erat. Nulla eget sem eu nunc
            rutrum
            viverra.
          </p >
        </MediaBody >
      </MediaListItem >
    </MediaList >
    <h3 >Editable List Group</h3 >
    <EditableListComponent />
    <h3 >List Group</h3 >
    <ListGroupComponent />
    <h2 >Panels</h2 >
    <h3 >Basic Example</h3 >
    <Panel id={'basic example'} >
      <PanelBody id={'basic example'} >
        Basic panel example
      </PanelBody >
    </Panel >
    <h3 >Panel with Heading</h3 >
    <Panel id={'withoutTitle'} >
      <PanelHeader id={'withoutTitle'} >
        Panel heading without title
      </PanelHeader >
      <PanelBody id={'withoutTitle'} >
        withoutTitle
      </PanelBody >
    </Panel >
    <Panel id={'withTitle'} >
      <PanelHeader id={'withTitle'} >
        <h3 className='panel-title' >Panel heading with title</h3 >
      </PanelHeader >
      <PanelBody id={'withoutTitle'} >
        withoutTitle
      </PanelBody >
    </Panel >
    <h3 >Panel with Footer</h3 >
    <Panel id={'withFooter'} >
      <PanelBody id={'withFooter'} >
        Panel Content
      </PanelBody >
      <PanelFooter id={'withFooter'} >
        Panel Footer
      </PanelFooter >
    </Panel >
    <h3 >Contextual Alternatives</h3 >
    <Panel id={'primary'} context='primary' >
      <PanelHeader id={'primary'} >
        <h3 className='panel-title' >Panel heading primary</h3 >
      </PanelHeader >
      <PanelBody id={'primary'} >
        primary
      </PanelBody >
    </Panel >
    <Panel id={'success'} context='success' >
      <PanelHeader id={'success'} >
        <h3 className='panel-title' >Panel heading success</h3 >
      </PanelHeader >
      <PanelBody id={'success'} >
        success
      </PanelBody >
    </Panel >
    <Panel id={'info'} context='info' >
      <PanelHeader id={'info'} >
        <h3 className='panel-title' >Panel heading info</h3 >
      </PanelHeader >
      <PanelBody id={'info'} >
        info
      </PanelBody >
    </Panel >
    <Panel id={'warning'} context='warn' >
      <PanelHeader id={'warning'} >
        <h3 className='panel-title' >Panel heading warning</h3 >
      </PanelHeader >
      <PanelBody id={'warning'} >
        warning
      </PanelBody >
    </Panel >
    <Panel id={'danger'} context='danger' >
      <PanelHeader id={'danger'} >
        <h3 className='panel-title' >Panel heading danger</h3 >
      </PanelHeader >
      <PanelBody id={'danger'} >
        danger
      </PanelBody >
    </Panel >
    <h3 >With tables</h3 >
    <Panel id={'withTablesAndText'} >
      <PanelHeader id={'withTablesAndText'} >
        <h3 className='panel-title' >Panel heading for table with panel body</h3 >
      </PanelHeader >
      <PanelBody id={'withTablesAndText'} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies sit amet diam eu placerat. Maecenas nisi
        augue, semper quis vehicula efficitur, hendrerit nec risus. Morbi eu justo tortor. Cras rhoncus ultricies dolor
        vitae bibendum. Vivamus risus lorem, varius sit amet pretium nec, feugiat vel erat. Sed at pretium odio, sit
        amet feugiat diam. Suspendisse risus purus, fermentum in ex vel, ullamcorper maximus magna. Nullam bibendum
        lacus at erat varius ornare. Pellentesque pharetra dapibus nibh eget viverra. Donec porttitor lacinia ante ac
        rutrum.
      </PanelBody >
      <table className='table' >
        <thead >
          <tr >
            <th >First Name</th >
            <th >Last Name</th >
          </tr >
        </thead >
        <tbody >
          <tr >
            <td >Bob</td >
            <td >Jones</td >
          </tr >
        </tbody >
      </table >
    </Panel >
    <Panel id={'withTables'} >
      <PanelHeader id={'withTables'} >
        <h3 className='panel-title' >Panel heading for table</h3 >
      </PanelHeader >
      <table className='table' >
        <thead >
          <tr >
            <th >First Name</th >
            <th >Last Name</th >
          </tr >
        </thead >
        <tbody >
          <tr >
            <td >Bob</td >
            <td >Jones</td >
          </tr >
        </tbody >
      </table >
    </Panel >
    <PanelWithAddButton id={'panelWithAddButton'} onAddClick={item => console.log('onAddClick: ', item)}
      title={'Panel with add button'} >
      <StripedTable id={'panelWithAddButtonTable'} >
        <thead >
          <tr >
            <th >First Name</th >
            <th >Last Name</th >
          </tr >
        </thead >
        <tbody >
          <tr >
            <td >Bob</td >
            <td >Jones</td >
          </tr >
          <tr >
            <td >John</td >
            <td >Smith</td >
          </tr >
          <tr >
            <td >John</td >
            <td >Smith</td >
          </tr >
        </tbody >
      </StripedTable >
    </PanelWithAddButton >
    <h3 >With List groups</h3 >
    <Panel id={'panelWithListGorups'} >
      <PanelHeader id={'panelWithListGroups'} >
        This is the panel header
      </PanelHeader >
      <PanelBody id={'panelWithListGroups'} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies sit amet diam eu placerat. Maecenas nisi
        augue, semper quis vehicula efficitur, hendrerit nec risus. Morbi eu justo tortor. Cras rhoncus ultricies dolor
        vitae bibendum. Vivamus risus lorem, varius sit amet pretium nec, feugiat vel erat. Sed at pretium odio, sit
        amet feugiat diam. Suspendisse risus purus, fermentum in ex vel, ullamcorper maximus magna. Nullam bibendum
        lacus at erat varius ornare. Pellentesque pharetra dapibus nibh eget viverra. Donec porttitor lacinia ante ac
        rutrum.
      </PanelBody >
      <ListGroup id={'panelWithListGroups'} itemHeading={item => item.name}
        items={[{name: 'foo', body: 'This is foo'}, {name: 'bar', body: 'This is bar'}]} itemText={item => item.body} />
    </Panel >
    <h1 >Javascript</h1 >

    <h1 >Custom</h1 >
    <h2 >Row Control Buttons</h2 >
    <RowControlButtons cancel={() => {
    }} editing={false} edit={() => {
    }} id='not_editing' save={() => {
    }} remove={() => {
    }} />
    <br />
    <RowControlButtons cancel={() => {
    }} editing={true} edit={() => {
    }} id='editing' save={() => {
    }} remove={() => {
    }} />
  </div >,
  mountNode
)
