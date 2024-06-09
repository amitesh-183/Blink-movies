import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SearchIcon } from "lucide-react";

const QuickSearch = () => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className=" bg-[#FF0080] hover:bg-[#FF0080] h-16 hover:shadow hover:shadow-[#ff0080] p-4 fixed bottom-8 z-10 right-4 rounded-full"
            >
              <SearchIcon className="w-8 h-8 text-emerald-50" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Quick Search</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default QuickSearch;
