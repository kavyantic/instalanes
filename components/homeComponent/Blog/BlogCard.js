import React from 'react'
const BlogData = [
    { link: "#", heading: "The Coldest Sunset", date: "12 oct 2022", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", by: "devicecure", src: "https://images.unsplash.com/photo-1667122169237-f9826de1786b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    { link: "#", heading: "The Coldest Sunset", date: "12 oct 2022", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", by: "devicecure", src: "https://images.unsplash.com/photo-1667122169237-f9826de1786b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    { link: "#", heading: "The Coldest Sunset", date: "12 oct 2022", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", by: "devicecure", src: "https://images.unsplash.com/photo-1667122169237-f9826de1786b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    { link: "#", heading: "The Coldest Sunset", date: "12 oct 2022", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", by: "devicecure", src: "https://images.unsplash.com/photo-1667122169237-f9826de1786b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
]
const BlogCard = () => {
    return (
        <section className="blog_section mt-4 lg:mt-8">
            <div className="container">
                <h2 className="slider_title mb-4">read our latest <span>blog</span></h2>
                <div className="grid grid-cols-12 gap-4">
                    {BlogData.map(({ link, heading, date, description, by, src }) => {
                        return (
                            <div className="col-span-full sm:col-span-6 md:col-span-3">
                                <a href={link}>
                                    <div className="max-w-sm rounded-lg overflow-hidden">
                                        <img className="w-full" src={src} alt={heading} />
                                        <div className='bg-primaryLight py-2 px-3'>
                                            <p className='text-xs text-primary font-medium'>{date}</p>
                                        </div>
                                        <div className="pr-2 py-4">
                                            <div className="text-xl text-secondary mb-2">{heading}</div>
                                            <p className="text-secondaryLight text-sm mb-3">
                                                {description}
                                            </p>
                                            <p className='text-secondary text-xs'><b>written by:</b><span className='text-primary'>{by}</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default BlogCard