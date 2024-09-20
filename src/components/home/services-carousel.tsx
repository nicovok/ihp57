import type { FC } from 'react';

import { Carousel } from 'src/components/carousel';

type Service = {
    lead: string;
    text: string;
};

interface ServicesCarousel {
    services: Service[];
}

const ServicesCarousel: FC<ServicesCarousel> = ({ services }) => {
    return (
        <div className='h-full'>
            <Carousel
                slides={services.map((service) => (
                    <div className='space-y-5'>
                        <h3 className='text-3xl font-bold uppercase'>{service.lead}</h3>
                        <hr className='border-primary border-2 w-24' />
                        <p>{service.text}</p>
                    </div>
                ))}
            />
        </div>
    );
};

export { ServicesCarousel };
