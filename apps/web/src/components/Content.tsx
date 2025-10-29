import { Button } from "@/components/ui/button"
import {Cloud} from "lucide-react";

interface ContentProps {
    onAddLocationClick: () => void;
}

export default function Content({ onAddLocationClick }: ContentProps) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
                <Cloud className="w-16 h-16 text-muted-foreground mx-auto mb-4"/>
                <Button variant="outline" onClick = {onAddLocationClick}> Weather Forecast</Button>
                <div className="text-center py-12">
                    Give access to your IP to get weather based on your location.
                </div>
            </div>
        )
}