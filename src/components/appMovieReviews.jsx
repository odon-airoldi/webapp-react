export default function AppMovieReviews({ review }) {

    let i = 0;
    let stars = []

    while (i < review.vote) {
        stars.push(i)
        i++;
    }

    return (
        <div className="py-3">
            <div>{review.name} Vote: {review.vote}</div>
            <div>
                {
                    stars.map((star, i) => (
                        <span key={i}>*</span>
                    ))
                }
            </div>
            <div>{review.text}</div>
            <div>{new Date(review.created_at).toLocaleDateString("it-IT")}</div>
        </div>
    )

}

