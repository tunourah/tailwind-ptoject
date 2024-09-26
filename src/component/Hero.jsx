import React from 'react'

const Hero = () => {
 return (
    <section className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=2000&userId=&cache=v2')" }}>
      <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center text-center">
        <div className="max-w-xl px-6">
          <h1 className="text-4xl lg:text-6xl font-bold">Concisely describe your product or service</h1>
          <p className="mt-4">No need to get clever. Tell people exactly what you're offering...</p>
          <button className="mt-6 bg-yellow-500 text-black py-3 px-6 rounded-lg font-bold hover:bg-orange-200">Order Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero
