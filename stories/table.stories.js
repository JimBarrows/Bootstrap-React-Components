import {storiesOf} from '@storybook/react'

import React from 'react'
import Table from '../src/bootstrap/tables/Table'
import TableHead from '../src/bootstrap/tables/TableHead'
import TableRow from '../src/bootstrap/tables/TableRow'


storiesOf('bootstrap/tables', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('Basic', () => <Table id={'basic'}>
    <TableHead id={'basic'}>
      <TableRow>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </TableRow>
    </TableHead>
    <tbody>
    <TableRow>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </TableRow>
    <TableRow>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </TableRow>
    <TableRow>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    </tbody>
  </Table>)
  .add('Inverted colors', () => <Table id={'basic'} invert={true}>
    <TableHead id={'inverted'}>
      <TableRow>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </TableRow>
    </TableHead>
    <tbody>
    <TableRow>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </TableRow>
    <TableRow>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </TableRow>
    <TableRow>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    </tbody>
  </Table>)
  .add('Inverted header', () => <Table id={'basic'} >
    <TableHead id={'inverted'} invert={true}>
      <TableRow>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </TableRow>
    </TableHead>
    <tbody>
    <TableRow>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </TableRow>
    <TableRow>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </TableRow>
    <TableRow>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    </tbody>
  </Table>)
  .add('Striped', () => <Table id={'striped'} striped={true}>
    <TableHead id={'striped'}>
      <TableRow>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </TableRow>
    </TableHead>
    <tbody>
    <TableRow>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </TableRow>
    <TableRow>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </TableRow>
    <TableRow>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    </tbody>
  </Table>)
  .add('Bordered', () => <Table id={'bordered'} bordered={true}>
    <TableHead id={'striped'}>
      <TableRow>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </TableRow>
    </TableHead>
    <tbody>
    <TableRow>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </TableRow>
    <TableRow>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </TableRow>
    <TableRow>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    </tbody>
  </Table>)
  .add('Borderless', () => <Table id={'borderless'} borderless={true}>
    <TableHead id={'borderless'}>
      <TableRow>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </TableRow>
    </TableHead>
    <tbody>
    <TableRow>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </TableRow>
    <TableRow>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </TableRow>
    <TableRow>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    </tbody>
  </Table>)
  .add('Hoverable Rows', () => <Table id={'hoverable'} hoverableRows={true}>
    <TableHead id={'hoverable'}>
      <TableRow>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </TableRow>
    </TableHead>
    <tbody>
    <TableRow>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </TableRow>
    <TableRow>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </TableRow>
    <TableRow>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    </tbody>
  </Table>)
  .add('Small', () => <Table id={'hoverable'} small={true}>
    <TableHead id={'hoverable'}>
      <TableRow>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </TableRow>
    </TableHead>
    <tbody>
    <TableRow>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </TableRow>
    <TableRow>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </TableRow>
    <TableRow>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    </tbody>
  </Table>)
  .add('Contextual Classes', () => <Table id={'basic'}>
    <TableHead id={'context'}>
      <TableRow id={'header'} >
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </TableRow>
    </TableHead>
    <tbody>
    <TableRow id={'1'} context={'active'}>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </TableRow>
    <TableRow id={'2'} context={'danger'}>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </TableRow>
    <TableRow id={'3'} context={'dark'}>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    <TableRow id={'4'} context={'info'}>
      <th scope="row">4</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    <TableRow id={'5'} context={'light'}>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    <TableRow id={'6'} context={'primary'}>
      <th scope="row">6</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    <TableRow id={'7'} context={'secondary'}>
      <th scope="row">7</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    <TableRow id={'8'} context={'success'}>
      <th scope="row">8</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    <TableRow id={'9'} context={'warning'}>
      <th scope="row">9</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </TableRow>
    </tbody>
  </Table>)