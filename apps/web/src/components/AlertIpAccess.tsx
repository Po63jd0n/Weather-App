import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"


interface AlertIpAccessProps {
    open?: boolean;
    setOpen?: (open: boolean) => void;
}

export default function AlertIpAccess({open, setOpen }: AlertIpAccessProps ) {
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
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
//onclick a potem zmiana stanu w home page