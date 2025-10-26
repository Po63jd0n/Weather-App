import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {Cloud} from "lucide-react";


export default function AlertIpAccess() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div className="text-center py-12">
                    <Cloud className="w-16 h-16 text-muted-foreground mx-auto mb-4"/>
                    <Button variant="outline">Add Location</Button>
                    Give access to your IP to get weather based on your location.
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Do you agree to share your IP</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will make your IP address visible to
                        us. Are you sure you want to continue?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Exit</AlertDialogCancel>
                    <AlertDialogAction>Give Access</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}


