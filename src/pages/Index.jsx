import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Info Submitted:", contactInfo);
  };

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <header className="relative h-96 w-full bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold">Discover China</h1>
          <p className="text-2xl mt-4">A Journey Through the Middle Kingdom</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              China, officially the People's Republic of China, is a country in East Asia. It is the world's most populous country, with a population of more than 1.4 billion. China spans five geographical time zones and borders 14 different countries, the second most of any country in the world after Russia.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Key Highlights Section */}
      <section className="container mx-auto px-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>History</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              China's history is one of the oldest and most complex in the world. The history of China can be traced back over 4,000 years. The country has seen the rise and fall of numerous dynasties, each contributing to the rich tapestry of Chinese culture and history.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Culture</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Chinese culture is one of the world's oldest cultures, tracing back thousands of years. Important components of Chinese culture include literature, music, visual arts, martial arts, cuisine, and religion.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Geography</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              China is the world's third-largest country by total area. It has a diverse landscape, ranging from the Gobi and Taklamakan deserts in the north to subtropical forests in the south. The Himalaya, Karakoram, Pamir, and Tian Shan mountain ranges separate China from South and Central Asia.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Tourist Attractions Section */}
      <section className="container mx-auto px-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Tourist Attractions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <AspectRatio ratio={16 / 9} className="w-1/3">
                <img src="/placeholder.svg" alt="Great Wall of China" className="object-cover rounded-md" />
              </AspectRatio>
              <div>
                <h3 className="text-xl font-semibold">Great Wall of China</h3>
                <p>
                  The Great Wall of China is a series of fortifications that were built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <AspectRatio ratio={16 / 9} className="w-1/3">
                <img src="/placeholder.svg" alt="Forbidden City" className="object-cover rounded-md" />
              </AspectRatio>
              <div>
                <h3 className="text-xl font-semibold">Forbidden City</h3>
                <p>
                  The Forbidden City is a palace complex in central Beijing, China. The former Chinese imperial palace from the Ming dynasty to the end of the Qing dynasty, it now houses the Palace Museum.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <AspectRatio ratio={16 / 9} className="w-1/3">
                <img src="/placeholder.svg" alt="Terracotta Army" className="object-cover rounded-md" />
              </AspectRatio>
              <div>
                <h3 className="text-xl font-semibold">Terracotta Army</h3>
                <p>
                  The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer Section */}
      <footer className="container mx-auto px-4 py-6 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={contactInfo.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={contactInfo.email}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={contactInfo.message}
                onChange={handleChange}
                required
              />
              <Button type="submit">Submit</Button>
            </form>
          </div>
          <div className="mt-6 md:mt-0 text-center md:text-right">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-500">Facebook</a>
              <a href="#" className="text-blue-400">Twitter</a>
              <a href="#" className="text-pink-500">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;