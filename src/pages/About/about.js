import React from 'react';
import './About.css';

import bible from '../../assets/bible.jpeg'
import story from '../../assets/story.jpeg'
import tikvah from '../../assets/tikvah.jpeg'
import lesson from '../../assets/lesson.jpeg'
import kick_start from '../../assets/kick-start.jpeg'

const sections = [
  {
    title: "Who We Are",
    text: "Genesis of Hope Media is a media house with a vision: to be a source of hope and spiritual inspiration through engaging media, and a mission: to create Christ-centered, uplifting content that educates, empowers, and encourages individuals in their faith journey.",
    img: bible
  },
  {
    title: "Our Story",
    text: "Founded with the desire to touch lives spiritually, our journey has been one of growth and unwavering commitment to God’s mission. We aim to reach the world through media that brings light, love, and faith.",
    img: story
  },
  {
    title: "Tikvah Talks",
    text: "Tikvah Talks are soul-stirring sessions that dive into real-life stories, testimonies, and spiritual reflections, helping our viewers connect faith to everyday life.",
    img: tikvah
  },
  {
    title: "Lesson Discussions",
    text: "Interactive and insightful, our lesson discussions provide deep dives into the weekly spiritual themes, promoting group learning and individual reflection.",
    img: lesson
  },
  {
    title: "Kick Start Your Sabbath",
    text: "Prepare your heart for the Sabbath with uplifting music, thought-provoking devotionals, and messages that help you rest in God’s presence.",
    img: kick_start
  }
];

const About = () => {
  return (
    <div className="about-container" id="about">
      <h1>About Us</h1>
      <hr />
      {sections.map((section, index) => (
        <div className={`section ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
          <div className="text-content">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
          <div className="image-content">
            <img src={section.img} alt={section.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
