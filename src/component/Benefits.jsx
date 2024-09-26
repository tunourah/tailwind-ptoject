import React from 'react'
const benefitsInfo = [
    { title: 'Benefit 1', description: 'For example, restaurants and bakeries...', icon: 'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png' },
    { title: 'Benefit 2', description: 'Florists and other small retailers...', icon: 'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png' },
    { title: 'Benefit 3', description: 'You could also add buttons...', icon: 'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png' },
  ];
const Benefits = () => {
  return (
    <div>


 
    <section className="py-16 bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Here are some of the benefits of your offer</h2>
        <p className="mt-4 text-gray-500">Explain what makes your product or service great...</p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefitsInfo.map((benefit, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img src={benefit.icon} alt={benefit.title} className="w-12 h-12" />
            <h3 className="mt-4 text-xl font-bold">{benefit.title}</h3>
            <p className="mt-2 text-gray-500 text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
 


    </div>
  )
}

export default Benefits