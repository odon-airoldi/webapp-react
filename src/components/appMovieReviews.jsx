export default function AppMovieReviews({ review }) {


    return (
        <div className="py-3">
            <div>{review.name} Vote: {review.vote}</div>
            <div>{review.text}</div>
            <div>{new Date(review.created_at).toLocaleDateString("it-IT")}</div>
        </div>
    )
}

