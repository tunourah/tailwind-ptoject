import React from 'react'
const features = [
    { title: 'Feature 1', description: 'Talk about some of the details...', image: 'https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F5f62f496-1e54-4012-8d8f-2f1000fe5bc5%2FUntitled.png?table=block&id=fff185a2-dff1-810c-b130-ed4997ed8b92&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=910&userId=&cache=v2' },
    { title: 'Feature 2', description: 'Is there a pain point...', image: 'https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F63d3a2f3-3120-4ed7-b1aa-aa020cb5e16c%2FUntitled.png?table=block&id=fff185a2-dff1-8164-8d80-ed3cf65ef67b&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=910&userId=&cache=v2' },
    { title: 'Feature 3', description: 'Address frequently asked questions...', image: 'https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F230c653c-0450-4fd1-8883-e96d6030db35%2FUntitled.png?table=block&id=fff185a2-dff1-81f0-8f6b-fb0cb12bb8b5&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=910&userId=&cache=v2' },
  ];
const Feture = () => {
  return (
    <div>
      
    
          <section className="py-16 bg-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                  <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
         
      </div>
  )
}

export default Feture