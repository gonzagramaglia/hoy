import { Metadata } from "next";
import EmotesPage from "../components/emotes/EmotesPage";

export const metadata: Metadata = {
    title: "Emotes",
    description: "Colección de emotes para descargar",
    icons: {
        icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😎</text></svg>",
    },
};

export default function Page() {
    return <EmotesPage lang="es" />;
}
