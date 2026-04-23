import AppMovieReview from "./AppMovieReview"

export default function AppMovieReviews({ dataMovie }) {


    return (
        <>
            {dataMovie && (
                <div className="py-3">
                    <h3 className="h4">Reviews</h3>
                    {
                        dataMovie.reviews.map(review => (
                            <AppMovieReview review={review} key={review.id} />
                        ))
                    }
                </div>
            )}
        </>

    )

}

