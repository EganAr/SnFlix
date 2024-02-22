import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface iAppProps {
  title: string;
  youtubeUrl: string;
  overview: string;
  state: boolean;
  changeState: any;
  release: number;
  age: number;
  duration: number;
}

export default function PlayVideoModal({
  title,
  youtubeUrl,
  overview,
  state,
  changeState,
  release,
  age,
  duration,
}: iAppProps) {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex gap-3">
            {title}
            <p className="text-gray-400">( {release} )</p>
          </DialogTitle>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex gap-2 items-center ">
            <p>{age}+</p>
            <p>{duration} hr</p>
          </div>
        </DialogHeader>
        <iframe src={youtubeUrl} height={250} width={"100%"}></iframe>
      </DialogContent>
    </Dialog>
  );
}
