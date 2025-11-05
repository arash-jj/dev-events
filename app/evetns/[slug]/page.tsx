import BookEvent from "@/components/BookEvent";
import EventCard from "@/components/EventCard";
import EventDetails from "@/components/EventDetails";
import { IEvent } from "@/database";
import { getSimilarEventsBySlug } from "@/lib/actions/event.action";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailItem = ({icon, alt, label} : {icon:string, alt: string, label:string}) => (
    <div className="flex-row-gap-2 flex-center">
        <Image src={icon} alt="alt"  width={17} height={17}/>
        <p>{label}</p>
    </div>
)
const EventAgenda = ({agendaItems} : {agendaItems: string[]}) => (
    <div className="agenda">
        <h2>Agenda</h2>
        <ul>
            {agendaItems.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
)
const EventTags = ({tags}: {tags: string[]}) => (
    <div className="flex flex-row gap-1.5 flex-wrap">
        {tags.map(t => (
            <div className="pill" key={t}>{t}</div>
        ))}
    </div>
)

const EventDetailsPage  = async ({params} : {params: Promise<{slug : string}>}) => {
    const slug = params.then((p)=> p.slug)
    return (
        <main>
            <Suspense fallback={<div>Loading ...</div>}>
                <EventDetails params={slug} />
            </Suspense>
        </main>
    )
}

export default EventDetailsPage 