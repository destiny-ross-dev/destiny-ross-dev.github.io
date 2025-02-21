import React, { Component } from "react";
import ContentCards from "../../components/ContentCards/ContentCards";
import { Link } from "react-router-dom";
import "./Index.css";
import crwn from "../../assets/crwn-ss.png";
import hackernews from "../../assets/hacker-news-ss.png";
import dapp from "../../assets/dapp-ss.png";
import groots from "../../assets/grassroots.png";

function Pill({ text }) {
  return (
    <div className="Pill dark-text">
      <h3>{text}</h3>
    </div>
  );
}

function IndexPage() {
  return (
    <div className="Page IndexPage">
      <div className="ContentContainer">
        <div className="CardsContainer">
          {/* <ContentCards
            descriptionText="E-Commerce site built with React + Redux, Express, Postgres and Node.
        Stripe integration for payment processing."
          /> */}
          <ContentCards
            projectName="Hackernews Clone"
            thumbnail={hackernews}
            descriptionText="A fully-featured Hackernews clone built with React, GraphQL, Apollo Client, and Prisma"
          />
          <ContentCards
            projectName="Crwn Clothing E-Commerce"
            descriptionText="E-Commerce site built with React + Redux, Express, Firebase and Node.
        Stripe integration for payment processing."
            thumbnail={crwn}
          />
          <ContentCards
            projectName="Debate Night D-App"
            thumbnail={dapp}
            descriptionText="A fully-featured Hackernews clone built with React, GraphQL, Apollo Client, and Prisma"
          />
          <ContentCards
            projectName="Grassroots Field Management"
            thumbnail={groots}
            descriptionText="A fully-featured Hackernews clone built with React, GraphQL, Apollo Client, and Prisma"
          />
        </div>
        <div className="SummaryContainer">
          <div className="Summary">
            <h2>Hello, There</h2>
            <p>
              Coming from a world of anthropology and international development,
              I have a passion for accessible people-centered design. Whether
              you need stunning visualizations or performant websites, you're in
              good hands. Read my resume{" "}
              <Link className="Summary__Link" to="/resume">
                here.
              </Link>
            </p>
          </div>
          <div className="PillContainer">
            <h2>Tools</h2>
            <Pill text="React" />
            <Pill text="Redux" />
            <Pill text="Express" />
            <Pill text="Node" />
            <Pill text="SCSS" />
            <Pill text="Adobe XD" />
            <Pill text="HTML/CSS" />
            <Pill text="UI/UX" />
            <Pill text="d3" />
            <Pill text="SQL" />
            <Pill text="C#" />
            <Pill text=".NET Framework" />
            <Pill text="Prototyping" />
            <Pill text="Frontend" />
            <Pill text="Backend" />
            <Pill text="GraphQL" />
            <Pill text="Responsive Design" />
            <Pill text="TDD" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default IndexPage;
