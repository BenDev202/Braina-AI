import { useId } from "react"

import { Input } from "@/components/ui/input"

export default function SearchInput() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <div className="relative">
        <Input
          id={id}
          className="pe-11"
          placeholder="Search..."
          type="search"
        />
        <div className="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2">
          <kbd className="text-muted-foreground/70 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  )
}
