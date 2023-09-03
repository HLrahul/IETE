import { Card } from "./ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";

type EventDialogProps = {
    title: string;
    date: string;
    description: string;
};

export const EventDialog = (props: EventDialogProps) => {
    const { title, date, description } = props;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="p-10 w-auto cursor-pointer hover:bg-primary/10 flex items-center justify-center">
                    {title}
                </Card>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{date}</DialogDescription>
                </DialogHeader>

                <div className="flex-col gap-5">
                    <p>{description}</p>
                </div>
            </DialogContent>
        </Dialog>
    );
};
