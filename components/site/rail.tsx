import { cn } from "@/lib/utils";

/** Registration line that opens a section: "+ 02 ———————". */
export default function Rail({
  index,
  children,
  className,
}: {
  index: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rail t-label", className)} aria-hidden={children ? undefined : true}>
      <span className="rail-plus" aria-hidden="true" />
      <span className="tabular">{index}</span>
      {children}
    </div>
  );
}
