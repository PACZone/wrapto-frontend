import { Button } from "components/shared/Button";
import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-sp7 justify-center items-center h-screen ">
            <h1>Page Not Found</h1>
            <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
    );
}
