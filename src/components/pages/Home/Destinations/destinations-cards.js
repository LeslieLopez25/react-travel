import React from "react";
import DestinationsCardItem from "./destinations-card_item.component";
import Img1 from "../../../../assets/images/canada-2-min.jpg";
import Img2 from "../../../../assets/images/england-2.jpg";
import Img3 from "../../../../assets/images/france-2.jpg";
import Img4 from "../../../../assets/images/greece-2.jpg";
import Img5 from "../../../../assets/images/ireland-2.jpg";
import Img6 from "../../../../assets/images/italy-2.jpg";
import Img7 from "../../../../assets/images/japan-2-min.jpg";
import Img8 from "../../../../assets/images/mexico-2-min.jpg";
import Img9 from "../../../../assets/images/norway-2-min.jpg";
import Img10 from "../../../../assets/images/u.s.a-2-min.jpg";

import "./destinations.styles.css";

export default function DestinationsCard() {
  return (
    <div className="destinations-cards">
      <h1 className="section-title">Destinations</h1>
      <div className="destinations-cards__container">
        <div className="destinations-cards__wrapper">
          <ul className="destinations-cards__items">
            <DestinationsCardItem
              src={Img1}
              label="Canada"
              desc="Canada is home to more lakes than the rest of the world's lakes combined! With over 31,700 lakes larger than three square kilometers, you can imagine the stunning natural beauty and endless opportunities for outdoor adventures awaiting you in the Great White North."
            />
            <DestinationsCardItem
              src={Img2}
              label="England"
              desc="England is home to the world's oldest functioning clock, which is located in Salisbury Cathedral. This remarkable timepiece, known as the Salisbury Cathedral Clock, has been ticking away since its installation in 1386, making it over 600 years old! Visiting this ancient clock not only offers a glimpse into England's rich history but also serves as a reminder of the country's enduring ingenuity and craftsmanship across the centuries."
            />
          </ul>
          <ul className="destinations-cards__items">
            <DestinationsCardItem
              src={Img3}
              label="France"
              desc="France is home to the Palace of Versailles, which boasts over 700 rooms, 1,200 fireplaces, and 67 staircases. One of the most fascinating features of this opulent palace is the Hall of Mirrors, adorned with 357 mirrors reflecting the beauty of its magnificent gardens."
            />
            <DestinationsCardItem
              src={Img4}
              label="Greece"
              desc="Greece is home to the world's oldest recorded olive tree, estimated to be over 2,000 years old! Known as the 'Olive Tree of Vouves,' this ancient tree still produces olives to this day. Its resilience and longevity serve as a living testament to the rich agricultural history and cultural significance of olive cultivation in Greece"
            />
          </ul>
          <ul className="destinations-cards__items">
            <DestinationsCardItem
              src={Img5}
              label="Ireland"
              desc="Ireland is renowned for its rich tradition of storytelling, and it's said that the country boasts more writers, artists, and Nobel laureates per capita than any other place in the world. From the epic tales of ancient mythology to the modern works of literary giants like James Joyce and Oscar Wilde, Ireland's literary heritage is woven into the fabric of its culture."
            />
            <DestinationsCardItem
              src={Img6}
              label="Italy"
              desc="Italy is home to the smallest country in the world: Vatican City. Encircled by Rome, Vatican City covers just over 44 hectares (110 acres) and serves as the spiritual and administrative center of the Roman Catholic Church."
            />
          </ul>
          <ul className="destinations-cards__items">
            <DestinationsCardItem
              src={Img7}
              label="Japan"
              desc="Japan is home to the world's first novel, 'The Tale of Genji,' written by Lady Murasaki Shikibu in the early 11th century. This literary masterpiece offers a fascinating glimpse into the courtly life of ancient Japan and remains a revered classic of Japanese literature. 'The Tale of Genji' is not only celebrated for its intricate storytelling and vivid characters but also for its profound influence on subsequent generations of writers and artists."
            />
            <DestinationsCardItem
              src={Img8}
              label="Mexico"
              desc="Mexico is the birthplace of chocolate! The ancient Mesoamerican civilizations, including the Mayans and Aztecs, were the first to cultivate cacao trees and develop the process of making chocolate. They revered chocolate as a divine elixir and often used it in religious ceremonies and as currency. Today, Mexico's rich chocolate-making tradition continues, with various regions across the country producing their own unique blends and flavors."
            />
          </ul>
          <ul className="destinations-cards__items">
            <DestinationsCardItem
              src={Img9}
              label="Norway"
              desc="Norway is home to some of the most breathtaking natural phenomena on Earth, including the mesmerizing Northern Lights, also known as the Aurora Borealis. This stunning light display occurs when charged particles from the sun collide with gases in the Earth's atmosphere, creating vibrant hues of green, purple, pink, and blue dancing across the night sky."
            />
            <DestinationsCardItem
              src={Img10}
              label="United States"
              desc="The United States is home to the world's first national park, Yellowstone National Park, established in 1872. Spanning across three states - Wyoming, Montana, and Idaho - Yellowstone is renowned for its extraordinary geothermal features, including the iconic Old Faithful geyser, colorful hot springs, bubbling mud pots, and dramatic canyons."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
