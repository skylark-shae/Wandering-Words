import { useState, useEffect } from "react";
import { retrieveFeedbacks } from "../api/feedbackAPI.tsx";
import type { FeedbackData } from "../interfaces/FeedbackData";
import FeedbackList from "../components/ContactForm.tsx"
import FeedbackForm from "../components/FeedbackForm.tsx";

const Feedback = () => {

    const [feedbacks, setFeedbacks] = useState<FeedbackData[]>([]);

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {
        const data = await retrieveFeedbacks();
        setFeedbacks(data);
    }

    return (
        <>
        <FeedbackForm />
        <FeedbackList feedbacks={feedbacks} />
        </>
        
    );
};

export default Feedback;
