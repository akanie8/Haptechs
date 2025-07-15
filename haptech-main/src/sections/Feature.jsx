import React, { useEffect, useState } from "react";
import FeaturedCard from "../components/FeaturedCard";
const Feature = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //Fetch all the data from the API {MockAPI}
        const res = await fetch(
          "https://68767a2c814c0dfa653c3f1a.mockapi.io/api/v1/Feature"
        );
        const data = await res.json();
        setFeatures(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Your Haptech set is here</h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
            {features.map((item) => (
              <FeaturedCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Feature;
