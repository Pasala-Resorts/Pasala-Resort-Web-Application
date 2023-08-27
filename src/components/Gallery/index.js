import ImageGallery from "react-image-gallery";

import './gallery.css'
import "react-image-gallery/styles/css/image-gallery.css"


const images = [
    {
      original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693078268/RESORT_KEESARA_17_-_Photo_hiaogp.jpg",
      thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693078268/RESORT_KEESARA_17_-_Photo_hiaogp.jpg",
    },
    {
      original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693078913/logo-wide_xdl4rm.png",
      thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693078913/logo-wide_xdl4rm.png",
    },
    {
      original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693079407/RESORT_KEESARA_17_-_Photo.jpg.0_rrztli.jpg",
      thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693079407/RESORT_KEESARA_17_-_Photo.jpg.0_rrztli.jpg",
    },
    {
        original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693155560/group_16_-_Photo_g8guf3.jpg",
        thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693155560/group_16_-_Photo_g8guf3.jpg",
      },
      {
        original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693155545/1_13_-_Photo_uggwdv.jpg",
        thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693155545/1_13_-_Photo_uggwdv.jpg",
      },
      {
        original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693155545/group_17_-_Photo_ccd3oz.jpg",
        thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693155545/group_17_-_Photo_ccd3oz.jpg",
      },
      {
        original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693155545/1_11_-_Photo_1_pc7fjn.jpg",
        thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693155545/1_11_-_Photo_1_pc7fjn.jpg",
      },
      {
        original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693155543/CONVO_HA_br6kfh.jpg",
        thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693155543/CONVO_HA_br6kfh.jpg",
      },
  ];

const Gallery=()=>{
    return <ImageGallery items={images} />
}

export default Gallery