import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleFeatureData } from "../data/singleFeatureData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SingleFeature = () => {
  const { feature } = useParams();
  const [featureItem, setFeatureItem] = useState(null);

  useEffect(() => {
    const item = singleFeatureData.find((item) => item.id === feature);
    setFeatureItem(item);
  }, [feature]);

  if (!featureItem) {
    return <p>Feature not found</p>;
  }

  return (
    <>
      <section id="single-feature">test</section>
    </>
  );
};

export default SingleFeature;
