"use client"
import Image from "next/image"
import { starIcons, arrowIcons } from "@/assets"
import { reviewData } from "@/assets"
const ReviewEntry = () => {
    return (
        <div className="absolute">
            {reviewData.map((review, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl">
                    <Image className={`w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain`}
                        src={review.image}
                        alt={"Review Client Image"}
                        width={100}
                        height={100}
                    />
                    <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600 " >
                        {review.name}
                    </h1>
                    <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2" >
                        {review.comment}
                    </p>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <span className="text-lg font-light text-yellow-600 mr-3">
                            4.5
                        </span>
                        <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                            {review.stars.map((star, i) => (
                                <span key={i}>{star === 1 ? starIcons[0] : starIcons[1]}</span>
                            ))}
                        </div>
                    </div>
                </div>

            ))}
        </div>


    )
}

export default ReviewEntry