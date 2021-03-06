import React from "react";
import Steps from "./components/Steps";
import Content from "./components/Content";
import _ from "lodash";

export default class XP extends React.Component {
  state = {
    selected: 0,
    isVisible: false
  };

  xpProps = {
    className: "xp-description"
  };

  renderKeywords = (string = "") => {
    if (string !== "") {
      let words = _.split(string, ",");
      return words.map((word, i) => {
        return (
          <span key={i}>
            <a>{word}</a>
            {i + 1 !== words.length ? "," : ""}
          </span>
        );
      });
    }
  };

  roles = [
    {
      header: "Senior front end developer",
      meta: "FairFx",
      description: (
        <p {...this.xpProps}>
          A big jmp into the Fintech industry helping to build the company's new
          product. Working in a team of 8 developers using Kanban and focusing
          on feature teams, code reviews and amazing team spirit. Also working
          close to UI and UX designers, building responsive systems.
          <br />
          <br />
          One thing I find very interesting in FairFx is that all development
          teams share a github repository for reusable code. This code includes
          anything from UI components, middlewares, helpers, configs and more.
          There are development meetings every 2 weeks for disussing how to
          improve this shared code and contribute more.
          {this.renderKeywords(
            "React, Typescript, TDD, Node.js, Redux, styled-components, Kanban"
          )}
        </p>
      ),
      extra: "January 2019 - now",
      icon: "rocket",
      when: 0
    },
    {
      header: "Lead developer",
      meta: "Trunomi",
      description: (
        <p {...this.xpProps}>
          Due to the nature of the Lead developer role I started being more
          involved into requirements and further planning. From a technical
          point of view I started doing more code reviews and managing the
          sprint's cycles from requirements to development and then QA until we
          are ready for a release.
          <br />
          <br />
          Due to being more involved in the higher end of the company's
          processes I started adding User Experience (UX) in our system to make
          it more usable.
          <br />
          <br />
          The ongoing process of moving the company's APIs from node to Golang
          kept being the same but now is more part of the company process
          instead of a side project. We also started a data science hackathon.
          <br />
          <br />
          Stuff I've been doing here:
          <br />
          {this.renderKeywords(
            "Go, React, React Native, Node.js, Typescript, React state management with Mobx, GraphQL, CrateDB, Redis, Postgres"
          )}
        </p>
      ),
      extra: "August 2018 - January 2019",
      icon: "fighter jet",
      when: "2018,8"
    },
    {
      header: "Full stack developer",
      meta: "Trunomi",
      description: (
        <p {...this.xpProps}>
          My big career step into the Data Privacy industry. I started
          developing the company's self service systems as well as adding new
          features to the existing APIs.
          <br />
          <br />
          While being a full stack developer I managed to do a complete redesign
          of the company's UIs. We also started to transfer the company's API to
          Golang. Overtime I started dealing with a lot of sprint management
          responsibilities and eventually I became the company's lead developer.
          <br />
          <br />
          Stuff I did here:
          <br />
          {this.renderKeywords(
            "React, Node.js, Typescript, Laravel, Python Selenium, React state management with Mobx, GraphQL, CrateDB, Redis, Bootstrap, Material-UI"
          )}
        </p>
      ),
      extra: "August 2017 - August 2018",
      icon: "plane",
      when: "2017,8"
    },
    {
      header: "Software developer",
      meta: "Veoo Ltd",
      description: (
        <p {...this.xpProps}>
          Further into the telecommunications industry, Veoo is a mobile
          aggregator. My role mainly involed developing new features and
          maintaining the company's custom made CMS system. After I joined we
          started rebuilding the company's customer portal in React.
          <br />
          <br />
          Stuff I did here:
          <br />
          {this.renderKeywords(
            "FuelPHP MVC framework, ReactJS, Bootstrap, MongoDB, MySQL, Redis, Microservices, continuous integration using Travic CI, AWS, Github, Slack, Sublime, Scrum"
          )}
        </p>
      ),
      extra: "July 2014 - July 2017",
      icon: "car",
      when: "2014,7"
    },
    {
      header: "Programmer",
      meta: "VisionSMS Ltd",
      description: (
        <p {...this.xpProps}>
          My first job after finishing with the university. I was based in
          Glasgow, Scotland. The company dealt with mobile marketing. My role
          mainly involved building custom SMS gateways in PHP. Apart from that I
          dealt a lot Devops related tasks like setting up the host and email
          servers of multiple environments of the company.
          <br />
          <br />
          Stuff I did here:
          <br />
          {this.renderKeywords(
            "Stack, Mainly Vanilla PHP and Code Igniter & Yii frameworks, Front-end, custom CSS, Bootstrap, JQuery, Back-end, MySQL, Other, Vim, Apache, Nginx, DataBase Admin"
          )}
        </p>
      ),
      extra: "May 2013 - June 2014",
      icon: "bicycle",
      when: "2013,5"
    }
  ];

  onClick = i => {
    this.setState({ selected: i });
  };

  render() {
    let props = {
      roles: this.roles,
      selected: this.state.selected,
      onClick: this.onClick
    };
    return (
      <div id="xp" className="section">
        <div className="section-container">
          <h1>My Experience</h1>
          <Steps {...props} />
          <Content {...props} />
        </div>
      </div>
    );
  }
}
