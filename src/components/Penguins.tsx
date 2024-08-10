import axios from "axios";
import { useEffect } from "react";

export default function Penguins() {
    useEffect(() => {
        axios
            .get("http://localhost:8080/penguins")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return <div>Penguins</div>;
}
