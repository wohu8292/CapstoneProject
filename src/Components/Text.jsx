import React from 'react'

const Text = () => {
    return (
        <div className="mb-6 px-4 sm:px-8 lg:px-12 mt-16">
            <div className="grid md:grid-cols-2 items-center gap-6">
                {/* Text Section */}
                <div
                    className="flex flex-col justify-center text-center md:text-left order-2 md:order-1 max-w-xl">
                    <h2 className="text-xl md:text-2xl font-bold py-2">{name}</h2>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolor voluptatibus
                        cupiditate nam consectetur dolore repudiandae beatae laboriosam ratione
                        necessitatibus. Repellendus suscipit quis ipsum sapiente? Voluptas animi minus
                        recusandae voluptatem!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Text