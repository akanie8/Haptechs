import React, { useEffect, useState } from "react";
import { Feature } from "../types/api";

const FeatureSection: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetching data from MockAPI
    const fetchFeatures = async () => {
      try {
        const response = await fetch("https://68767a2c814c0dfa653c3f1a.mockapi.io/api/v1/Feature");
        if (!response.ok) {
          throw new Error("Failed to fetch features");
        }
        const data: Feature[] = await response.json();
        setFeatures(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) return <p>Loading features...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="py-12 lg:py-24" id="Feature">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Your Early Access is here</h2>
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          {features.map(({ id, image, title, description }) => (
            <div key={id} className="relative">
              <img src={image} alt={title} />
              <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
                <h4 className="font-semibold text-xl mb-2">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
