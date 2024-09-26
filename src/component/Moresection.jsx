import React from 'react';

const Moresection = () => {
  return (
    <div className="container my-16 mx-auto">
      {/* Flex container */}
      <div className="flex flex-col lg:flex-row justify-center items-center">
        
        {/* Image first on large screens, stays second on small screens */}
        <img 
          src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F2f5489f8-f25a-4888-ad7f-e40ea4a7281d%2FUntitled.png?table=block&id=fff185a2-dff1-81a1-ba66-dde092088d99&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=860&userId=&cache=v2" 
          alt="Business Info" 
          className="order-2 lg:order-1 w-full lg:w-1/2 px-4 mb-4"
        />
        
        {/* Text section (h2 and p) next to the image on large screens */}
        <div className="order-1 lg:order-2 w-full lg:w-1/2 px-4">
          <h2 className="text-3xl font-bold text-center lg:text-left mb-4">
            Some more information about your business
          </h2>
          <p className="text-gray-500 text-center lg:text-left mt-4">
            Share a little about yourself as a business owner, or maybe describe what makes your product or service unique.
            Give visitors one more reason to care about your offer and want to buy from you.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Moresection;
