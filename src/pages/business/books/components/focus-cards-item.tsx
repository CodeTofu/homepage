import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsItem() {
    const cards = [
        {
            title: "The First Rule",
            src: "/img/books/1.jpg",
        },
        {
            title: "The First Rule",
            src: "/img/books/2.jpg",
        },
        {
            title: "The First Rule",
            src: "/img/books/3.jpg",
        },
        {
            title: "The First Rule",
            src: "/img/books/4.jpg",
        },
        {
            title: "The First Rule",
            src: "/img/books/5.jpg",
        },
        {
            title: "The First Rule",
            src: "/img/books/6.jpg",
        },
        {
            title: "The First Rule",
            src: "/img/books/7.jpg",
        },
        {
            title: "The First Rule",
            src: "/img/books/8.jpg",
        },
        {
            title: "The First Rule",
            src: "/img/books/9.jpg",
        },
        {
            title: "The First Rule",
            src: "/img/books/10.jpg",
        },
        {
            title: "The First Rule",
            src: "/img/books/11.jpg",
        },
        {
            title: "The First Rule",
            src: "/img/books/12.jpg",
        }
    ];

    return <FocusCards cards={cards} />;
}

