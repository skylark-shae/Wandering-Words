const ArticleCard = ({title, subheading, contentSummary}: {title: string, subheading: string, contentSummary: string}) => {
    return (
        <>
            <div>
                <h3>{title}</h3>
                <h5>{subheading}</h5>
                <p>{contentSummary}</p>
            </div>
        </>
    )
}

export default ArticleCard;