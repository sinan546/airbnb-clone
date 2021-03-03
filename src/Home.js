import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";

function Home() {
    return (
      <div className="home">
        <Banner />
        <div className="home__section">
          <Card
            src="https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=240"
            title="Online Experiences"
            description="Unique activities we can do together, led by a world of hosts."
          />
          <Card
            src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=240"
            title="Unique Stays"
            description="Spaces that are more than just a place to sleep."
          />
          <Card
            src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=240"
            title="Entire homes"
            description="Comfortable private places, with room for friends or family."
          />
        </div>
        <div className="home__section">
          <Card
            src="https://a0.muscache.com/im/pictures/miso/Hosting-36861596/original/f132ee0e-38d7-4c81-9406-d65934a5fba5.jpeg?im_w=1200"
            title="Beautiful modern flat heart of Fulham"
            description="Great location and modern flat. Large free standing bath and tv inside the bathroom! Although on the "
            price="$66/ night"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/miso/Hosting-45490836/original/a1a1ffa9-9d71-4a27-9cbb-988339d804dd.jpeg?im_w=960"
            title="Stunning One Bedroom Flat in Central Victoria GG4"
            description="A fantastically grand one bedroom apartment, located near Londons epicentre. Living room is modern "
            price="$40/ night"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/386af9eb-1db7-4b9f-b053-6f5b9a31dbe0.jpg?im_w=960"
            title="Peaceful flat - central Golders Green"
            description="Peaceful flat set within meditation centre. Amazing garden that you are welcome to relax in"
            price="$35/ night"
          />
        </div>
      </div>
    );
}

export default Home;
