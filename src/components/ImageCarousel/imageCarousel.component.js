import Img1 from "../../assets/images/england-4.jpg";
import Img2 from "../../assets/images/france-4.jpg";
import Img3 from "../../assets/images/italy-4.jpg";
import Img4 from "../../assets/images/greece-4.jpg";
import ImageSlider from "../ImageCarousel/ImageSlider";

const IMAGES = [Img1, Img2, Img3, Img4];

export function imageCarousel() {
  return <ImageSlider imageUrls={IMAGES} />;
}
