
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Timeline = React.forwardRef<
  HTMLOListElement,
  React.ComponentProps<"ol">
>((props, ref) => (
  <ol
    ref={ref}
    className={cn("flex flex-col", props.className)}
    {...props}
  />
))
Timeline.displayName = "Timeline"

type TimelineItemContextValue = {
  isLast: boolean
}

const TimelineItemContext = React.createContext<TimelineItemContextValue>({
  isLast: false,
})

const TimelineItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>((props, ref) => {
  const [isLast, setIsLast] = React.useState(false)

  React.useEffect(() => {
    if (ref && "current" in ref && ref.current) {
      if (!ref.current.nextElementSibling) {
        setIsLast(true)
      }
    }
  }, [ref])

  return (
    <TimelineItemContext.Provider value={{ isLast }}>
      <li
        ref={ref}
        className={cn(
          "flex min-h-14 flex-row gap-x-4",
          props.className
        )}
        {...props}
      />
    </TimelineItemContext.Provider>
  )
})
TimelineItem.displayName = "TimelineItem"

const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => {
  const { isLast } = React.useContext(TimelineItemContext)
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center",
        props.className
      )}
      {...props}
    >
      <div className="size-4 rounded-full" />
      {!isLast && <div className="h-full w-px bg-muted-foreground/30" />}
    </div>
  )
})
TimelineConnector.displayName = "TimelineConnector"

const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex min-w-0 flex-1 flex-col justify-center py-2",
      props.className
    )}
    {...props}
  />
))
TimelineHeader.displayName = "TimelineHeader"

const TimelineIcon = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => (
  <div
    ref={ref}
    className={cn(
      "-ml-[calc(1rem+2px)] -mt-[calc(theme(spacing.14)_-_1rem)] flex size-8 items-center justify-center self-start rounded-full bg-background",
      props.className
    )}
    {...props}
  />
))
TimelineIcon.displayName = "TimelineIcon"

const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"h3">
>((props, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-md font-semibold text-foreground",
      props.className
    )}
    {...props}
  />
))
TimelineTitle.displayName = "TimelineTitle"

const TimelineDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<"p">
>((props, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", props.className)}
    {...props}
  />
))
TimelineDescription.displayName = "TimelineDescription"

export {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineTitle,
  TimelineDescription,
}
