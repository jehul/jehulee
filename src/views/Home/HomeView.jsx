import React from 'react';
import Typed from 'react-typed';
import Grid from '@material-ui/core/Grid';

import tuxASCII from '../../assets/images/tux';

import './HomeView.scss';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      printAboutMe: false,
      printWelcome: false,
      printContacts: false
    };

    this.aboutMeComplete = this.aboutMeComplete.bind(this);
    this.welcomeComplete = this.welcomeComplete.bind(this);
    this.contactsComplete = this.contactsComplete.bind(this);
  }

  componentDidMount() {}

  aboutMeComplete() {
    this.setState({ printAboutMe: true });
  }

  welcomeComplete() {
    this.setState({ printWelcome: true });
  }

  contactsComplete() {
    this.setState({ printContacts: true });
  }

  render() {
    const { printAboutMe, printWelcome, printContacts } = this.state;
    return (
      <div className="home-view-container">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12}>
            <div className="text-container">
              <Typed
                strings={['jehu-website@merlin:~$']}
                typeSpeed={0}
                showCursor={false}
              />
              <span> </span>
              <Typed
                strings={['echo welcome_ascii.txt']}
                typeSpeed={40}
                startDelay={1000}
                showCursor={false}
                onComplete={this.welcomeComplete}
              />
              {printWelcome ? tuxASCII : null}
              <Typed
                strings={['jehu-website@merlin:~$']}
                typeSpeed={0}
                startDelay={3000}
                showCursor={false}
              />
              <span> </span>
              <Typed
                strings={['echo about_me.txt']}
                typeSpeed={40}
                startDelay={4000}
                showCursor={false}
                onComplete={this.aboutMeComplete}
              />
              <br />
              {printAboutMe ? (
                <>
                  <br />
                  <span>Hello. Welcome to my personal website.</span>
                  <br />
                  <div>
                    I am a student at UCLA studying Computer Science. My
                    interests lie in software development.
                  </div>
                  <br />
                  <p>
                    For more information about me or if you would like to
                    contact me, feel free to reach out on any of the contacts I
                    provide below.
                  </p>
                  <br />
                </>
              ) : null}
              <br />
              <Typed
                strings={['jehu-website@merlin:~$']}
                typeSpeed={0}
                startDelay={5500}
                showCursor={false}
                onComplete={this.aboutMeComplete}
              />
              <span> </span>
              <Typed
                strings={['ls ./contacts']}
                typeSpeed={0}
                startDelay={6000}
                showCursor={false}
                onComplete={this.contactsComplete}
              />
              <br />
              {printContacts ? (
                <>
                  <br />
                  <span>
                    <a href="https://github.com/jehul">github</a>
                  </span>
                  <span> </span>
                  <span>
                    <a href="https://www.linkedin.com/in/jehu-lee-99a9aa140/">
                      linkedin
                    </a>
                  </span>
                </>
              ) : null}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default HomeView;
