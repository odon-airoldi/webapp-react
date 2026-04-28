export default function AppMovieReview({ review }) {

    return (
        <div className="py-3">
            <div>{review.name}</div>
            <div className="d-flex vote-star">
                <div className="d-flex">
                    {
                        [...Array(review.vote)].map((x, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className="" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        ))
                    }
                </div>
                <div className="d-flex">
                    {
                        [...Array(5 - review.vote)].map((x, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="rgb(180,180,180)" className="" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        ))
                    }
                </div>
            </div>
            <div>{review.text}</div>
            <div>{new Date(review.created_at).toLocaleDateString("it-IT")}</div>
        </div>
    )

}

