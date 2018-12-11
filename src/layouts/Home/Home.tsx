import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';

import gdgLogo from './GDG.png';
import './Home.css';

class Home extends React.Component<RouteComponentProps> {
  public render(): JSX.Element {
    return (
      <div className='Home'>
        <img className='Home__logo' src={gdgLogo} alt='GDG Logo'/>
        <Typography className='Home__title' paragraph={true} variant='h5'>
          Welcome to GDG DevFest Warsaw 2018 React Workshop!
        </Typography>
        <Typography className='Home__section' paragraph={true} variant='body1'>
          This is a working demo created during workshop and finished afterwards
          showcasing <b>React</b> and <b>Electron</b> working together.
        </Typography>
        <Typography className='Home__section' paragraph={true} variant='body1'>
          It incorporates libraries like <b>React Router, Material UI, ClassNames</b> and many more.
        </Typography>
        <Typography className='Home__section' variant='body1'>
          One of the main motivations behind creating this demo are:
        </Typography>
        <ul>
          <li>Showcase good practices when bootstrapping React apps</li>
          <li>Show Typescript and React working seamlessly</li>
          <li>Incorporate React into Electron environment</li>
          <li>Create desktop app look and feel and leverage system APIs</li>
        </ul>
        <Typography className='Home__section' paragraph={true} variant='body1'>
          To see image browser demo, click the <b>Image</b> tab or click
          <Button className='Home__button' color='secondary' onClick={this.navigateToBrowser}
                  variant='contained'>HERE</Button>
        </Typography>
      </div>
    );
  }

  private navigateToBrowser = () => {
    const history = this.props.history;
    history.push('/browser');
  };
}

export default withRouter<RouteComponentProps>(Home);
