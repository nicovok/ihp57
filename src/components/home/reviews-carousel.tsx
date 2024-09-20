import { Carousel } from '@components/carousel';
import type { FC } from 'react';

type Review = {
    text: string;
    author: string;
};

interface ReviewCarouselProps {
    reviews: Review[];
}

const ReviewsCarousel: FC<ReviewCarouselProps> = ({ reviews }) => {
    const slides = reviews.map((review, i) => (
        <div className="space-y-5">
            <p className="text-justify">{review.text}</p>
            <p className="text-right font-bold italic">{review.author}</p>
        </div>
    ));

    return <Carousel slides={slides} />;
};

export { ReviewsCarousel };
