import { Timestamp } from "firebase/firestore";

export interface UpcomingDate {
    id: string;
    title: string;
    date_start: Timestamp;
    date_end: Timestamp;
    location: string;
    instrument_type: string;
    price: string;
    currency: string;
}
