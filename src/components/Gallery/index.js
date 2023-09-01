import ImageGallery from "react-image-gallery";

import './gallery.css'
import "react-image-gallery/styles/css/image-gallery.css"


const images = [
    {
      original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693583580/WhatsApp_Image_2023-09-01_at_8.40.22_PM_sen7yg.jpg",
      thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693583580/WhatsApp_Image_2023-09-01_at_8.40.22_PM_sen7yg.jpg",
    },
    {
      original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693583047/web_14_-_Photo_y9zfpa.jpg",
      thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693583047/web_14_-_Photo_y9zfpa.jpg",
    },
    {
      original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693583157/APP_33_-_Photo_no1xbl.jpg",
      thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693583157/APP_33_-_Photo_no1xbl.jpg",
    },
    {
        original: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693582902/REN_13_-_Photo_kxrrma.jpg",
        thumbnail: "https://res.cloudinary.com/dobpvkjao/image/upload/v1693582902/REN_13_-_Photo_kxrrma.jpg",
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